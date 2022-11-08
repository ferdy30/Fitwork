// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import { getAuth } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDezs1mSlfh-yT4bVKy_vwV00Bs64GNhm8",
  authDomain: "workfit-12be0.firebaseapp.com",
  projectId: "workfit-12be0",
  storageBucket: "workfit-12be0.appspot.com",
  messagingSenderId: "595306881747",
  appId: "1:595306881747:web:18637e9117443541acaa26",
  measurementId: "G-1KL1E7Q9EC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);

export const auth = getAuth(app)
