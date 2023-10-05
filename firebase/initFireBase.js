// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCa-R0L2e9nvNA86630GVc6raUuIEG2VR4",
  authDomain: "backend-practice-fcf39.firebaseapp.com",
  projectId: "backend-practice-fcf39",
  storageBucket: "backend-practice-fcf39.appspot.com",
  messagingSenderId: "510677082787",
  appId: "1:510677082787:web:bd35b5aaf74bf21f2a9516"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db  = getFirestore()