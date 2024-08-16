import { auth, signInWithEmailAndPassword, onAuthStateChanged } from '../firebase.js'

let formFields = document.querySelectorAll('form input');
let [userEmail, userPassword] = formFields;
let loginBtn = document.getElementById('login-btn');

const login = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, userEmail.value, userPassword.value)
        .then((userCredential) => { 
            const user = userCredential.user;
            Toastify({
                text: "Login Successfully",                
                duration: 3000               
                }).showToast();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Toastify({
                text: "Invalid Credentials",                
                duration: 3000               
                }).showToast();
        });
}

loginBtn.addEventListener('click',login)

onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.href = '../dashboard/dashboard.html'
    } 
  });
