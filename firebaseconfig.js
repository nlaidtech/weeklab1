// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC-51TkT-XH1F-r-cEwb4CkhT8qFCdVmho',
  authDomain: 'week1lab1-b35d2.firebaseapp.com',
  projectId: 'week1lab1-b35d2',
  storageBucket: 'week1lab1-b35d2.firebasestorage.app',
  messagingSenderId: '377588299642',
  appId: '1:377588299642:web:e07321a4b66468d01dc8c3',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
