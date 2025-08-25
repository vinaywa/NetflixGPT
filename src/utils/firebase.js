// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuFgaNXx8funfdWXnO-xubNEVmVaoqN8A",
  authDomain: "netflix-web-c0ac9.firebaseapp.com",
  projectId: "netflix-web-c0ac9",
  storageBucket: "netflix-web-c0ac9.firebasestorage.app",
  messagingSenderId: "640439530340",
  appId: "1:640439530340:web:d5cd1a943653a6a5358071",
  measurementId: "G-DEZ38K1CZG"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();