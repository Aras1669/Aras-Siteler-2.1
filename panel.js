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
      .collection("main")
      .doc("main")
      .get();

    alert("Firestore cevap verdi ✅");

    if (doc.exists) {

      document.getElementById("text").innerText =
        doc.data().GizliYazi;

    } else {

      document.getElementById("text").innerText =
        "Veri yok";

    }

  } catch (e) {

    alert("Hata: " + e.message);

  }

});