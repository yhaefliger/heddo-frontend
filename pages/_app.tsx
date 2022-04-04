import AppProvider from '@/components/app-context'
import { PageProps } from '@/lib/page'
import { AppProps } from 'next/app'

interface CustomAppProps extends AppProps {
  pageProps: PageProps
}

import '../styles/globals.css'

const App = ({ Component, pageProps }: CustomAppProps) => {
  //extract global data from page props to assign to app context
  const { global, ...passThroughProps } = pageProps

  const componentProps = {
    ...passThroughProps,
  }

  return (
    <AppProvider value={global}>
      <Component {...componentProps} />
    </AppProvider>
  )
}

export default App
