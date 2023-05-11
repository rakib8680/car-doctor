// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLIRA4e8hX_wWo1_kRklZoSRssbrTzkKM",
  authDomain: "cars-doctor-bcc27.firebaseapp.com",
  projectId: "cars-doctor-bcc27",
  storageBucket: "cars-doctor-bcc27.appspot.com",
  messagingSenderId: "313511025367",
  appId: "1:313511025367:web:2144a16844e94374abee92"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;