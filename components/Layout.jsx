import Head from "next/head";
import Header from "./Header"
import Footer from "./Footer"
import styles from "../styles/Layout.module.css"

const Layout = ({children, pagina}) => {
  return (
    <div className={styles.layout}>

      <Head>
        <title>itsJRillo | {pagina} </title>
        <meta name="description" content="Portfolio de Ismael aka itsJRillo" ></meta>
      </Head>

        <Header/>

        {children}

        <Footer/>
    </div>
  )
}

export default Layout
