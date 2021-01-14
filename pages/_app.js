import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import Layout from '../components/layout';

function MyApp({ Component, pageProps }) {
  return(
  <Layout>
    <Component {...pageProps} />
  </Layout>
  )
}

export default MyApp
