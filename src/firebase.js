// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCfvM6t3M3vCO36HpA9h5BQyHw87RbUXgw",
  authDomain: "todo-app-bdd98.firebaseapp.com",
  projectId: "todo-app-bdd98",
  storageBucket: "todo-app-bdd98.appspot.com",
  messagingSenderId: "303372770580",
  appId: "1:303372770580:web:c66bfac1b197d2554d7601"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)