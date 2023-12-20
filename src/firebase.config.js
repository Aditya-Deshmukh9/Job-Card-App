
import { getFirestore } from "firebase/firestore";
import { initializeApp } from "firebase/app";


const firebaseConfig = {
    apiKey: "AIzaSyApUGNrrY54a2tNLbG1GloW52-Lug9uVSY",
    authDomain: "job-gallery-b63b0.firebaseapp.com",
    projectId: "job-gallery-b63b0",
    storageBucket: "job-gallery-b63b0.appspot.com",
    messagingSenderId: "55711476504",
    appId: "1:55711476504:web:7ec7bcd9d44f63fc450c6d"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db};