// // Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { getAuth, onAuthStateChanged } from "firebase/auth";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxmkG34SXmCfDxT8JeRITUQheYRn38dSQ",
  authDomain: "discover-ph-5359c.firebaseapp.com",
  projectId: "discover-ph-5359c",
  storageBucket: "discover-ph-5359c.appspot.com",
  messagingSenderId: "263546366857",
  appId: "1:263546366857:web:0bc2147788344fd0630f58"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth();
export {auth};