// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "blog-app-react-a6120.firebaseapp.com",
  projectId: "blog-app-react-a6120",
  storageBucket: "blog-app-react-a6120.appspot.com",
  messagingSenderId: "725363420566",
  appId: "1:725363420566:web:be5f475a858fa0f4d0c1b7",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
