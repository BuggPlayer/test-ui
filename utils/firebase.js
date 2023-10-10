
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-next-demo.firebaseapp.com",
  projectId: "blog-next-demo",
  storageBucket: "blog-next-demo.appspot.com",
  messagingSenderId: "398576241263",
  appId: "1:398576241263:web:aeeb4c2ca41150edf51b9a"
};

// // Initialize Firebase
export const app = initializeApp(firebaseConfig);