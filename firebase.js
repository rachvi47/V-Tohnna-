// Firebase Setup
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/12.10.0/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyDOmNu5GsxWLWGw6FACF40vEZ7-rkCQGZc",
  authDomain: "v-tohnna-d8fd0.firebaseapp.com",
  projectId: "v-tohnna-d8fd0",
  storageBucket: "v-tohnna-d8fd0.firebasestorage.app",
  messagingSenderId: "929268606043",
  appId: "1:929268606043:web:1b806754745934eaa30b7e",
  measurementId: "G-DB4SW4K8M2"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

