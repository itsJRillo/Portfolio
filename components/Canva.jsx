import styles from "../styles/Canva.module.css";
import Box from "./geometries/Box";
import { Canvas } from "@react-three/fiber";

const Canva = () => (
  <div className={styles.medida}>
    <Canvas>
      <pointLight position={[10, 10, 10]} />
      <Box />
    </Canvas>
  </div>
);

export default Canva;
