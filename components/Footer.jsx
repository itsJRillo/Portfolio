import styles from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <hr className={`${styles.centerDiamond} ${styles.hr} `}/>
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
        <svg
          class="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shape-rendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g class="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="3"
              fill="rgba(255,255,255,0.5)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="5"
              fill="rgba(255,255,255,0.3)"
            />
            <use xlinkHref="#gentle-wave" x="48" y="7" fill="#fff" />
          </g>
        </svg>
      </div>

      
    </div>
  );
};

export default Footer;
