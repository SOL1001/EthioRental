// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ad19f.firebaseapp.com",
  projectId: "mern-estate-ad19f",
  storageBucket: "mern-estate-ad19f.appspot.com",
  messagingSenderId: "349789600270",
  appId: "1:349789600270:web:b1bbcf7e9e7c303c551a5f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);