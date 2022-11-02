// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHTUJfx_sW_hyBi0z7ideK6nE1pnv5WhQ",
  authDomain: "e-shop-4fda5.firebaseapp.com",
  projectId: "e-shop-4fda5",
  storageBucket: "e-shop-4fda5.appspot.com",
  messagingSenderId: "167363592542",
  appId: "1:167363592542:web:31816d1509cabf7e8b0fcf",
  measurementId: "G-LXPGEHZJM9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
