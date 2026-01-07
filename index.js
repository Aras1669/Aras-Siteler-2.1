// Firebase SDK
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";

// 🔴 BURAYI KENDİ FIREBASE CONFIG'İNLE DEĞİŞTİR
const firebaseConfig = {
  apiKey: "API_KEY",
  authDomain: "PROJECT_ID.firebaseapp.com",
  projectId: "PROJECT_ID",
  appId: "APP_ID"
};

// Firebase başlat
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Kayıt Ol
window.register = () => {
  const email = document.getElementById("rEmail").value;
  const pass  = document.getElementById("rPass").value;

  createUserWithEmailAndPassword(auth, email, pass)
    .then(() => {
      alert("Kayıt başarılı");
    })
    .catch(err => {
      alert(err.message);
    });
};

// Giriş Yap
window.login = () => {
  const email = document.getElementById("lEmail").value;
  const pass  = document.getElementById("lPass").value;

  signInWithEmailAndPassword(auth, email, pass)
    .then(() => {
      alert("Giriş başarılı");
    })
    .catch(err => {
      alert(err.message);
    });
};

// Çıkış Yap (opsiyonel)
window.logout = () => {
  signOut(auth).then(() => {
    alert("Çıkış yapıldı");
  });
};

// Oturum durumu (opsiyonel)
onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log("Oturum açık:", user.email);
  } else {
    console.log("Oturum kapalı");
  }
});
