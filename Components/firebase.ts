// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBV_GvfwHE8_G6XMHUtzNbSPHflcUWfs28",
  authDomain: "tooltoolito.firebaseapp.com",
  projectId: "tooltoolito",
  storageBucket: "tooltoolito.appspot.com",
  messagingSenderId: "864490855187",
  appId: "1:864490855187:web:a2413a67ba7fb26c3a18e6",
  measurementId: "G-YDKCWMFE07",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };
