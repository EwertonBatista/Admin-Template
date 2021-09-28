interface AuthInputProps{
    label: string
    valor: any
    obrigatorio?: boolean
    naoRenderizarQuando?: boolean
    tipo: 'text' | 'email' | 'password'
    valorMudou: (novoValor: any) => void 
}

export default function AuthInput(props: AuthInputProps){
    return props.naoRenderizarQuando ? null : (
        <div className={`flex flex-col mt-4`}>
            <label>{props.label}</label>
            <input className={`bg-gray-200 px-4 py-3 rounded-lg border-4 mt-2 focus:bg-white focus:border-blue-500 focus:outline-none`} required={props.obrigatorio} type={props.tipo ?? 'text'} value={props.valor} onChange={e => props.valorMudou?.(e.target.value)}/>
        </div>
    )
}