import { createContext, useState } from 'react'
import firebase from '../../firebase/config'
import Usuario from '../../model/Usuario'

interface AuthContextProps {
    usuario?: Usuario
    loginGoogle?: () => Promise<void>
}

const AuthContext = createContext<AuthContextProps>({

})

export function AuthProvider(props){

    const [usuario, setUsuario] = useState<Usuario>(null)

    async function loginGoogle() {
        
    }

     return (
         <AuthContext.Provider value={{
             usuario, loginGoogle
         }}>
             {props.children}
         </AuthContext.Provider>
     )
}


export default AuthContext

