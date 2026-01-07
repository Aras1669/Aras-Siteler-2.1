// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAVanlbwHO2CFO_45R9ez7Os6v4h5y64bM",
  authDomain: "login-aras-siteler.firebaseapp.com",
  projectId: "login-aras-siteler",
  storageBucket: "login-aras-siteler.firebasestorage.app",
  messagingSenderId: "236271357844",
  appId: "1:236271357844:web:6ad66b5e19bc49ea3cc981",
  measurementId: "G-ZLEH0TKWLK"
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

