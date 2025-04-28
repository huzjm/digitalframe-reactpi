import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDXASgBkKWuRFxLEcsnXIe36dTghGaxDUA",
  authDomain: "sarahhuzefa-2467b.firebaseapp.com",
  projectId: "sarahhuzefa-2467b",
storageBucket: "sarahhuzefa-2467b.firebasestorage.app",
  messagingSenderId: "710862545770",
  appId: "1:710862545770:web:3d14fc4c54a6e49afdbb13"
  
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);