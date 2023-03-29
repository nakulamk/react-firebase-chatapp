import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCjO67OUWjOfmEdZmbXpzSPBnf1MKCmKfQ",
  authDomain: "chat-app-c5f85.firebaseapp.com",
  projectId: "chat-app-c5f85",
  storageBucket: "chat-app-c5f85.appspot.com",
  messagingSenderId: "445303623708",
  appId: "1:445303623708:web:ced7599b781f2cf7a54fd9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
