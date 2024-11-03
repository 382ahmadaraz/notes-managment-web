// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB0xrUhbkwg3h2ajegMi6NHDbMu1oyqAEs",
  authDomain: "hackathone-6e640.firebaseapp.com",
  projectId: "hackathone-6e640",
  storageBucket: "hackathone-6e640.firebasestorage.app",
  messagingSenderId: "551957269130",
  appId: "1:551957269130:web:499ee74c4aeaf08876fb73",
  measurementId: "G-JQEQM4JCCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const auth = getAuth(app);

export {auth}