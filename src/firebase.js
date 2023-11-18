
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXyJAggdftc1y1gcUu-SWlgwe-TaThP_A",
  authDomain: "instagram-clone-6fa4d.firebaseapp.com",
  projectId: "instagram-clone-6fa4d",
  storageBucket: "instagram-clone-6fa4d.appspot.com",
  messagingSenderId: "717508443850",
  appId: "1:717508443850:web:f9eee947387c9d1f82fe33",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
