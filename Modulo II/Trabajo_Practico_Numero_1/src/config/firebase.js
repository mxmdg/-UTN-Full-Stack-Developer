import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCdFc0p3S8Q83oJmo9XvFTyGtk7g5Vo4Ik",
  authDomain: "utn-fsd-mod3.firebaseapp.com",
  projectId: "utn-fsd-mod3",
  storageBucket: "utn-fsd-mod3.appspot.com",
  messagingSenderId: "635411201701",
  appId: "1:635411201701:web:67e0488a8ddf9671f1574c"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase