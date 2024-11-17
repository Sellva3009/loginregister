// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKNLHGUBMZLlFI3MCxYaGmJ3WSY4IoPPc",
  authDomain: "loginregister-b17ac.firebaseapp.com",
  projectId: "loginregister-b17ac",
  storageBucket: "loginregister-b17ac.appspot.com",
  messagingSenderId: "930957977656",
  appId: "1:930957977656:web:0c5d80f6179969b613decd",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const createUser = createUserWithEmailAndPassword;
export const signInUser = signInWithEmailAndPassword;
