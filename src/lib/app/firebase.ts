import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

export const firebaseApp = initializeApp({
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
});

export const firebaseAuth = getAuth(firebaseApp);

export const googleProvider = new GoogleAuthProvider();
