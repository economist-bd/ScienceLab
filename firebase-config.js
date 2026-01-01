// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getFirestore, collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc, query, orderBy, serverTimestamp, where 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { 
    getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC-04krFOELl1pcUxgFm1lXWWlyYe_O_5M",
  authDomain: "sciencelab-7bfdc.firebaseapp.com",
  projectId: "sciencelab-7bfdc",
  storageBucket: "sciencelab-7bfdc.firebasestorage.app",
  messagingSenderId: "862405570778",
  appId: "1:862405570778:web:b83947bb94d75f5f8c35e3"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { 
    app, db, auth, 
    collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc, 
    query, orderBy, serverTimestamp, where, // 'where' added here
    signInWithEmailAndPassword, onAuthStateChanged, signOut 
};
