import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth,GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBi0SyaHuS5K_zb7wI4EyEb5Vs9v4xNS-g",
    authDomain: "react-journal-96136.firebaseapp.com",
    projectId: "react-journal-96136",
    storageBucket: "react-journal-96136.appspot.com",
    messagingSenderId: "253092670284",
    appId: "1:253092670284:web:3150185bdf265b7928fde9"
};

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const auth = getAuth(app) 

const googleAuthProvider = new GoogleAuthProvider()

export {
    db,
    auth,
    googleAuthProvider
}