import firebase from "firebase";
import "firebase/auth";

// const firebaseConfig = {
//   apiKey: process.env.NEXT_PUBLIC_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//   databaseURL: process.env.NEXT_PUBLIC_DATA_BASE_URL,
//   projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
// };
 
const firebaseConfig = {
  apiKey: "AIzaSyDugS9zg_Y79x6V6NHs_C5kzHm6xZQJlWg",
  authDomain: "lablaconf-b56b8.firebaseapp.com",
  databaseURL: "https://blablaconf-b56b8.firebaseio.com",
  projectId: "blablaconf-b56b8",
}; 

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const auth = firebase.auth();
const firestore = firebase.firestore();

export {
 auth,
 firestore,
 firebase
};
