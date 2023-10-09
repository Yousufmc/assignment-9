// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDolkvoG0oa9bPEMnz7uCQ5aXpBg-cRbLA",
  authDomain: "assignment-9-555a2.firebaseapp.com",
  projectId: "assignment-9-555a2",
  storageBucket: "assignment-9-555a2.appspot.com",
  messagingSenderId: "432866116595",
  appId: "1:432866116595:web:33c9c237d0710398bb8886"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;