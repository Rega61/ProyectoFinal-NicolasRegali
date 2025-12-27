import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA84X1G9gkhIHlqvDARPpZDy5_zwSqgIrk",
  authDomain: "nr-store-7aba3.firebaseapp.com",
  projectId: "nr-store-7aba3",
  storageBucket: "nr-store-7aba3.firebasestorage.app",
  messagingSenderId: "809195615558",
  appId: "1:809195615558:web:16411fc9251bfc581ca147"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
