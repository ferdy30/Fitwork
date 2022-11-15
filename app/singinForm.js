import { signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"

import { auth } from './firebase.js' 
import { showMessage } from './showMessage.js'
import '../app/googleLogin.js'
import '../app/facebookLogin.js'

const signInForm = document.querySelector('#login-form')

signInForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = signInForm['login-email'].value;
    const password = signInForm['login-password'].value;

    try {
        const credentials = await signInWithEmailAndPassword(auth, email, password)
        console.log(credentials)

        window.location.href = "../sesion.html"

    } catch (error) {
        console.log(error.code)
        if (error.code === 'auth/wrong-password') {
            showMessage("Contraseña incorrecta", "error");
        } 
        else if (error.code === 'auth/user-not-found') {
            showMessage("Usuario no encontrado", "error");
        } 
        else {
            showMessage('Algo salio mal, vuelve a intentarlo', 'error');
        }
    }
});
