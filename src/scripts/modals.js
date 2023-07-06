export function handleModal(){
    const button = document.querySelector(".button__create-post");
    const modalContainer = document.querySelector(".modal__controller-post");

    button.addEventListener('click', function () {
        modalContainer.showModal();
    
    closeModal() 
        
    })

}

 function closeModal() {
    const button = document.querySelector(".button__close");
    const modalControler = document.querySelector('.modal__controller-post');

    button.addEventListener('click', function() {
        modalControler.close();
        
    })
}

export function handleModalEdit() {
    const editButtons = document.querySelectorAll(".button__edit");
    const modalContainerEdit = document.querySelector('.modal__controller-edit')


    editButtons.forEach(button => {
        button.addEventListener('click', () => {
            modalContainerEdit.showModal()

        closeModalEdit()
        })

    })


}

function closeModalEdit() {
    const button = document.querySelector(".button__close-edit");
    const modalContainerEdit = document.querySelector('.modal__controller-edit')

    button.addEventListener('click', () => {
        modalContainerEdit.close();
        
    })
}

export function handleModalDelete() {
    const deleteButtons = document.querySelectorAll(".button__delete");
    const modalContainerDelete = document.querySelector('.modal__controller-delete')


    deleteButtons.forEach(button => {
        button.addEventListener('click', () => {
            modalContainerDelete.showModal()

        closeModalDelete()
        })

    })


}

function closeModalDelete() {
    const button = document.querySelector(".button__close-delete");
    const modalContainerEdit = document.querySelector('.modal__controller-delete')

    button.addEventListener('click', () => {
        modalContainerEdit.close();
        
    })
}

export function handleModalAcess(){
    const accessButtons = document.querySelectorAll(".button__access");
    const modalContainerAccess = document.querySelector('.modal__controller-access')


    accessButtons.forEach(button => {
        button.addEventListener('click', () => {
            modalContainerAccess.showModal()

        closeModalAccess()
        })

    })


}

 function closeModalAccess() {
    const button = document.querySelector(".button__close-access");
    const modalControler = document.querySelector('.modal__controller-access');

    button.addEventListener('click', function() {
        modalControler.close();
        
    })
}

