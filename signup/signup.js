import { auth,createUserWithEmailAndPassword,onAuthStateChanged  } from '../firebase.js'

let formFields = document.querySelectorAll('form input');
let [userEmail, userPassword] = formFields;
let signupBtn = document.getElementById('signup-btn');
let emailReg = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
let errorMsg = document.getElementById('error')

const signup = () => {
    createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
        .then((userCredential) => {
            const user = userCredential.user;
            Toastify({
                text: "SignUp Successfully",                
                duration: 3000               
                }).showToast();
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            Toastify({
                text: errorMessage,                
                duration: 3000               
                }).showToast();
        });
}

function checkReg(event){
    event.preventDefault()
    if((emailReg.test(userEmail.value)) && (passwordReg.test(userPassword.value))){
        signup();
    }
    else{
        errorMsg.innerHTML = 'Email and Password must follow the standard.'
        errorMsg.style.color = 'red';
    }
}

signupBtn.addEventListener('click', checkReg);

onAuthStateChanged(auth, (user) => {
    if (user) {
      window.location.href = '../dashboard/dashboard.html'
    } 
  });