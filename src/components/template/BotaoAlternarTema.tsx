import { IconeLight, IconeDark } from "../icons";

interface BotaoAlternarTemaProps{
    tema: string
    alternarTema: () => void
}

export default function BotaoAlternarTema(props: BotaoAlternarTemaProps){
    return props.tema === 'dark' ? (
        <div onClick={props.alternarTema} className={`
        hidden sm:flex items-center
        bg-gradient-to-r from-yellow-300 to-yellow-600 
        w-14 lg:w-14 h-8 cursor-pointer p-1 rounded-full
        `
        }>
            <div className={`flex items-center justify-center bg-white text-yellow-600 w-6 h-6 rounded-full`}>
                {IconeLight(5)}
            </div>
            <div className={`hidden lg:flex items-center text-white justify-start`}>
                {/* <span className={`text-center p-3 text-sm`}>Claro</span> */}
            </div>
        </div>
    ) : (
        <div onClick={props.alternarTema} className={`
        hidden sm:flex items-center justify-end
        bg-gradient-to-r from-gray-500 to-gray-900
        w-14 lg:w-14 h-8 cursor-pointer p-1 rounded-full
        `
        }>

            <div className={`hidden lg:flex items-center -mr-1 text-white`}>
                {/* <span className={`text-center p-3 text-sm`}>Escuro</span> */}
            </div>

            <div className={`flex items-center justify-center bg-black text-yellow-300 w-6 h-6 rounded-full`}>
                {IconeDark(5)}
            </div>
            
        </div>
    )
}