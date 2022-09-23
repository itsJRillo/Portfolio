import styles from "../styles/Projects.module.css";
import { motion } from "framer-motion";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link } from "@mui/material";

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
            alt="pagina web guitarla"
            height="140"
            image="/icons/guitar.png"
          />
          <CardContent>
            <Typography
              fontFamily={"Josefin Sans"}
              gutterBottom
              variant="h5"
              component="div"
            >
              Web Guitarras
            </Typography>
            <Typography
              fontFamily={"Josefin Sans"}
              variant="body2"
              color="text.secondary"
            >
              Página hecha con React, Next.js y Node.js. Esta página fue creada en el{" "}
              <Link target="_blank" href="https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/">
                <b>curso de React de Juan Pablo</b>
              </Link> , es un sitio de venta de guitarras con sus propios blogs y sistema de carrito.
              
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              target="_blank"
              href="https://github.com/itsJRillo-CursoReact/GuitarLA"
              variant="contained"
              size="small"
            >
              Repo
            </Button>
            <Button
              target="_blank"
              href="https://itsjrillo-guitarla.vercel.app/"
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
