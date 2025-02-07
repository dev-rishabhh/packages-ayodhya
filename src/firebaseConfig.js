
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "namasteayodhya-62749.firebaseapp.com",
    projectId: "namasteayodhya-62749",
    storageBucket: "namasteayodhya-62749.firebasestorage.app",
    messagingSenderId: "552672421326",
    appId: "1:552672421326:web:7a03529a983da38ad9f79f",
    measurementId: "G-VDN28P7J5Q"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
