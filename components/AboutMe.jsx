import React from "react";
import Image from "next/image";
import styles from "../styles/AboutMe.module.css";
import { motion } from "framer-motion";

const AboutMe = () => {
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
      className={`${styles.contenido}`}
    >
      <hr className={`${styles.centerDiamond} ${styles.hr} `} />
      <h2 className={`heading`}>Sobre mí</h2>
      <div className={styles.parrafo}>
        <div className={styles.colInfo}>
          <p>
            Hola!! Mi nombre es Ismael y soy un apasionado de todo lo orientado
            a la creación de cosas para la Web. Me inicié en la programación
            allá por el 2015 con Lua como mi primer lenguaje, pero en aquel
            momento no podía centrarme a pleno en ello debido a mis otros
            estudios. En 2018 - 2020 puede centrarme un poco más y estudié
            lenguajes tales como Python, Dart y empecé con HTML y CSS.
            <br /> <br />
            En la actualidad, sigo aprendiendo y desarrollando mis habilidades
            en este campo y mi principal objetivo es crear productos accesibles
            y ofrecer a los clientes la mejor experiencia de usuario.
            <br /> <br />
            Tecnologías con las que estoy trabajando:
          </p>

          <div className={styles.techs}>
            <a>
              <Image
                layout="responsive"
                src="/icons/javascript.png"
                width={20}
                height={20}
                alt="logo javascript"
              />
            </a>

            <a>
              <Image
                
                layout="responsive"
                src="/icons/node.png"
                width={30}
                height={30}
                alt="logo nodejs"
              />
            </a>
            <a>
              <Image
                layout="responsive"
                src="/icons/react.png"
                width={30}
                height={30}
                alt="logo react"
              />
            </a>
            <a>
              <Image
                layout="responsive"
                src="/icons/python.png"
                width={30}
                height={30}
                alt="logo python"
              />
            </a>
            <a>
              <Image
                layout="responsive"
                src="/icons/java.png"
                width={30}
                height={30}
                alt="logo java"
              />
            </a>
          </div>
        </div>

        <a className={styles.photo}>
          <Image
            layout="responsive"
            src="/icons/foto.png"
            width={50}
            height={50}
            alt="foto ismael"
            priority
          />
        </a>
      </div>
    </motion.div>
  );
};

export default AboutMe;
