import React, { useState } from "react";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import { firestore } from "../../config/firebase";
import axios from "axios";

const Registration = () => {
  const router = useRouter();

  const [error, setError] = useState("");
  const [email, setEmail] = useState("");

  const registration = () => {
    if (email === "") {
      setError("Please Enter the Email");
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
              .add({ email })
              .then(function (response) {
                axios.post("/api/sendEmail", { email });
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
          placeholder="Enter email to register for free"
          className={styles.input}
          required
          onChange={(e) => changeEmail(e.target.value)}
        />
        <button className={styles.button} onClick={registration}>
          Register Now
        </button>
      </div>
      {error && <div style={{ marginTop: 5, color: "red" }}>{error}</div>}
    </>
  );
};

export default Registration;

const validateEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
};
