// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBjmdxYovFY0od0c-vCZwsNBikTRzwQKoc",
  authDomain: "dragon-news-c5a64.firebaseapp.com",
  projectId: "dragon-news-c5a64",
  storageBucket: "dragon-news-c5a64.firebasestorage.app",
  messagingSenderId: "213111065480",
  appId: "1:213111065480:web:f2710b74523795d156883d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);