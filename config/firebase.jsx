import firebase from "firebase";
import "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  databaseURL: process.env.NEXT_PUBLIC_DATA_BASE_URL,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

let auth, firestore = null;

try {
  auth = firebase.auth();
  firestore = firebase.firestore();
} catch (error) {
  console.log(error)
}
export {
  auth,
  firestore,
  firebase
};
