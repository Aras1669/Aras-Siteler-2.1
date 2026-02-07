alert("panel.js başladı ✅");

// Firebase Config
const firebaseConfig = {
  apiKey: "AIzaSyAVanlbwHO2CFO_45R9ez7Os6v4h5y64bM",
  authDomain: "login-aras-siteler.firebaseapp.com",
  projectId: "login-aras-siteler",
};

// Init
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

alert("Firebase yüklendi ✅");

// Auth kontrol
auth.onAuthStateChanged(async (user) => {

  alert("Auth kontrol edildi ✅");

  if (!user) {
    alert("Giriş yok, geri dön");
    window.location.href = "index.html";
    return;
  }

  alert("User var: " + user.email);

  try {

    alert("Firestore okunuyor...");

    const doc = await db
      .collection("BuArasinGizli")
      .doc("BuArasinGizli")
      .get();

    alert("Firestore cevap verdi ✅");

    if (doc.exists) {
      document.getElementById("secretText").innerText =
        doc.data().content;
    } else {
      document.getElementById("secretText").innerText =
        "Veri yok";
    }

  } catch (e) {
    alert("Hata: " + e.message);
  }

});