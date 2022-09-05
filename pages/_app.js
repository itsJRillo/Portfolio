import "../styles/global.css";
import "../styles/normalize.css";
import "../styles/Waves.css"
import { PortfolioProvider } from "../context/PortfolioProvider";

function MyApp({ Component, pageProps }) {
  return (
    <PortfolioProvider>
      <Component {...pageProps} />
    </PortfolioProvider>
  )
}

export default MyApp;
