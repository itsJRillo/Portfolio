import styles from "../styles/Projects.module.css";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Link, styled } from "@mui/material";

import { motion } from "framer-motion";

const Projects = () => {
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText("#edbe00"),
    backgroundColor: "#edbe00",
    color: "#fff",
    fontWeight: 900,
    "&:hover": {
      backgroundColor: "#12171b",
      color: "#edb300",
      fontWeight: 900,
    },
  }));

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
        className={styles.cardHolder}
      >
        <div className={styles.cards}>
          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              alt="pagina web tabla"
              height={300}
              image="/icons/tabla.png"
            />
            <CardContent>
              <Typography
                fontFamily={"Josefin Sans"}
                gutterBottom
                fontSize={20}
                variant="h5"
                component="div"
              >
                Tabla Peri??dica
              </Typography>
              <Typography
                fontFamily={"Josefin Sans"}
                fontSize={16}
                variant="body2"
                color="text.secondary"
              >
                P??gina Web hecha con HTML, CSS y JavaScript a modo de refuerzo
                de conocimientos. En esta p??gina nos encontraremos con una tabla
                peri??dica interactiva, que muestra curiosidades del elemento que
                selecciones as?? como su estado natural.
              </Typography>
            </CardContent>
            <CardActions>
              <ColorButton
                target="_blank"
                href="https://github.com/itsJRillo/TablaPeriodica"
                variant="contained"
              >
                Go to Github
              </ColorButton>
              <ColorButton
                target="_blank"
                href="https://itsjrillo-periodictable.netlify.app"
                variant="contained"
              >
                Go to Website
              </ColorButton>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              alt="pagina web trash-taste"
              height={300}
              image="/icons/trash-taste.png"
            />
            <CardContent>
              <Typography
                fontFamily={"Josefin Sans"}
                fontSize={20}
                gutterBottom
                variant="h5"
                component="div"
              >
                Trash Taste Podcast
              </Typography>
              <Typography
                fontFamily={"Josefin Sans"}
                fontSize={16}
                variant="body2"
                color="text.secondary"
              >
                Esta p??gina es una especie de recopilaci??n de los episodios del
                podcast de anime Trash Taste, la hice como pr??ctica con React y
                librer??as como MUI y TailwindCSS. Tambi??n me permiti?? trabajar
                con APIs REST y c??mo manejarlas en producci??n.
              </Typography>
            </CardContent>
            <CardActions>
              <ColorButton
                target="_blank"
                href="https://github.com/itsJRillo/TrashTaste-React"
                variant="contained"
              >
                Go to Github
              </ColorButton>
              <ColorButton
                target="_blank"
                href="https://trash-taste-podcast.netlify.app"
                variant="contained"
              >
                Go to Website
              </ColorButton>
            </CardActions>
          </Card>

          <Card sx={{ maxWidth: 500 }}>
            <CardMedia
              component="img"
              alt="pagina web guitarla"
              height={300}
              image="/icons/guitar.png"
            />
            <CardContent>
              <Typography
                fontFamily={"Josefin Sans"}
                fontSize={16}
                gutterBottom
                variant="h5"
                component="div"
              >
                Web Guitarras
              </Typography>
              <Typography
                fontFamily={"Josefin Sans"}
                fontSize={18}
                variant="body2"
                color="text.secondary"
              >
                P??gina hecha con React, Next.js y Node.js. Esta p??gina fue
                creada en el{" "}
                <Link
                  target="_blank"
                  href="https://www.udemy.com/course/react-de-principiante-a-experto-creando-mas-de-10-aplicaciones/"
                >
                  <b>curso de React de Juan Pablo</b>
                </Link>{" "}
                , es un sitio de venta de guitarras con sus propios blogs y
                sistema de carrito.
              </Typography>
            </CardContent>
            <CardActions>
              <ColorButton
                target="_blank"
                href="https://github.com/itsJRillo-CursoReact/GuitarLA"
                variant="contained"
              >
                Go to Github
              </ColorButton>
              <ColorButton
                target="_blank"
                href="https://itsjrillo-guitarla.vercel.app/"
                variant="contained"
              >
                Go to Website
              </ColorButton>
            </CardActions>
          </Card>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;
