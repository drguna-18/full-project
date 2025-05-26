// firebase.js
const { initializeApp } = require("firebase/app");
const { getFirestore } = require("firebase/firestore");
const { getAuth } = require("firebase/auth");
const { getStorage } = require("firebase/storage"); // ✅ Add this

const firebaseConfig = {
  apiKey: "AIzaSyBvxRdWrcSMqRJhEEC7TmRvYGDkWdwkkiw",
  authDomain: "entrepreneur-hub-f42c8.firebaseapp.com",
  projectId: "entrepreneur-hub-f42c8",
  storageBucket: "entrepreneur-hub-f42c8.appspot.com", // ✅ CORRECT THIS (remove ".storage")
  messagingSenderId: "343318739455",
  appId: "1:343318739455:web:10ad03f7d98acf10aecfca",
  measurementId: "G-HR6Q6SJBV3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app); // ✅ Add this

module.exports = { db, auth, storage }; // ✅ Export storage
