// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCWdykRQ86nRoOrXnN2BUWyat6IMT5ZEdc",
  authDomain: "water-pot-auth.firebaseapp.com",
  projectId: "water-pot-auth",
  storageBucket: "water-pot-auth.appspot.com",
  messagingSenderId: "1076551805226",
  appId: "1:1076551805226:web:fa9c7e1b46bf7afd025653"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;