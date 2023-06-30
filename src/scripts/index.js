/* Desenvolva seu código aqui */
import { loginRequest, red } from "./requests.js"
import { toast } from "./toast.js"

function handleLogin() {
    const inputs = document.querySelectorAll('.input__login')
    const button = document.querySelector('#login')
    let loginBody = {}
    let count = 0

    button.addEventListener('click', (event) => {
        event.preventDefault()
        inputs.forEach(input => {
            if(input.value.trim() === "") {
            count++
            }

           loginBody[input.name] = input.value.trim()
        })

        if(count != 0 ) {
            count = 0
            return toast('Por favor preencha todos os campos de login', red)
        }else {
             loginRequest(loginBody) 
          console.log(loginBody);
        }
    })
}

handleLogin() 

function goToRegister() {
    const button = document.querySelector('.button__create--user')
    button.addEventListener('click', (event) => {
        event.preventDefault()
        location.replace('./src/pages/signup.html')
    })
}
goToRegister()

            






