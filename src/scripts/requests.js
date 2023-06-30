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


