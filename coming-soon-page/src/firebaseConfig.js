import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore"; // Import addDoc for adding data to Firestore

const firebaseConfig = {
  apiKey: "AIzaSyBI-Of31UcE9Q5sgF4x8WlQm_ATEkBrkgI",
  authDomain: "madame-k-artisanat.firebaseapp.com",
  projectId: "madame-k-artisanat",
  storageBucket: "madame-k-artisanat.appspot.com",
  messagingSenderId: "433391961800",
  appId: "1:433391961800:web:d3f6a7cece863c3a2207fd",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };
