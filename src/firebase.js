import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyBZp1sjt--KhZ1B0iOaN-kRzfEV0HZTQwM",
  authDomain: "instagram-clone-413fb.firebaseapp.com",
  projectId: "instagram-clone-413fb",
  storageBucket: "instagram-clone-413fb.appspot.com",
  messagingSenderId: "51478448474",
  appId: "1:51478448474:web:4b18b310ebf09e82e84b63",
  measurementId: "G-HW4VRCPBVP",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
