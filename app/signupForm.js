import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"

const singupForm = document.querySelector('#singup-form')
import { auth } from './firebase.js' 
import { showMessage } from './showMessage.js'
import '../app/googleLogin.js'

singupForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const email = singupForm['signup-email'].value;
    const password = singupForm['signup-password'].value;

    console.log(email, password)

    try {
        const userCredentials = await createUserWithEmailAndPassword(auth, email, password)
        console.log(userCredentials)

        //hace falta que al registrarse mande hacia la pagina login
        window.location.href="../login.html"

        //mensaje de que los datos se enviaron correctamente
        //no funcional de momento
        // showMessage("Usuario registrado exitosamente") 


    } catch (error) {
        
        if(error.code === 'auth/email-already-in-use'){
            showMessage('Este usuario ya existe', 'error')
        }
        else if(error.code === 'auth/invalid-email'){
            showMessage('Correo electronico invalido', 'error')
        }
        else if(error.code === 'auth/weak-password'){
            showMessage('Contraseña incorrecta', 'error')
        }
        else if(error.code){
            showMessage('Algo salio mal, vuelve a intentarlo', 'error')
        }

    }

})




/* import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";
import { showMessage } from "./showMessage.js";

const signUpForm = document.querySelector("#signup-form");

signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const email = signUpForm["signup-email"].value;
  const password = signUpForm["signup-password"].value;

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password)
    console.log(userCredential)

    // Close the signup modal
    const signupModal = document.querySelector('#signupModal');
    const modal = bootstrap.Modal.getInstance(signupModal);
    modal.hide();

    // reset the form
    signUpForm.reset();

    // show welcome message
    showMessage("Welcome" + userCredentials.user.email);

  } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      showMessage("Email already in use", "error")
    } else if (error.code === 'auth/invalid-email') {
      showMessage("Invalid email", "error")
    } else if (error.code === 'auth/weak-password') {
      showMessage("Weak password", "error")
    } else if (error.code) {
      showMessage("Something went wrong", "error")
    }
  }

}); */