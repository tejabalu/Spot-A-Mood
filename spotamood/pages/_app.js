import Layout from '../components/layout/Layout'
import '../styles/globals.css'
import ApiCharts from './ApiCharts'
import SpotifyAuth from './SpotifyAuth'

function MyApp({ Component, pageProps }) {
  
  return (
    <Layout>
      <Component {...pageProps} />
      <ApiCharts />
      <SpotifyAuth />
    </Layout>
  )
}

export default MyApp
