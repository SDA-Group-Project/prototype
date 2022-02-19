// Import the functions you need from the SDKs you need
import * as firebase from "firebase/compat";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9APmAo_2bfEIU0F0OuWape10li9sY80s",
  authDomain: "auth-e6043.firebaseapp.com",
  projectId: "auth-e6043",
  storageBucket: "auth-e6043.appspot.com",
  messagingSenderId: "801511197146",
  appId: "1:801511197146:web:38a34e18458aa8dcfe58e3",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = firebase.getAuth(app);

export { auth };
