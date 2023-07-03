import { handleModal, handleModalExit } from "./modals.js";
import { user } from "./requests.js";


handleModal()
let requestUser = await user()
const avatar = document.querySelector('.avatar__user')
avatar.src= requestUser.avatar 

handleModalExit()

function exitLogin() {
    const buttons = document.querySelectorAll(".button_exit-login"); 

    buttons.forEach(button => {

        button.addEventListener('click', function() {
             
             localStorage.removeItem("@petInfo:token")
             location.replace("../../index.html")   
             
         })
    } )
}
exitLogin()

function openNavBar() {
    const navBar = document.querySelector(".division-login-name")
    const avatar = document.querySelector(".avatar__user")

    avatar.addEventListener("click", () => {
        navBar.classList.toggle("hidden")
    })
}
openNavBar()



