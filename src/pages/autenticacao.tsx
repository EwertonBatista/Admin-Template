import { useState } from "react";
import AuthInput from "../components/auth/Authinput";

export default function Autenticacao(){

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')
    const [modo, setModo] = useState<''>('')

    return (
        <div className={`flex flex-col`}>
            <h1>Autenticação</h1>
            <AuthInput obrigatorio label="Email" tipo="email" valor={email} valorMudou={setEmail}/>
            <AuthInput obrigatorio label="Senha" tipo="password" valor={senha} valorMudou={setSenha}/>
        </div>
    )
}