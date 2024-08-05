// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMPnjN5mKMQjjJiEWqdjAnqrbARI-gTlk",
  authDomain: "pantry-tracker-f61cb.firebaseapp.com",
  projectId: "pantry-tracker-f61cb",
  storageBucket: "pantry-tracker-f61cb.appspot.com",
  messagingSenderId: "542118183495",
  appId: "1:542118183495:web:d18f4328689010ccb4e762",
  measurementId: "G-XKWFGEGEJD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
export { firestore };