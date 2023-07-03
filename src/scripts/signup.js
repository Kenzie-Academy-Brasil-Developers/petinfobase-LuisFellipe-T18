import { handleNewUser } from "./render.js";

handleNewUser()

function goToLogin() {
    const button = document.querySelector('.back__to-login')
    button.addEventListener('click', (event) => {
        event.preventDefault()
        location.replace('../../index.html')
    })
}
goToLogin()