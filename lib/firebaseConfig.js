import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Your Firebase Config (from Firebase Console)
const firebaseConfig = {
    apiKey: "AIzaSyAs2RHt9m7CVr8Ot1ei5sdTK20VihiljTk",
    authDomain: "fir-project-333.firebaseapp.com",
    projectId: "fir-project-333",
    storageBucket: "fir-project-333.firebasestorage.app",
    messagingSenderId: "374856590500",
    appId: "1:374856590500:web:80003edffc82b6a836b231",
    measurementId: "G-9DJYEMXH0Y"
  };    
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider, signInWithPopup, signOut };
