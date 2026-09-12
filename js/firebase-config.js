// Importăm modulele Firebase din CDN-ul oficial
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEeeuqO26i63Kc6r3SwZoX0mFPFxDC-b8",
  authDomain: "soundboard-app-78335.firebaseapp.com",
  projectId: "soundboard-app-78335",
  storageBucket: "soundboard-app-78335.firebasestorage.app",
  messagingSenderId: "710504236843",
  appId: "1:710504236843:web:d225562cef9d9a5f09e76e",
  measurementId: "G-0L93WXX3L0"
};

// Initializare Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);