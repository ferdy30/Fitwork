import { onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.13.0/firebase-auth.js"

import { auth } from '../app/firebase.js'

import '../app/signupForm.js'
import '../app/singinForm.js'

onAuthStateChanged(auth, async (user) => {
    
})
