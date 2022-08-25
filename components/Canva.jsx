import styles from "../styles/Canva.module.css";
import Box from "./geometries/Box";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";


const Canva = () => (
  <Canvas>
    <OrbitControls />
    <pointLight position={[5, 5, 5]} />
    <Box/>    
  </Canvas>
);

export default Canva;
