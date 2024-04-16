// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB2kpGLtj89dcb7ul3QanGk26kFXifxLFM",
  authDomain: "real-estate-project-e543c.firebaseapp.com",
  projectId: "real-estate-project-e543c",
  storageBucket: "real-estate-project-e543c.appspot.com",
  messagingSenderId: "936444219199",
  appId: "1:936444219199:web:cf5009d12f20efe5f34d8a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
export default auth;
