import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY_FIREBASE_CONFIG,
  authDomain: "volver-al-juguete.firebaseapp.com",
  projectId: "volver-al-juguete",
  storageBucket: "volver-al-juguete.appspot.com",
  messagingSenderId: "615195091463",
  appId: "1:615195091463:web:62815b16f83b82107180a2"
};

// "AIzaSyCNXSDFM3C3PFQdBPn8Ccvr_klxreY1GBY",
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);