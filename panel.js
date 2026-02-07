import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/10.7.0/firebase-firestore.js";

alert("panel.js başladı");

const firebaseConfig = {
  apiKey: "AIzaSyAVanlbwHO2CFO_45R9ez7Os6v4h5y64bM",
  authDomain: "login-aras-siteler.firebaseapp.com",
  projectId: "login-aras-siteler",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


onAuthStateChanged(auth, async (user) => {

  alert("Auth kontrolü geçti");

  if (!user) {
    alert("Login yok");
    window.location.href = "index.html";
    return;
  }

  alert("User: " + user.email);

  alert("Firestore okunuyor...");

  const ref = doc(db, "BuArasinGizli", "BuArasinGizli");

  const snap = await getDoc(ref);

  alert("Snap geldi");

  if (snap.exists()) {
    document.getElementById("text").innerText = snap.data().content;
  } else {
    document.getElementById("text").innerText = "Veri yok";
  }

});