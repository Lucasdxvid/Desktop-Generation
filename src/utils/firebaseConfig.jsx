// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGSyLFASOIKayrw9uwQmZsZsj6vR_RvCk",
  authDomain: "desktop-generation.firebaseapp.com",
  projectId: "desktop-generation",
  storageBucket: "desktop-generation.appspot.com",
  messagingSenderId: "550146343989",
  appId: "1:550146343989:web:4461ef662fe7a1daeb5d7c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
