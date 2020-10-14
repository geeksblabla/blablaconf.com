import React, { useState, useRef } from "react";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import ReCAPTCHA from "react-google-recaptcha";
import { firestore } from "../../config/firebase";
import axios from "axios";

const RECAPTCHA_KEY = "6LerT9UZAAAAAFOZW2syuTwCMAq1EBLkOSoEUvdF";

export const RegistrationForm = ({ secondary = false }) => {
  const router = useRouter();

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const recaptchaRef = useRef();
  const onChange = (e) => {
    console.log(e);
  };

  const registration = async () => {
    await recaptchaRef.current.executeAsync();
    const reCaptchaValue = recaptchaRef.current.getValue();
    if (email === "" && reCaptchaValue) {
      setError("Please Enter your Email");
    } else if (!validateEmail(email)) {
      setError("Invalid Email Format");
    } else {
      setError("");
      firestore
        .collection("/registrations")
        .doc(email)
        .get()
        .then(function (doc) {
          if (!doc.exists) {
            firestore
              .collection("/registrations")
              .doc(email)
              .set({ email, date: new Date() })
              .then(function (response) {
                // axios.post("/api/sendEmail", { email });
              });
          }

          router.push("/ticket");
        });
    }
  };

  const changeEmail = (email) => {
    setEmail(email);
  };

  return (
    <>
      <div className={styles.inputDiv}>
        <input
          type="email"
          value={email}
          placeholder="Enter your email to register for free"
          className={`${styles.input} ${secondary && styles.input_secondary}`}
          required
          onChange={(e) => changeEmail(e.target.value)}
          aria-labelledby="registrationButton"
          name="email"
        />
        <button
          className={`${styles.button} ${secondary && styles.button_secondary}`}
          onClick={registration}
          id="registrationButton"
        >
          Grab Your Ticket
        </button>
      </div>
      <ReCAPTCHA
        sitekey={RECAPTCHA_KEY}
        onChange={onChange}
        size="invisible"
        ref={recaptchaRef}
      />
      {error && <div style={{ marginTop: 5, color: "red" }}>{error}</div>}
    </>
  );
};

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
