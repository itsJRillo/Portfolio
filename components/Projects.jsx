import styles from "../styles/Projects.module.css";
import { motion } from "framer-motion";

const Projects = () => {

  return (
    <motion.div
      className={styles.contenido}
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
    >
      <hr className={`${styles.centerDiamond} ${styles.hr} `} />
      <h2 className={`heading`}>Mis proyectos</h2>

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
              delay: 0.6,
            },
          },
        }}
        className={styles.cardHolder}
      >
        <div className={styles.cards}>
          <ProjectCard
            title="Tabla Periodica"
            desc="Página Web hecha con HTML, CSS y JavaScript a modo de refuerzo de
            conocimientos. En esta página nos encontraremos con una tabla
            periódica interactiva, que muestra curiosidades del elemento que
            selecciones así como su estado natural."
            urlGit="https://github.com/itsJRillo/TablaPeriodica"
            urlWeb="https://itsjrillo-periodictable.netlify.app"
            image="/icons/tabla.png"
          />

          <ProjectCard
            title="Trash Taste Podcast"
            desc="Esta página es una especie de recopilación de los episodios del
            podcast de anime Trash Taste, la hice como práctica con React y
            librerías como MUI y TailwindCSS. También me permitió trabajar
            con APIs REST y cómo manejarlas en producción."
            urlGit="https://github.com/itsJRillo/TrashTaste-React"
            urlWeb="https://trash-taste-podcast.netlify.app"
            image="/icons/trash-taste.png"
          />

          <ProjectCard
            title="SHOTEN - Movie and Series Catalog"
            desc="Página hecha con React y TypeScript, con un backend y API
            creados con PocketBase y E2E-testing en deploy con Netlify y
            Cypress."
            urlGit="https://github.com/itsJRillo/Shoten"
            urlWeb="https://shoten-itsjrillo.netlify.app"
            image="/icons/shoten.png"
          />

          <ProjectCard
            title="DevGoods E-Commerce"
            desc="Este proyecto es un simple sitio web de comercio electrónico
            construido desde cero usando React, NextJS y Typescript. Sirve
            como un ejercicio de práctica para mi portafolio, mostrando mis
            habilidades en el desarrollo front-end, así como mi experiencia
            en el desarrollo back-end."
            urlGit="https://github.com/itsJRillo/DevGoods"
            urlWeb="https://devgoods.vercel.app"
            image="/icons/shoten.png"
          />
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
