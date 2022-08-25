import { Canvas } from "@react-three/fiber";
import { Sphere } from "./Objects";
import styles from "../styles/Main.module.css"

const Main = () => {
  return (
    <div>
      <main className={`contenido ${styles.main}`}>

        <div>

        </div>

        <div className={`contenido ${styles.canvas}`}>
          <Canvas>
            <pointLight position={[5, 5, 5]} />
            <Sphere />
          </Canvas>
        </div>
      </main>
    </div>
  );
};

export default Main;
