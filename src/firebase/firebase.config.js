// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyApiwvoR3pGdv1kfY9ZtYYN8SvsQDmvA9A",
  authDomain: "food-news-ed2c5.firebaseapp.com",
  projectId: "food-news-ed2c5",
  storageBucket: "food-news-ed2c5.appspot.com",
  messagingSenderId: "487699173050",
  appId: "1:487699173050:web:28c20fa27bddab21027c83",
  measurementId: "G-R6BBRNSDHT"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
