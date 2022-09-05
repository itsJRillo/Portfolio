import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";
import styles from "../styles/Layout.module.css";
import Script from "next/script";

const Layout = ({ children, pagina }) => {
  return (
    <div className={styles.layout}>
      <Head>
        <title>itsJRillo | {pagina} </title>
        <Script src="https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.1.9/p5.min.js" afterInteractive/>
        <meta
          name="description"
          content="Portfolio de Ismael Morillo aka itsJRillo"
        ></meta>
      </Head>

      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;
