/* Desenvolva seu código aqui */

import { handleLogin } from "./render.js"
 

function goToRegister() {
    const button = document.querySelector('.button__create--user')
    button.addEventListener('click', (event) => {
        event.preventDefault()
        location.replace('./src/pages/signup.html')
    })
}

goToRegister()
handleLogin() 
   






            






