import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB1YR1lvyLrF8aKT2zoUMl2Ob7NQJbY7pg",
  authDomain: "independent-service--tamim542.firebaseapp.com",
  projectId: "independent-service--tamim542",
  storageBucket: "independent-service--tamim542.appspot.com",
  messagingSenderId: "878866401056",
  appId: "1:878866401056:web:5e0f829fcfcb241950f945"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;