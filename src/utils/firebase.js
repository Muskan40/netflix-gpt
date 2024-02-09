// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAwV01lM9GVJPVk5ZXnQH_SHKr2RlAmxGg",
  authDomain: "netflix-gpt-643d8.firebaseapp.com",
  projectId: "netflix-gpt-643d8",
  storageBucket: "netflix-gpt-643d8.appspot.com",
  messagingSenderId: "854711930594",
  appId: "1:854711930594:web:11afc527694253a9b158bb",
  measurementId: "G-NY85GTKLN4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);