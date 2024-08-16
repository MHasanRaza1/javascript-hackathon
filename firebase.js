import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
import { getAuth,createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
import { getDatabase,set,ref,get,remove } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-database.js";

const firebaseConfig = {
    apiKey: "AIzaSyDPP2sWqVezKftxmz3JUAgc7kX-uL4f9H8",
    authDomain: "hackathon-8ba6f.firebaseapp.com",
    databaseURL: "https://hackathon-8ba6f-default-rtdb.firebaseio.com",
    projectId: "hackathon-8ba6f",
    storageBucket: "hackathon-8ba6f.appspot.com",
    messagingSenderId: "767951531735",
    appId: "1:767951531735:web:662519034bb48fc31f4a92"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);

export { auth,createUserWithEmailAndPassword,onAuthStateChanged,signOut,signInWithEmailAndPassword }
export { db,set,ref,get,remove }









