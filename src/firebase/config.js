import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };

  const app = firebase.initializeApp(firebaseConfig);

  const db = app.firestore();
  let timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {db,timestamp};
