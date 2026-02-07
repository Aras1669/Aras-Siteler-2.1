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


// DOM hazır olunca çalış
document.addEventListener("DOMContentLoaded", () => {

  // Firebase Config
  const firebaseConfig = {
    apiKey: "AIzaSyAVanlbwHO2CFO_45R9ez7Os6v4h5y64bM",
    authDomain: "login-aras-siteler.firebaseapp.com",
    projectId: "login-aras-siteler",
    storageBucket: "login-aras-siteler.firebasestorage.app",
    messagingSenderId: "236271357844",
    appId: "1:236271357844:web:6ad66b5e19bc49ea3cc981",
    measurementId: "G-ZLEH0TKWLK"
  };

  // Init
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);


  // AUTH
  onAuthStateChanged(auth, async (user) => {

    if (!user) {
      window.location.href = "index.html";
      return;
    }

    try {

      const ref = doc(db, "main", "main");
      const snap = await getDoc(ref);
      alert("Gelen veri: " + JSON.stringify(snap.data()));
      
      if (snap.exists()) {

        const data = snap.data();

        const el = document.getElementById("text");

        if (!el) {
          alert("text ID bulunamadı!");
          return;
        }

        el.innerText = snap.data().GizliYazi;

      } else {

        document.getElementById("text").innerText =
          "Doküman yok";

      }

    } catch (err) {

      alert("Hata: " + err.message);

    }

  });


  // LOGOUT
  window.logout = function () {

    signOut(auth).then(() => {
      window.location.href = "index.html";
    });

  };

});