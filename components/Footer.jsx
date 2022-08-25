import styles from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Sidebars = () => {
  return (
    <div className={styles.footer}>

        <p className={styles.derechos}> <a href="https://github.com/itsJRillo/Portfolio">Built and Designed by Ismael Morillo</a> </p>
        
        <ul class={styles.socials}>
          <Link href="#">
            <Image src="/icons/github.png" width={30} height={30} alt={`imagen github`}/>
          </Link>
          <Link href="#">
            <Image src="/icons/twitter.png" width={30} height={30} alt={`imagen github`}/>
          </Link>
          <Link href="#">
            <Image src="/icons/linkedin.png" width={30} height={30} alt={`imagen github`}/>
          </Link>
          <Link href="#">
            <Image src="/icons/behance.png" width={30} height={30} alt={`imagen github`}/>
          </Link>
        </ul>
      
        <div className={styles.linea}></div>
    </div>
  );
};

export default Sidebars;
