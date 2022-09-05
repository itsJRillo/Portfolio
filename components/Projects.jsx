import styles from "../styles/Projects.module.css";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

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
        className={styles.cards}
      >
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="pagina web tabla"
            height="140"
            image="/icons/tabla.png"
          />
          <CardContent>
            <Typography
              fontFamily={"Josefin Sans"}
              gutterBottom
              variant="h5"
              component="div"
            >
              Tabla Periódica
            </Typography>
            <Typography
              fontFamily={"Josefin Sans"}
              variant="body2"
              color="text.secondary"
            >
              Página Web hecha con HTML, CSS y JavaScript a modo de refuerzo de
              conocimientos. En esta página nos encontraremos con una tabla
              periódica interactiva, que muestra curiosidades del elemento que
              selecciones así como su estado natural.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              target="_blank"
              href="http://github.com/itsJRillo/TablaPeriodica"
              variant="contained"
              size="small"
            >
              Repo
            </Button>
            <Button
              target="_blank"
              href="http://itsjrillo-periodictable.netlify.app/"
              variant="contained"
              size="small"
            >
              Ir al sitio
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="pagina web fighting"
            height="140"
            image="/icons/fighting.png"
          />
          <CardContent>
            <Typography
              fontFamily={"Josefin Sans"}
              gutterBottom
              variant="h5"
              component="div"
            >
              Fighting Game
            </Typography>
            <Typography
              fontFamily={"Josefin Sans"}
              variant="body2"
              color="text.secondary"
            >
              Juego local sencillo hecho con JavaScript puro a modo de práctica.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              target="_blank"
              href="https://github.com/itsJRillo/Fighting-Game"
              variant="contained"
              size="small"
            >
              Repo
            </Button>
            <Button
              target="_blank"
              href="https://itsjrillo-fightinggame.netlify.app/"
              variant="contained"
              size="small"
            >
              Ir al sitio
            </Button>
          </CardActions>
        </Card>

        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="pagina web quiosco"
            height="140"
            image="/icons/quiosco.png"
          />
          <CardContent>
            <Typography
              fontFamily={"Josefin Sans"}
              gutterBottom
              variant="h5"
              component="div"
            >
              Web Quiosco
            </Typography>
            <Typography
              fontFamily={"Josefin Sans"}
              variant="body2"
              color="text.secondary"
            >
              Página hecha con React, Next.js y Node.js. En está página
              simularemos un pequeño quiosco en el que se podrán hacer pedidos y
              estos a su vez se registrarán en una BBDD de MySQL alojada en la
              nube gracias a Railway, una plataforma para el soporte de
              infraestructuras para su publicación en la nube, en la que también
              se ha hecho el deployment de la web.
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              target="_blank"
              href="https://github.com/itsJRillo-CursoReact/QuioscoApp"
              variant="contained"
              size="small"
            >
              Repo
            </Button>
            <Button
              target="_blank"
              href="https://itsjrillo-quioscoapp.up.railway.app/"
              variant="contained"
              size="small"
            >
              Ir al sitio
            </Button>
          </CardActions>
        </Card>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
