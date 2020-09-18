import React, { useState } from "react" 
import styles from "../styles/Home.module.css";
import { useRouter } from 'next/router';
import { firestore } from "../config/firebase";

const Registration = () => {
  const router = useRouter();


  const [error, setError] = useState('')
  const [email, setEmail] = useState('')
  
  const registration = () => {
    if(email === ''){
      setError('Please Enter the Email')
    } else if(!validateEmail(email)){
      setError('Invalid Email Format')
    }else {
      setError('')
      // alert(email)
    
      // firestore.collection('/registrations').doc(email).set({}).then(function(docRef) {
      //   // router.push('/ticket')
      //   console.log("docRef");
      //   console.log(docRef);
      // })

       firestore.collection('/registrations')
      .doc(email)
      .get()
      .then(function(doc) {
            // console.log("result")
            // console.log(doc)
            // console.log(doc.exists)
            // console.log(!!doc.data().username)
            if(!doc.exists){
              firestore.collection('/registrations').doc(email).set({}).then(function(docRef) {})
            } 

            router.push('/ticket')
        })
    }  
  }

  const  validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  const changeEmail = (email) => {
      setEmail(email);
  }

  return (
    <div>
      <div className={styles.mainDiv}>
        <div className={styles.title}>
          5 Days and 5 Tracks covering hottest Technology Trends in Darija
        </div>
        <div className={styles.subtitle}>19-23 October | Online</div>
        <div className={styles.inputDiv}>
          <input
            type="email"
            value={email}
            placeholder="Enter email to register for free"
            className={styles.input}
            onChange={(e) => changeEmail(e.target.value)}
          />
          <button className={styles.button} onClick={registration}>
            <span className={styles.button_title}>Register Now</span>
          </button>
        </div>
        {error && 
        <div style={{ marginTop: 5, color: "red"}}>
          {error}
        </div>
        }
      </div>
    </div>
  );
};

export default Registration;
