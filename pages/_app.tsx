import { AppProps } from 'next/app'
import { useEffect } from 'react'
import Layout from '@components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@styles/globals.css'

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap')
  }, [])
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default App
