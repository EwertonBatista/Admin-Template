import {createContext} from 'react'

export const TesteContext = createContext({})

export const TesteProvider = (props: any) => {

    const user = {
        name: 'Cavalo',
        idade: 'azul',
        cor: 'text-yellow-500',
        tamanho: 'bg-blue-900'
    }

    return (
        <TesteContext.Provider value={{user}}>
            {props.children}
        </TesteContext.Provider>
    )
}