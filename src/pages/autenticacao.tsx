import { useContext, useState } from "react";
import AuthInput from "../components/auth/Authinput";
import {IconeWarning} from "../components/icons/index"
import  {useAuth}  from "../data/hook/useAuth";

// Hook personalizado criado para simplificar o uso do useContext


 
export default function Autenticacao(){

    const {login, cadastrar ,loginGoogle } = useAuth();



    const [erro, setErro] = useState(null)
    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [modo, setModo] = useState<'login' | 'cadastro'>('login')

    async function submeter(){
        try {
            modo === 'login' ? await login(email, senha) : await cadastrar(email, senha)
        } catch(e){
            exibirErro(e?.message ?? 'Erro desconhecido')
        }
    }

    function exibirErro(msg: any, tempo = 5){
        setErro(msg)

        setTimeout(()=>{
                setErro(null)
        }, tempo * 1000)
        
    }
    

    return (
        <div className={`flex h-screen items-center justify-center`}>  


        {/* <button onClick={() => { exibirErro('Ei boy, rakiaro tua conta, liga pa polisa', 3) }}>Clica pra nos testa</button> */}

            <div className={`hidden md:block md:w-1/2 lg:w-2/3`}>
                <img src="https://source.unsplash.com/random" alt="" className={`h-screen w-full object-cover`}/>
            </div>
            <div className={`w-full lg:w-1/3 md:w-1/2 m-10 border-4 border-green-500 p-7 rounded-xl`}>
                <h1 className={`text-3xl font-bold mb-5`}>
                    {modo === 'login' ? 'Entre com a sua conta' : 'Cadastre-se na plataforma'}
                </h1>
            
                {erro ? (
                    <div className={`flex items-center text-center bg-red-400 text-white py-3 px-5 rounded-lg border-2 border-red-700`}>
                        {IconeWarning()}
                        <p>{erro}</p>
                    </div>

                ) : false}

           

                <AuthInput obrigatorio label="Email" tipo="email" valor={email} valorMudou={setEmail}/>
                <AuthInput obrigatorio label="Senha" tipo="password" valor={senha} valorMudou={setSenha}/>

                <button onClick={submeter} className={`w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg px-4 py-3 mt-6`}>
                    {modo === 'login' ? 'Entrar' : 'Cadastrar'}
                </button>

                <hr className={`my-6 border-gray-600 w-full`} />

                <button onClick={loginGoogle} className={`w-full bg-red-500 hover:bg-red-400 text-white rounded-lg px-4 py-3`}>
                    Entrar com o Google
                </button>

                {modo === 'login' ? (
                    <p className={`mt-8 text-center`}>Ainda sem conta? 
                        <a className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`} onClick={() => setModo('cadastro')}> Crie uma agora mesmo :)</a>
                    </p>
                ) : (
                    <p className={`mt-8 text-center`}>Ah, Você já tem conta? 
                        <a className={`text-blue-500 hover:text-blue-700 font-semibold cursor-pointer`} onClick={() => setModo('login')}> Então loga ai</a>
                    </p>
                )}
            </div>
        </div>
    )
}