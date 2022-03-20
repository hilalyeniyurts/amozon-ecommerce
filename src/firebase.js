import { initializeApp } from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyAm52UglYNiNYtn86RmelVT2n59tJMraRY",
    authDomain: "eshop-9bb49.firebaseapp.com",
    projectId: "eshop-9bb49",
    storageBucket: "eshop-9bb49.appspot.com",
    messagingSenderId: "471187888858",
    appId: "1:471187888858:web:a07d9c0248f70e1d23e3e3",
    measurementId: "G-RWL4J3NNG3"
  };
  initializeApp(firebaseConfig);

  const db = getFirestore();

  const auth = getAuth();
  
  export {db, auth};

//   import { initializeApp } from 'firebase/app';

