
// Importando createContext do react para poder criar um contexto
// useState para alterar o contexto em qualquer parte da aplicação
// ↓ ↓ ↓
import {createContext, useContext, useState} from 'react'


// Criando contexto que será exportado e usado globalmente em qualquer parte da aplicação
// ↓ ↓ ↓
export const TesteContext = createContext({})

// Criando o Provider que irá envolver toda a aplicação no arquivo principal onde é importado todas as Pages
export const TesteProvider = (props: any) => {

// Criando um useState para alterar o valor que será enviado
    const [user, setUser] = useState({
        name: 'Ewerton'
    })


// Exemplo de Objeto que pode ser enviado:
// ------------------------------
//    ↓     ↓    ↓              |
//  const user = {              |
//     name: 'Ewerton'          |
// }                            |
// ------------------------------

// Retornando o Provider do TesteContext que foi criado na linha 10
// e na propriedade "value" é passado tudo o que se deseja ser enviado
    return (
        // Nesse caso estou enviando um Objeto apenas com uma string, mas pode ser qualquer tipo de dado
        //                       ↓       ↓       ↓
        <TesteContext.Provider value={{user, setUser}}>
        {/* props.children representa toda a aplicação que será envolvida pelo Provider do TesteContext */}
            {props.children}
        </TesteContext.Provider>
    )
}

// a tag <TesteContext.Provider> deve envolver a aplicação inteira, geralmente no arquivo _app.jsx/tsx que é
// o principal arquivo

// ---------------------------------------------

// Criando um hook customizado para não precisar ficar importando o useState

// Basicamente substitui o import de useContext por useAuth, simplificando o codigo
// exporta uma constante, useContext, nome do Contexto criado
//             ↓                 ↓          ↓
export const useTesteContext = () => useContext(TesteContext)
