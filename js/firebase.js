import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {
  getFirestore,
  collection,
  addDoc,
  getDocs
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDyxvyFaI4Kxv80hWsQi0Osp9_9XemL5xo",
  authDomain: "wedding-invitation-6ef10.firebaseapp.com",
  projectId: "wedding-invitation-6ef10",
  storageBucket: "wedding-invitation-6ef10.appspot.com",
  messagingSenderId: "978642888428",
  appId: "1:978642888428:web:cd050f4d607320dbf527c9",
  measurementId: "G-9CVLY9FLZJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

window.db = db;
window.collection = collection;
window.addDoc = addDoc;
window.getDocs = getDocs;