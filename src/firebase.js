import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import firebase from 'firebase/app';
import 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyB9MGEphunww0Uhqo0KmKz9h4LPFwhP5OA",
    authDomain: "ospjgroup.firebaseapp.com",
    projectId: "ospjgroup",
    storageBucket: "ospjgroup.appspot.com",
    messagingSenderId: "574068301429",
    appId: "1:574068301429:web:c697336796a9446041e23c"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const db = getFirestore(app);

  export default db;