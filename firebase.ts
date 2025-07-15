// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC4OBpxUC2SNNyNimBhtTZrZ_ST3lSynsg",
  authDomain: "my-portfolio-ed7a0.firebaseapp.com",
  projectId: "my-portfolio-ed7a0",
  storageBucket: "my-portfolio-ed7a0.firebasestorage.app",
  messagingSenderId: "1076341464987",
  appId: "1:1076341464987:web:f528c9d554914e9be08b3e",
  measurementId: "G-YK334JRLB6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);