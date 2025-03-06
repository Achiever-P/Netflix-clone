import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBpIbMdk1Ngkfnr9tv3znhZjVhUwb37C-o",
  authDomain: "netflix-clone-26756.firebaseapp.com",
  projectId: "netflix-clone-26756",
  storageBucket: "netflix-clone-26756.firebasestorage.app",
  messagingSenderId: "565719630149",
  appId: "1:565719630149:web:c50d3d2041ada0693cfe2c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db =getFirestore(app);
