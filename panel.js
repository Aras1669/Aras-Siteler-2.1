import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";

import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

import {
  getFirestore,
  doc,
  getDoc
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";



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
const db = getFirestore(app);

const textDiv = document.getElementById("text");


// Giriş kontrolü
onAuthStateChanged(auth, async (user) => {

  if (!user) {
    window.location.href = "index.html";
    return;
  }

  // Yazı
  const ref = doc(db, "secretText", "main");
  const snap = await getDoc(ref);

  if (snap.exists()) {
    textDiv.innerText = snap.data().content;
  } else {
    textDiv.innerText = "İçerik bulunamadı.";
  }

});


// Çıkış
window.logout = () => {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
};