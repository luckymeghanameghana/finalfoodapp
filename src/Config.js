// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrwP22oWNl_FfMiSoCZJURGsDcWAqOTtY",
  authDomain: "fir-connect-9d54b.firebaseapp.com",
  projectId: "fir-connect-9d54b",
  storageBucket: "fir-connect-9d54b.appspot.com", 
  messagingSenderId: "210401082621",
  appId: "1:210401082621:web:d0738a468b311f8e275294",
  measurementId: "G-WRQ5Y9Z4N5"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export initialized Firebase services
export const db = getFirestore(app); // Firestore database instance
export const auth = getAuth(app); // Firebase Authentication instance
export const provider = new GoogleAuthProvider(); // Google Auth Provider instance
