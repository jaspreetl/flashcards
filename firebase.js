// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirebase} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD3BMoLiuJ2k2aHDPFap-_AdHIFJ7B8-WI",
  authDomain: "flashcards-77a05.firebaseapp.com",
  projectId: "flashcards-77a05",
  storageBucket: "flashcards-77a05.appspot.com",
  messagingSenderId: "954771634551",
  appId: "1:954771634551:web:9bd1338297185692e44972",
  measurementId: "G-4P2PQEPSKV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirebase(app)

export {db}