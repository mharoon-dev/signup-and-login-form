// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDNFD6gaEs86-2ONnXdo2XtfJnOYUE1Dww",
  authDomain: "login-and-sign-up-2bf4c.firebaseapp.com",
  projectId: "login-and-sign-up-2bf4c",
  storageBucket: "login-and-sign-up-2bf4c.appspot.com",
  messagingSenderId: "509642645813",
  appId: "1:509642645813:web:3c21795714a1db86b4ec7c",
  measurementId: "G-KB5LDS5G2N"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { app , auth , createUserWithEmailAndPassword , signInWithEmailAndPassword , onAuthStateChanged , signOut }
