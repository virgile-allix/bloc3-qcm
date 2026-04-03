import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

// IMPORTANT: Dans Firestore > Rules, mettez ces règles pour autoriser l'accès:
// rules_version = '2';
// service cloud.firestore {
//   match /databases/{database}/documents {
//     match /{document=**} {
//       allow read, write: if true;
//     }
//   }
// }

const firebaseConfig = {
  apiKey: "AIzaSyAw77srm0rDQ0JHDaY6en9a4IyEJSisEwI",
  authDomain: "flash-bloc.firebaseapp.com",
  projectId: "flash-bloc",
  storageBucket: "flash-bloc.firebasestorage.app",
  messagingSenderId: "729419498457",
  appId: "1:729419498457:web:a51af42e69e54b2ab70fc8",
  measurementId: "G-WZWESXCDP3"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
