// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyANspf91_L2X1kFKBp94tSU5cmq9zYOuiE",
  authDomain: "fir-practice-d3e27.firebaseapp.com",
  projectId: "fir-practice-d3e27",
  storageBucket: "fir-practice-d3e27.firebasestorage.app",
  messagingSenderId: "540820836938",
  appId: "1:540820836938:web:f02061e0a38b5573e08cb3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
 export const auth = getAuth();