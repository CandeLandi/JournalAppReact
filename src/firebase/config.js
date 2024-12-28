// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8VXR4ai2TB0eb47qAqyVXDYeaFBKSBcY",
  authDomain: "react-curso-fa305.firebaseapp.com",
  projectId: "react-curso-fa305",
  storageBucket: "react-curso-fa305.firebasestorage.app",
  messagingSenderId: "19642297987",
  appId: "1:19642297987:web:fbf2779b7ed9e5b6e835b6"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth( FirebaseApp );
export const FirebaseDB = getFirestore( FirebaseApp );