import Layout from '../components/layout/layout';
import '../styles/globals.css'
import { NotificationContextProvider } from '../store/notification-context';

function MyApp({ Component, pageProps }) {
  return <NotificationContextProvider>
    <Layout>
    <Component {...pageProps} />
  </Layout>
  </NotificationContextProvider>
}

export default MyApp
