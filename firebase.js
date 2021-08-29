import firebase from 'firebase/app';
import { initializeApp } from 'firebase/app';
// import 'firebase/storage';
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD40nQ__Qa5MV2GJwfKqlnf-4GWbF7Qurw",
  authDomain: "facebook-clone-d698d.firebaseapp.com",
  projectId: "facebook-clone-d698d",
  storageBucket: "facebook-clone-d698d.appspot.com",
  messagingSenderId: "790824414427",
  appId: "1:790824414427:web:14e24fe98b38e17a2d30fe"
};

// const app = !firebase.apps.length ? initializeApp(firebaseConfig) : firebase.app();

const app = initializeApp(firebaseConfig);


/* const db = app.firestore();

const storage = firebase.storage();

export { db, storage }; */


const db = getFirestore();
const storage = getStorage(app);

export { db, storage };


/* // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD40nQ__Qa5MV2GJwfKqlnf-4GWbF7Qurw",
  authDomain: "facebook-clone-d698d.firebaseapp.com",
  projectId: "facebook-clone-d698d",
  storageBucket: "facebook-clone-d698d.appspot.com",
  messagingSenderId: "790824414427",
  appId: "1:790824414427:web:14e24fe98b38e17a2d30fe"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig); */