import { handleModal, handleModalEdit, handleModalDelete, handleModalAcess } from "./modals.js";
import { readPost, renderPosts } from "./render.js";
import { user, createPost, readAllPosts, updatePost, deletePostById, red} from "./requests.js";
import { toast } from "./toast.js";


async function showPosts() {
    const allPosts = await readAllPosts()
    return allPosts.reverse()
}

let requestUser = await user()
const avatar = document.querySelector('.avatar__user')
avatar.src= requestUser.avatar 

handleModal()

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

function handleNewPost() {
    const inputs = document.querySelectorAll(".create__post")
    const button = document.querySelector(".button__publish-post")
    const modalControler = document.querySelector(".modal__controller-post") 
    const newPost = {} 
    let count = 0
    button.addEventListener('click', (event) =>{
        event.preventDefault()
        setTimeout(() => {
            location.replace("../pages/dashboard.html")

        }, 1000)
         inputs.forEach(input => {
          if(input.value.trim() === '') {
              count++
              input.value = ""
          }

          newPost[input.name] = input.value
      })

      if(count != 0 ) {
        count = 0
        toast('Por favor prencha os campos necessários', red)
      }else {
        createPost(newPost)
        modalControler.close()
      }
    })

    
}
handleNewPost()




function deletePost () {
    const deleteButton = document.querySelector('.button__delete-post')
    const cancelDelete = document.querySelector('.button__cancel-delete')
    const closeDelete = document.querySelector('.button__close-delete')
    deleteButton.addEventListener('click', (event) => {
        deletePostById(event.target.id)
        setTimeout(() => {
            location.replace("../pages/dashboard.html")
            
        }, 1000)
    
        showPosts()
    })

    cancelDelete.addEventListener('click', () => {
        location.replace('../pages/dashboard.html')
    })
    closeDelete.addEventListener('click', () => {
        location.replace('../pages/dashboard.html')
    })
}

renderPosts(await readAllPosts())
readPost()
deletePost()
handleModalDelete()
handleModalAcess()
handleModalEdit()
