import Layout from '../components/layout/layout';
import '../styles/globals.css'
import Notification from '../components/notification/notification';

function MyApp({ Component, pageProps }) {
  return <Layout>
    <Component {...pageProps} />
    <Notification title='Hello World' message='Hello Muthafaka!' status='pending'/>
  </Layout>
}

export default MyApp
