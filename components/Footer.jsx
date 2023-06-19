import styles from "../styles/Footer.module.css";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div>
        <hr className={`${styles.centerDiamond} ${styles.hr}`} />
        <p className={styles.built}>
          <a
            href="https://github.com/itsJRillo/Portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            Built and Designed by Ismael Morillo
          </a>
        </p>

        <div className={styles.socials}>
          <Link href="https://github.com/itsJRillo">
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src="/icons/github.png"
                width={40}
                height={40}
                alt="imagen github"
              />
            </a>
          </Link>
          <Link href="https://twitter.com/itsJrillo">
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src="/icons/twitter.png"
                width={40}
                height={40}
                alt="imagen twitter"
              />
            </a>
          </Link>
          <Link href="https://www.linkedin.com/in/ismael-morillo/">
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src="/icons/linkedin.png"
                width={40}
                height={40}
                alt="imagen linkedin"
              />
            </a>
          </Link>
          <Link href="https://www.behance.net/ismaelmorillo">
            <a target="_blank" rel="noopener noreferrer">
              <Image
                src="/icons/behance.png"
                width={40}
                height={40}
                alt="imagen behance"
              />
            </a>
          </Link>
        </div>
        <svg
          className="waves"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 24 150 28"
          preserveAspectRatio="none"
          shapeRendering="auto"
        >
          <defs>
            <path
              id="gentle-wave"
              d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z"
            />
          </defs>
          <g className="parallax">
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="0"
              fill="rgba(255,255,255,0.7)"
            />
            <use
              xlinkHref="#gentle-wave"
              x="48"
              y="-12"
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
