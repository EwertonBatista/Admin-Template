import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import {AppProvider} from '../data/context/AppContext'
import { TesteProvider } from '../data/context/TesteContext'

function MyApp({ Component, pageProps }) {
  return (

    <TesteProvider>
      <AppProvider>
        <Component {...pageProps} />
      </AppProvider>
    </TesteProvider>
  )
}

export default MyApp
