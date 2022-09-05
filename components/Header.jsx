import styles from "../styles/Header.module.css";
import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

const Header = () => {
  const openResume = () => {
    window.open("CV-Ismael Morillo.pdf");
  };

  return (
    <motion.div
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
            delay: 0.2,
          },
        },
      }}
      className={`contenedor ${styles.contenido}`}
    >
      <div className={styles.barra}>
      <Link href="/">
        <a className={styles.logo}>
          <Image
            priority
            src="/icons/itsjrillo.gif"
            width={200}
            height={200}
            alt="logo"
          />
        </a>
      </Link>

        <nav className={styles.navegacion}>
          <Link href="/about">Sobre mí</Link>
          <Link href="/proyectos">Mis proyectos</Link>
          <Link href="/contacto">Contacto</Link>
          <button onClick={openResume} type="button">
            Mi CV
          </button>
        </nav>
      </div>
    </motion.div>
  );
};

export default Header;
