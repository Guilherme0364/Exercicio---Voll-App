import api from "./api"

async function signIn(email: string, senha: string){
    if(!email || !senha) return null

    try{
        const result = await api.post('/auth/login', {
            email, 
            senha
        })
        console.log(result.data)
        return result.data
    } catch(err){
        console.log(err)
        return null
    }
}

export { signIn };