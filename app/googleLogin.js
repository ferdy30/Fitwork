/* import { GoogleAuthProvider, signInWithPopup } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"
import { auth } from "./firebase.js";


const googleButton = document.querySelector("#googleLogin"); 

googleButton.addEventListener("click", async (e) => {
    e.preventDefault();
  
    const provider = new GoogleAuthProvider();
    try {
      const credentials = await signInWithPopup(auth, provider)
      console.log(credentials);
      console.log("google sign in");
      
    } catch (error) {
      console.log(error);
    }
  });
 */