
import { loginRequest, red, createUser, user, readAllPosts, updatePost} from "./requests.js"
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


export function readPost() { 
    const closeAccess = document.querySelector('.button__close-access')
    const buttons = document.querySelectorAll('.button__access')
    buttons.forEach(button => {
        button.addEventListener('click', async () => {
            const avatar = document.querySelector('.avatar__access')
            const nameUser = document.querySelector('.name__access')
            const titleAccess = document.querySelector('.title__access')
            const contentAccess = document.querySelector('.content__access')
            
            const posts = await readAllPosts()
            const result = posts.find(post => post.id === button.dataset.postId)
            
            avatar.src = result.user.avatar
            nameUser.innerText =  result.user.username
            titleAccess.innerText = result.title
            contentAccess.innerText = result.content
            
        })
    })
    
    closeAccess.addEventListener('click', ()=>{
        location.replace('../pages/dashboard.html')
    })
}

export function renderPosts(posts) {
    
    const postsList = document.querySelector('.posts__list')
    postsList.innerHTML = ""
    const deletebutton = document.querySelector('.button__delete-post')
    
    posts.forEach(element => { 
        
        const cardPost = document.createElement('li');
        
        const divisionOne = document.createElement('div')
        
        const divisionTwo = document.createElement('div')
        const avatar = document.createElement('img');
        const nameUser = document.createElement('p');
        const datePost = document.createElement('p')
        
        const divisionThree = document.createElement('div');
        const buttonEdit = document.createElement('button');
        const buttonDelete = document.createElement('button');
        
        const divisionFour = document.createElement('div')
        const titlePost = document.createElement('h1');
        const postBody = document.createElement('p');
        const buttonAccess = document.createElement('button');
        
        cardPost.classList.add('post__card')
        
        divisionOne.classList.add('division__one')
        
        divisionTwo.classList.add('division__two')
        avatar.classList.add('avatar__image')
        nameUser.classList.add('name__user')
        datePost.classList.add('date__post')
        
        divisionThree.classList.add('division__three')
        buttonEdit.classList.add('button__edit')
        buttonDelete.classList.add('button__delete')
        
        divisionFour.classList.add('division__four')
        titlePost.classList.add('title__post')
        postBody.classList.add('post__body')
        buttonAccess.classList.add('button__access')
        
        
        
        avatar.src = element.user.avatar
        nameUser.innerText = element.user.username
        datePost.innerText = 'DATA EXEMPLO'
        buttonEdit.innerText = 'Editar'
        buttonDelete.innerText = 'Excluir'
        
        titlePost.innerText = element.title
        postBody.innerText = element.content
        buttonAccess.href = element.content
        buttonAccess.innerText = 'Acessar publicação'
        deletebutton.id = element.id 

        const modal = editModal(element)
        buttonEdit.addEventListener('click', ()=>{
            modal.showModal()
        })

        buttonAccess.dataset.postId = element.id

        postsList.appendChild(cardPost)
        
        cardPost.append(divisionOne, divisionFour, modal)
        
        divisionTwo.append(avatar, nameUser, datePost)
        divisionThree.append(buttonEdit, buttonDelete)
        divisionOne.append(divisionTwo, divisionThree)
        divisionFour.append(titlePost, postBody, buttonAccess)
         
        
    })
    console.log(posts)
}

function editModal(post) {
    const modal = document.createElement('dialog')
    modal.classList.add('modal__controller-edit')
    
    
    const modalContainer =  document.createElement('div')
    modalContainer.classList.add('modal__container-edit')
    
    const modalAccessHeader = document.createElement('div')
    modalAccessHeader.classList.add('division__header-modal')
    
    const editTitle = document.createElement('h2')
    editTitle.classList.add('header__access')
    editTitle.innerText = "Edição"
    
    const buttonClose = document.createElement('button')
    buttonClose.classList.add('button__close-edit')
    buttonClose.innerText = "x"
    
    const editForm = document.createElement('form')
    editForm.classList.add('form__edit')
    
    const divisionInputs = document.createElement('div')
    divisionInputs.classList.add('division__inputs-post')
    
    const titlePost = document.createElement('h2')
    titlePost.innerText = "Título do post"
    const contentPost = document.createElement('h2')
    contentPost.innerText = "Conteúdo do post"
     
    const contentInput = document.createElement('input')
    contentInput.name = "content"
    contentInput.value = post.content
    contentInput.id = "content__post-edit"
    contentInput.classList.add('edit__post')
    
    const titleInput = document.createElement('input')
    titleInput.name = "title"
    titleInput.value = post.title
    titleInput.id = "title__post-edit"
    titleInput.classList.add('edit__post')
    
    const divisionButtons = document.createElement('div')
    divisionButtons.classList.add('division__buttons-edit')
    
    const buttonCancel = document.createElement('button')
    buttonCancel.classList.add('button__cancel-edit')
    buttonCancel.innerText = "Cancelar"
    
    
    const buttonPublish = document.createElement('button')
    buttonPublish.innerText = "Salvar"
    buttonPublish.classList.add('button__publish-edit')
    
    const buttonCloseModal = document.querySelector('.button__close-edit')
    buttonCloseModal.addEventListener('click', (event) =>{
        event.preventDefault()
        location.replace('../pages/dashboard.html')
    })


    buttonPublish.addEventListener('click', async ()=>{
        const idPost = post.id
        const inputs = querySelectorAll('create__post')
        const newPostEdit = {title:titleInput.value, content:contentInput.value}
        
        if(titleInput.value == "" ||  contentInput.value == "") {
            
            toast('Por favor prencha os campos necessários', red)
        }else {
            inputs.value = ""
            updatePost(idPost, newPostEdit)

            modal.close()
        }
        
        renderPosts(await readAllPosts());
    })
   
        
        divisionInputs.append(titlePost, titleInput, contentPost, contentInput)
        divisionButtons.append(buttonCancel, buttonPublish)
     editForm.append(divisionInputs, divisionButtons)

     modalAccessHeader.append(editTitle, buttonClose)

     modalContainer.append(modalAccessHeader, editForm)

     modal.appendChild(modalContainer)

     return modal

     
}  

