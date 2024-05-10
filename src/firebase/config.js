import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBjNWuvNP0WWYAgYuxoTWrcbvkqRdox0jE",
    authDomain: "vue-blog-system-39f17.firebaseapp.com",
    projectId: "vue-blog-system-39f17",
    storageBucket: "vue-blog-system-39f17.appspot.com",
    messagingSenderId: "451084571834",
    appId: "1:451084571834:web:13fe7da5f2e2926a1d9e83"
  };

  const app = firebase.initializeApp(firebaseConfig);

  const db = app.firestore();
  let timestamp = firebase.firestore.FieldValue.serverTimestamp;
export {db,timestamp};