import useAppData from "../../data/hook/useAppData"
import BotaoAlternarTema from "./BotaoAlternarTema"
import Titulo from "./Titulo"
import AvatarUsuario from './avatarUsuario'

interface CabecalhoProps{
    titulo: string
    subtitulo: string
}

export default function Layout(props: CabecalhoProps){
    const dados = useAppData()
    return (
        <div className={`flex `}>
            <Titulo titulo={props.titulo} subtitulo={props.subtitulo}/>
            <div className={`flex flex-grow justify-end items-center`}>
                <BotaoAlternarTema tema={dados.tema} alternarTema={dados.alternarTema}/>
                <AvatarUsuario className="border-2 border-red-600 hover:opacity-95"></AvatarUsuario>
            </div>
        </div>
    )
}