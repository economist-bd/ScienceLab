// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, query, orderBy, serverTimestamp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDmhCAUKAu6wptvSazTIzXzqB1hsaPEcNk",
  authDomain: "neera-d1df0.firebaseapp.com",
  projectId: "neera-d1df0",
  storageBucket: "neera-d1df0.firebasestorage.app",
  messagingSenderId: "745022493052",
  appId: "1:745022493052:web:4f57819eeca48090bc14f9"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth, collection, addDoc, getDocs, doc, getDoc, query, orderBy, signInWithEmailAndPassword, onAuthStateChanged, signOut, serverTimestamp };
