
import { loginRequest, red, createUser} from "./requests.js"
import { toast } from "./toast.js"



export function handleLogin() {
    const inputs = document.querySelectorAll('.input__login')
    const button = document.querySelector('.access')
    const avatar = document.querySelector('img')

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



export function handleNewUser() {
    const inputs = document.querySelectorAll('.input__register')
    const button = document.querySelector('.register')
    const newUser = {}
    let count = 0
    
    button.addEventListener('click', (event) => {
        event.preventDefault()
        
        inputs.forEach(input => {
            if(input.value.trim() === "") {
                count++
            }
            newUser[input.name] = input.value.trim()
        })
        if(count != 0 ) {
            count = 0
            return toast('Por favor preencha todos os campos de login', red)
        }else {
            createUser(newUser) 
            
        }  
    })   
} 