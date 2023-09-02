import styles from "../styles/Inicio.module.css";
import { motion } from "framer-motion";

const Inicio = () => {
  return (
    <div className={styles.inicio}>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {
            scale: 0.8,
            opacity: 0,
          },
          visible: {
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
        <p>Soy un desarrollador web en proceso, <br/> me gusta diseñar y construir cosas en la web.</p>
      </motion.div>
    </div>
  );
};

export default Inicio;
