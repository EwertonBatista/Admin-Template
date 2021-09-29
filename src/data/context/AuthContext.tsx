import router from 'next/router'
import { createContext, useContext, useEffect, useState } from 'react'
import firebase from '../../firebase/config'
import Usuario from '../../model/Usuario'

// Lib js-cookies
import Cookies from 'js-cookie'


// Interface que respeita o contexto
interface AuthContextProps {
    usuario?: Usuario
    loginGoogle?: () => Promise<void>
    login?: (email: string, senha: string) => Promise<void>
    cadastrar?: (email: string, senha: string) => Promise<void>
    logout?: () => Promise<void>
    carregando?: boolean
}

// Contexto da autenticação
const AuthContext = createContext<AuthContextProps>({})


// Função que cria um usuário logado
async function usuarioNormalizado(usuarioFirebase: firebase.User): Promise<Usuario> {
    const token = await usuarioFirebase.getIdToken()
    return {
        uid: usuarioFirebase.uid,
        nome: usuarioFirebase.displayName,
        email: usuarioFirebase.email,
        token,
        provedor: usuarioFirebase.providerData[0].providerId,
        imagemUrl: usuarioFirebase.photoURL
    }
}

// Gerenciar Cookie
function gerenciarCookie(logado: boolean){
    if(logado){
        Cookies.set('admin-template-auth', logado, {
            expires: 7
        })
    }else{
        Cookies.remove('admin-template-auth')
    }
}



export function AuthProvider(props: any){

// useState para alterar estado do usuario
    const [usuario, setUsuario] = useState<Usuario>(null)
    const [carregando, setCarregando] = useState(true)

// configurar sessão
    async function configurarSessao(usuarioFirebase){
        if(usuarioFirebase?.email){
            const usuario = await usuarioNormalizado(usuarioFirebase)
            setUsuario(usuario)
            gerenciarCookie(true)
            setCarregando(false)
            return usuario.email
        }else{
            setUsuario(null)
            gerenciarCookie(false)
            setCarregando(false)
            return false
        }
    }

useEffect(()=>{
    if(Cookies.get('admin-template-auth')){
        const cancelar = firebase.auth().onIdTokenChanged(configurarSessao)
        return () => cancelar()
    }else {
        setCarregando(false)
    }
},[])

// Função de cadastro com Email e Senha
async function cadastrar(email, senha) {
    try {
        setCarregando(true)
        const resp = await firebase.auth()
        .createUserWithEmailAndPassword(email, senha)
           
        await configurarSessao(resp.user)
        router.push('/')
    } finally {
        setCarregando(false)
    }
}

// Função de login com Email e Senha
    async function login(email, senha) {
        try {
            setCarregando(true)
            const resp = await firebase.auth()
            .signInWithEmailAndPassword(email, senha)
               
            await configurarSessao(resp.user)
            router.push('/')
        } finally {
            setCarregando(false)
        }
    }

// Função de login com o Google
    async function loginGoogle() {
        try {
            setCarregando(true)
            const resp = await firebase.auth().signInWithPopup(
                new firebase.auth.GoogleAuthProvider()
            )
            await configurarSessao(resp.user)
            router.push('/')
        } finally {
            setCarregando(false)
        }
    }

// Função de logout
    async function logout(){
        try {
            setCarregando(true)
            await firebase.auth().signOut()
            await configurarSessao(null)
        } finally {
            setCarregando(false)
        }
    }

// Retornando Provider
     return (
         <AuthContext.Provider value={{
             usuario, loginGoogle, logout, carregando, login, cadastrar
         }}>
             {props.children}
         </AuthContext.Provider>
     )
}

// Hook customizado
export const useAuth = () => useContext(AuthContext)


export default AuthContext

