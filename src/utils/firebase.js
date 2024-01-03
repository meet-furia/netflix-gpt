// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEVp-uWJx6-FRtG8julg8n2W3iueIeG-w",
  authDomain: "netflix-gpt-88513.firebaseapp.com",
  projectId: "netflix-gpt-88513",
  storageBucket: "netflix-gpt-88513.appspot.com",
  messagingSenderId: "967739915100",
  appId: "1:967739915100:web:9802925bf3f576e35b9f99",
  measurementId: "G-CWNFER5TXS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();