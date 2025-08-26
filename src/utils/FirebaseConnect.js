import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";


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
const auth = getAuth();
const provider = new GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });



export { auth, provider };

