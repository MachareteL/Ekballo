import '../../styles/globals.css'
import { SessionProvider } from "next-auth/react"
import NavBar from '../components/Navbar'
import Footer from '../components/Footer'
import NextNProgress from 'nextjs-progressbar'
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <NextNProgress color='#fdf2f0'/>
      <NavBar />
      <Component {...pageProps} />
      <Footer />
    </SessionProvider>
  )
}
