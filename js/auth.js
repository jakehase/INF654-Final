import { initializeApp } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// Sign Up Function
function signUp() {
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;

    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Sign-up successful.
        })
        .catch((error) => {
            document.getElementById('signup-error').textContent = error.message;
        });
}

// Sign In Function
function signIn() {
    var email = document.getElementById('signin-email').value;
    var password = document.getElementById('signin-password').value;

    signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Sign-in successful.
        })
        .catch((error) => {
            document.getElementById('signin-error').textContent = error.message;
        });
}

// Event Listeners for Form Submission
document.getElementById('sign-up-form').addEventListener('submit', function (e) {
    e.preventDefault();
    signUp();
});

document.getElementById('sign-in-form').addEventListener('submit', function (e) {
    e.preventDefault();
    signIn();
});
