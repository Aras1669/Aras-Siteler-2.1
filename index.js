import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";



const firebaseConfig = {
  apiKey: "AIzaSyAVanlbwHO2CFO_45R9ez7Os6v4h5y64bM",
  authDomain: "login-aras-siteler.firebaseapp.com",
  projectId: "login-aras-siteler",
  storageBucket: "login-aras-siteler.firebasestorage.app",
  messagingSenderId: "236271357844",
  appId: "1:236271357844:web:6ad66b5e19bc49ea3cc981",
  measurementId: "G-ZLEH0TKWLK"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);



onAuthStateChanged(auth, (user) => {
  if (user) {
    window.location.href = "panel.html";
  }
});


// Giriş
document.getElementById("loginBtn").addEventListener("click", () => {

  const email = document.getElementById("lEmail").value;
  const pass = document.getElementById("lPass").value;

  signInWithEmailAndPassword(auth, email, pass)
    .then(() => {
      window.location.href = "panel.html";
    })
    .catch(err => {
      alert(err.message);
    });

});


// Kayıt
document.getElementById("registerBtn").addEventListener("click", () => {

  const email = document.getElementById("rEmail").value;
  const pass = document.getElementById("rPass").value;

  createUserWithEmailAndPassword(auth, email, pass)
    .then(() => {
      alert("Kayıt başarılı!");
    })
    .catch(err => {
      alert(err.message);
    });

});