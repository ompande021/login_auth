import { getAuth } from 'firebase/auth'
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyD9SRGd0iLFyI5Fv4p59AZm4h_zF5TW86I",
  authDomain: "react-email-75ac7.firebaseapp.com",
  projectId: "react-email-75ac7",
  storageBucket: "react-email-75ac7.appspot.com",
  messagingSenderId: "173411300179",
  appId: "1:173411300179:web:a616df3061548f1ce8a7a6"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);