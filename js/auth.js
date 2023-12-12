// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Sign Up Function
function signUp() {
    var email = document.getElementById('signup-email').value;
    var password = document.getElementById('signup-password').value;

    firebase.auth().createUserWithEmailAndPassword(email, password)
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

    firebase.auth().signInWithEmailAndPassword(email, password)
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
