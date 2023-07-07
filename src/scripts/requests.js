
import { toast } from "./toast.js" 

const baseUrl = 'http://localhost:3333'
const green = 'hsl(162, 88%, 26%)'
export const red = 'hsl(349, 57%, 50%)'

export async function loginRequest(loginBody) {
    
    const token = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(loginBody)
    })
    .then(async (res) => {
        console.log(res)
        const resJson = await res.json()
        

        if(res.ok) {
            
            localStorage.setItem('@petInfo:token', resJson.token)
            

            toast("Login realizado com sucesso, redirecionando para dashboard", green)

            setTimeout(() => {
                location.replace("./src/pages/dashboard.html")
            }, 2000);


        }else {
            throw new Error(resJson.message)
        }
    })
    .catch(err => toast(err.message, red))

    return token
}

export const user = async () => {

const token = localStorage.getItem('@petInfo:token')
const user = await fetch(`${baseUrl}/users/profile`, {
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'Authorization' : `Bearer ${token}`
    },
    })
    .then( async (response) => {
        
        if(response.ok) {
           
            const responseUser = await response.json();
            
            return responseUser
            
            
 
        }else {
         throw new Error(resJson.message)
            
        }
    }) 
    .catch(err => (err.message))
    
    return user
}

export async function createUser(newUserBody) {
     const newUserCreate = await fetch(`${baseUrl}/users/create`,{

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'

        },
        body: JSON.stringify(newUserBody)
    })
    .then( async (res) => {
        const resJson = await res.json()
        if(res.ok) {
            console.log(res)
            toast("Cadastro efetuado com suceso, relize seu login !", green)

            setTimeout(() => {
                location.replace("../../index.html")
            }, 2000);
        
        }else {
            throw new Error(resJson.message)
        }
    })
    .catch(err => toast(err.message, red))
    console.log(newUserCreate)
    return newUserCreate 
}

export async function createPost (postBody) {
    
    const token = localStorage.getItem('@petInfo:token')
    const newPost = await fetch(`${baseUrl}/posts/create`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`

        },
        body: JSON.stringify(postBody)
    }) 
    .then(async (res) => {
        const resJson = await res.json()

        if(res.ok) {
            toast("Post criado com sucesso", green)

            return resJson
        }else {
            throw new Error(resJson.message)
        }
    })
    .catch(err => toast(err.message, red))

    return newPost
}

export async function readAllPosts() {
    const token = localStorage.getItem('@petInfo:token')
    
    const allPosts = await fetch(`${baseUrl}/posts`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`

        }
    })
    .then(res => {
        
        if(res.ok) {
            return res.json()
        }else {
            throw new Error('problemas no servidor , tente novamente mais tarde')
        }
    })
    .catch(err => toast(err.mensage, red))
    
    return allPosts.reverse()
    
}

export async function updatePost(postId, requestBody) {
    const token = localStorage.getItem('@petInfo:token')
    const post = await fetch(`${baseUrl}/posts/${postId}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
        
    },
    body: JSON.stringify(requestBody)
})
.then(async (res) => {
    const resJson = await res.json()
    
    if(res.ok) {
        toast("Post atualizado com sucesso", green)
        
        return resJson
    }else {
        throw new Error(resJson.message)
    }
})
.catch(err => toast(err.message, red))

return post

}

export async function deletePostById(postId) {
    const token = localStorage.getItem('@petInfo:token')
    const postDelete = await fetch(`${baseUrl}/posts/${postId}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    })
    .then(async (res) => {
        const resJson = await res.json()
        if(res.ok) {
            toast('Post deletado com sucesso', green)
            return resJson
        } else {
            throw new Error(resJson.message)
        }
    })
    .catch(err => toast(err.message, red))
    
    return postDelete
}



 




