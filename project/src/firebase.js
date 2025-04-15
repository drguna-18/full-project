// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBvxRdWrcSMqRJhEEC7TmRvYGDkWdwkkiw",
    authDomain: "entrepreneur-hub-f42c8.firebaseapp.com",
    projectId: "entrepreneur-hub-f42c8",
    storageBucket: "entrepreneur-hub-f42c8.firebasestorage.app",
    messagingSenderId: "343318739455",
    appId: "1:343318739455:web:10ad03f7d98acf10aecfca",
    measurementId: "G-HR6Q6SJBV3"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
