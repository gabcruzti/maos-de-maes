// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from 'firebase/database'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA0R3eGiloBAgmpCUOkjhEzxEzoa5rpWU",
  authDomain: "maos-de-maes-9f2ac.firebaseapp.com",
  projectId: "maos-de-maes-9f2ac",
  storageBucket: "maos-de-maes-9f2ac.appspot.com",
  messagingSenderId: "650906658281",
  appId: "1:650906658281:web:e5ee1515f4b6dc3e7a1778",
  databaseURL: "https://maos-de-maes-9f2ac-default-rtdb.firebaseio.com/"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const database = getDatabase()

export { database }