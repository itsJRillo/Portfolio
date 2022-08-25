import styles from "../styles/Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className={`contenedor ${styles.contenido}`}>
      <div className={styles.barra}>
        <h1 className={`heading ${styles.titulo}`}>Portfolio</h1>

        <nav className={styles.navegacion}>
          <Link href="/">Inicio</Link>
          <Link href="/about">About Me</Link>
          <Link href="/projects">Projects</Link>
          <button type="button">Resume</button>
        </nav>
      </div>
    </div>
  );
};

export default Header;
