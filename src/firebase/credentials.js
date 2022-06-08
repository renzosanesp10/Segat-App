// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
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

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { app };