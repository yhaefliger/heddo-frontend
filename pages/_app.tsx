import AppProvider from 'contexts/AppContext'
import { AppProps } from 'next/app'

import '../styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  const componentProps = {
    ...passThruProps,
    page: pageProps.page
  }
  return (
    <AppProvider value={pageProps.global}>
      <Component {...componentProps} />
    </AppProvider>
  )
}

export default App
