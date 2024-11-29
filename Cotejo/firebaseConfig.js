// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getDatabase } from 'firebase/database';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPpaywIixkHL7pI0PvzZkgiMZ4sXw85EI",
  authDomain: "cotejo-28d51.firebaseapp.com",
  projectId: "cotejo-28d51",
  storageBucket: "cotejo-28d51.firebasestorage.app",
  messagingSenderId: "929402491866",
  appId: "1:929402491866:android:69ecce9a2fd99236fa26e3",
  measurementId: "G-QB18GGPVZH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const database = getDatabase(app);

export { db, auth, database };