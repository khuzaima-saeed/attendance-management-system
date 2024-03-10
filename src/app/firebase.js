// Import the functions you need from the SDKs you need
import { getApp, initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getFirestore } from 'firebase/firestore';


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbplYtpt1ADn1UKLXYuB0O7MahduhDLMM",
  authDomain: "attendance-management-sy-5f1ea.firebaseapp.com",
  projectId: "attendance-management-sy-5f1ea",
  storageBucket: "attendance-management-sy-5f1ea.appspot.com",
  messagingSenderId: "132702380257",
  appId: "1:132702380257:web:d4c339df2f6974d14217a0",
  measurementId: "G-5C29BM3XL5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
 
export { auth, app, db};