// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCjM6nV0KFYvmu0F8gIEC_Is1PIbLBD20A",
  authDomain: "netflix-project-dff4b.firebaseapp.com",
  projectId: "netflix-project-dff4b",
  storageBucket: "netflix-project-dff4b.appspot.com",
  messagingSenderId: "337451105135",
  appId: "1:337451105135:web:8056149eb9af76e270069a",
  measurementId: "G-HDC4NNK6QK"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);