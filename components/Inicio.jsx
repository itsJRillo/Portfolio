import Box from "./geometries/Box";
import styles from "../styles/Inicio.module.css";
import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";

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
        <h5>Hello, my name is</h5>
        <h2>Ismael Morillo</h2>
        <p>Descripción de mi, lo que hago y a que apunto</p>
      </motion.div>

      <Canvas>
        <mesh>
          <pointLight position={[10, 10, 10]} />
          <Box />
        </mesh>
      </Canvas>
    </div>
  );
};

export default Inicio;
