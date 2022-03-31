import AppProvider from '@/components/AppContext'
import { AppProps } from 'next/app'

import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  const { global, ...passThroughProps } = pageProps

  const componentProps = {
    ...passThroughProps
  }
  return (
    <AppProvider value={global}>
      <Component {...componentProps} />
    </AppProvider>
  )
}

export default App
