import styles from "../styles/Inicio.module.css";
import { motion } from "framer-motion";
import Script from "next/script";

const Inicio = () => {
  return (
    <div className={`contenedor ${styles.inicio}`}>
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
              delay: 0.4,
            },
          },
        }}
        className={styles.texto}
      >
        <h4>Hola, mi nombre es</h4>
        <h2>Ismael Morillo</h2>
        <h3>Me gusta diseñar cosas para la web</h3>
      </motion.div>

      
    </div>
  );
};

export default Inicio;
