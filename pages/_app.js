import '@/styles/globals.css'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
//Layout
import Layout from '@/Components/layout/Layout'

export default function App({ Component, pageProps }) {
  return(
    <Layout>
       <Component {...pageProps} />
    </Layout>
  )
}
