// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyADOnkYDZ5EsAO_6K06GPPSaaNvgMUDJ5A",
  authDomain: "vite-contact-bf971.firebaseapp.com",
  projectId: "vite-contact-bf971",
  storageBucket: "vite-contact-bf971.firebasestorage.app",
  messagingSenderId: "777671453355",
  appId: "1:777671453355:web:6235c72bcaebc1105ae5ee",
  measurementId: "G-WFNK6BC6ZN",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);
