// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDAxQhTYgeVJOT7YMpYeqK-dICdMG_UTRM",
  authDomain: "realtor-clone-react-afbd2.firebaseapp.com",
  projectId: "realtor-clone-react-afbd2",
  storageBucket: "realtor-clone-react-afbd2.appspot.com",
  messagingSenderId: "886873776246",
  appId: "1:886873776246:web:40160634a841c59f78ff57"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()