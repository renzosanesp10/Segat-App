// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCaELBpjkiPmBj_B8LlsLg0ikhjweHIido",
  authDomain: "medioambiente-ba528.firebaseapp.com",
  projectId: "medioambiente-ba528",
  storageBucket: "medioambiente-ba528.appspot.com",
  messagingSenderId: "557889603316",
  appId: "1:557889603316:web:04c1b24de65f2f448680a1"
};

/* const firebaseConfig = {
  apiKey: 'AIzaSyAMrd8rRwfK8d9XwRXfMA5WVnQpADNqWiE',
  authDomain: 'prueba-4e054.firebaseapp.com',
  projectId: 'prueba-4e054',
  storageBucket: 'prueba-4e054.appspot.com',
  messagingSenderId: '260105210877',
  appId: '1:260105210877:web:e325f1a0bddcd5dfce2794'
} */

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const storage = getStorage(app)
