import Layout from '../component/layout/layout'
import '../styles/globals.css'
import Head from 'next/head'
import { UserContextProvider } from '../store/userContext'
 
 
  


export default function App({ Component, pageProps }) {
  return (
   <UserContextProvider>
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1'/>
      </Head>
  <Component {...pageProps} />
  </Layout>
  </UserContextProvider>
  
  )
}
