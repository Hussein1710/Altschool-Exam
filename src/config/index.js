// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATro_DExhnC83IscTOsVTRnuGSfW1SSiE",
  authDomain: "altschool-exam-1d0ff.firebaseapp.com",
  projectId: "altschool-exam-1d0ff",
  storageBucket: "altschool-exam-1d0ff.appspot.com",
  messagingSenderId: "964843862568",
  appId: "1:964843862568:web:607abf5490609a76f1d31d",
  measurementId: "G-N3W7T16263"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// setup auth provider
const provider = new GoogleAuthProvider();

const auth = getAuth();
export {app, provider, auth, signInWithRedirect};