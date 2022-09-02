import styles from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <motion.hr
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: 0.4,
            },
          },
        }}
        className={`${styles.centerDiamond} ${styles.hr} `}
      ></motion.hr>
      <p className={styles.built}>
        <a href="https://github.com/itsJRillo/Portfolio">
          Built and Designed by Ismael Morillo
        </a>
      </p>

      <div className={styles.socials}>
        <Link href="https://github.com/itsJRillo">
          <a>
            <Image
              src="/icons/Github.png"
              width={30}
              height={30}
              alt={`imagen github`}
            />
          </a>
        </Link>
        <Link href="https://twitter.com/itsJrillo">
          <a>
            <Image
              src="/icons/Twitter.png"
              width={50}
              height={50}
              alt={`imagen twitter`}
            />
          </a>
        </Link>
        <Link href="https://www.linkedin.com/in/ismael-morillo/">
          <a>
            <Image
              src="/icons/Linkedin.png"
              width={40}
              height={40}
              alt={`imagen linkedin`}
            />
          </a>
        </Link>
        <Link href="https://www.behance.net/ismaelmorillo">
          <a>
            <Image
              src="/icons/Behance.png"
              width={40}
              height={40}
              alt={`imagen behance`}
            />
          </a>
        </Link>
      </div>

      <div className={styles.linea}></div>
    </div>
  );
};

export default Footer;
