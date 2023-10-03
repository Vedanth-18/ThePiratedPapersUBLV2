// Firebase Configuration (from firebase-config.js)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC98XeYsGmBptdfVl5izUJVZdyDKd3dzSw",
  authDomain: "inksters--guild.firebaseapp.com",
  databaseURL: "https://inksters--guild-default-rtdb.firebaseio.com",
  projectId: "inksters--guild",
  storageBucket: "inksters--guild.appspot.com",
  messagingSenderId: "249631153570",
  appId: "1:249631153570:web:7f177b61bb58b344f226fb",
  measurementId: "G-EJZP9QZ1ZY"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Sign-up Logic
const signupForm = document.getElementById("signup-form");

signupForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    // Create user in Firebase Authentication
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;

            // Store user data in Firebase Realtime Database or Firestore
            // Replace 'users' with your own database reference
            firebase.database().ref('users/' + user.uid).set({
                name: name,
                email: email,
                password: password,
            });

            // Redirect or show a success message
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.error(errorMessage);
        });
});
