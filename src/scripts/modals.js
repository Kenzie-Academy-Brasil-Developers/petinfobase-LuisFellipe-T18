export function handleModal(){
    const button = document.querySelector(".button__create-post");
    const modalContainer = document.querySelector(".modal__controller");

    button.addEventListener('click', function () {
        modalContainer.showModal();
    
    closeModal() 
        
    })

}

export function closeModal() {
    const button = document.querySelector(".button__close");
    const modalControler = document.querySelector('.modal__controller');

    button.addEventListener('click', function() {
        modalControler.close();
        
    })
}

export function handleModalExit(){
    const imageLogin = document.querySelector(".avatar__user");
    const modalContainer = document.querySelector(".modal__exit-controller");

    imageLogin.addEventListener('click', function () {
        modalContainer.showModal();
    
    closeModalExit() 
        
    })

}

export function closeModalExit() {
    const button = document.querySelector(".image__exit");
    const modalControler = document.querySelector('.modal__exit-controller');

    button.addEventListener('click', function() {
        localStorage.clear()
        location.replace("../../index.html")
        modalControler.close();
        
    })
}
