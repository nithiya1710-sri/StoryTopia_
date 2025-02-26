// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: "AIzaSyAq9DFcu0wQFlx_A29eMToxfa6_ZIfe8V8",
  authDomain: "login-signup-d0cb0.firebaseapp.com",
  projectId: "login-signup-d0cb0",
  storageBucket: "login-signup-d0cb0.firebasestorage.app",
  messagingSenderId: "438094614420",
  appId: "1:438094614420:web:65db32c93def3c69884981",
  measurementId: "G-DRDW3W1C8F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Handle login form submission
const loginForm = document.getElementById("login-form");
const errorMessage = document.getElementById("error-message");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Successful login
            window.location.href = "dashboard.html"; // Redirect to the dashboard or home page
        })
        .catch((error) => {
            // Handle errors here
            errorMessage.textContent = error.message;
        });
});