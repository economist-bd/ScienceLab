// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { 
    getFirestore, collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc, query, orderBy, serverTimestamp, where, limit 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js";
import { 
    getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut 
} from "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-04krFOELl1pcUxgFm1lXWWlyYe_O_5M",
  authDomain: "sciencelab-7bfdc.firebaseapp.com",
  projectId: "sciencelab-7bfdc",
  storageBucket: "sciencelab-7bfdc.firebasestorage.app",
  messagingSenderId: "862405570778",
  appId: "1:862405570778:web:b83947bb94d75f5f8c35e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

// Export services so other files can use them
export { 
    app, db, auth, 
    collection, addDoc, getDocs, doc, getDoc, updateDoc, deleteDoc, 
    query, orderBy, serverTimestamp, where, limit, // <--- এখানে 'limit' যুক্ত করা হয়েছে
    signInWithEmailAndPassword, onAuthStateChanged, signOut 
};
