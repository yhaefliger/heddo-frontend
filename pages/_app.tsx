import AppProvider from '@/components/app-context'

import '../styles/globals.css'

const App = ({ Component, pageProps }) => {
  //extract global data from page props to assign to app context
  const { global, ...componentProps } = pageProps

  return (
    <AppProvider value={global}>
      <Component {...componentProps} />
    </AppProvider>
  )
}

export default App
