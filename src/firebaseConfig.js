
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE,
    messagingSenderId:import.meta.env.VITE_FIREBASE_MESSAGE,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId:import.meta.env.VITE_FIREBASE_MEASURMENT,
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
