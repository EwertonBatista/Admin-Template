import useAppData from '../../data/hook/useAppData'
import { IconeCasa, IconeAjustes, IconeSino, IconeLogout, IconeDark, IconeLight } from '../icons'
import Logo from './Logo'
import MenuItem from './MenuItem'


export default function MenuLateral(){
    const dados = useAppData()
    return (
        <aside className={`flex flex-col 
        bg-gray-200 text-gray-700        
        dark:bg-gray-900 dark:text-gray-200
        `}>
            <div className={`
            h-20 w-20 
            flex flex-col items-center justify-center
            bg-gradient-to-r from-indigo-500 to-purple-800`}>
                <Logo/>
            </div>
            <ul className={`flex-grow`}>
                <MenuItem url="/" texto="Home" icone={IconeCasa}/>
                <MenuItem url="/ajustes" texto="Google" icone={IconeAjustes}/>
                <MenuItem url="/notificacoes" texto="Notificações" icone={IconeSino}/>
            </ul>
            <ul>
            <MenuItem url="/notificacoes" texto="Tema" icone={dados.tema == 'dark' ? IconeLight() : IconeDark()} onClick={dados.alternarTema}/>
                <MenuItem className={`
                text-red-500 
                hover:bg-red-400 
                hover:text-white
                dark:text-red-400
                dark:hover:bg-gray-800
                `} onClick={() => confirm('Deseja sair?')} texto="Home" icone={IconeLogout}/>
            </ul>
            
        
        </aside>
    )
}