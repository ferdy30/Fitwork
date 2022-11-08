import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.10.0/firebase-auth.js"

import { auth } from "../app/firebase.js";
import { loginCheck } from "../app/loginCheck.js";

import '../app/signupForm.js'
import '../app/singinForm.js'
import '../app/googleLogin.js'
import '../app/logout.js'

// list for auth state changes
onAuthStateChanged(auth, async (user) => {
  //if (user) {
    loginCheck(user);
   /*  try {
      const querySnapshot = await getDocs(collection(db, "posts"));
      setupPosts(querySnapshot.docs);
    } catch (error) {
      console.log(error)
    }
  } else {
    setupPosts([]);
    loginCheck(user);
  } */
});