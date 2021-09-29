import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import {AppProvider} from '../data/context/AppContext'
import {AuthProvider} from '../data/context/AuthContext'

// Context Teste
import { TesteProvider } from '../data/context/TesteContext'


function MyApp({ Component, pageProps }) {
  return (   
    
      <TesteProvider>
        <AuthProvider>
          <AppProvider>
            <Component {...pageProps} />
          </AppProvider>
        </AuthProvider>
      </TesteProvider>
    
  )
}

export default MyApp
