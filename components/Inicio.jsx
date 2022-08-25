import Canva from "./Canva"
import styles from "../styles/Inicio.module.css"
import { Canvas } from "@react-three/fiber"

const Inicio = () => {
  return (
    <div className={`contenedor ${styles.inicio}`}>
      <div className={styles.texto}>
        <h5>Hello, my name is</h5>
        <h2>Ismael Morillo</h2>
        <p>
          Descripción de mi, lo que hago y a que apunto
        </p>
      </div>

      <Canva/>
      
    </div>
  )
}

export default Inicio
