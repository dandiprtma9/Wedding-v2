import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";

import {

getFirestore,

collection,

addDoc,

getDocs

} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {

apiKey: "// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDyxvyFaI4Kxv80hWsQi0Osp9_9XemL5xo",
  authDomain: "wedding-invitation-6ef10.firebaseapp.com",
  projectId: "wedding-invitation-6ef10",
  storageBucket: "wedding-invitation-6ef10.firebasestorage.app",
  messagingSenderId: "978642888428",
  appId: "1:978642888428:web:cd050f4d607320dbf527c9",
  measurementId: "G-9CVLY9FLZJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);",

authDomain: "ISI_AUTH_DOMAIN",

projectId: "ISI_PROJECT_ID",

storageBucket: "ISI_STORAGE_BUCKET",

messagingSenderId: "ISI_MESSAGING_SENDER_ID",

appId: "ISI_APP_ID"

};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

window.db = db;
window.collection = collection;
window.addDoc = addDoc;
window.getDocs = getDocs;