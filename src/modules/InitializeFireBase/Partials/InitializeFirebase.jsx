// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA6FMQ_gkRfQQOt1kAvaiTTNTgFPT6zsU8",
  authDomain: "Justclickin-e2f66.firebaseapp.com",
  projectId: "Justclickin-e2f66",
  storageBucket: "Justclickin-e2f66.appspot.com",
  messagingSenderId: "234493038883",
  appId: "1:234493038883:web:62922d77c6a1122fc03c96",
  measurementId: "G-52FVSNHHLX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);