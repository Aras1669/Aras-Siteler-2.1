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


// KENDİ BİLGİLERİNİ KOY
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "XXX.firebaseapp.com",
  projectId: "XXX",
  appId: "XXX"
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

  // Yazıyı çek
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