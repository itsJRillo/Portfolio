import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";

export default function ProjectCard({ title, desc, urlWeb, urlGit, image }) {
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

  const maxWidth = 500;
  return (
    <>
      <Card sx={{ maxWidth: maxWidth }}>
        <CardMedia
          component="img"
          alt="pagina web tabla"
          height={300}
          image={`${image}`}
        />
        <CardContent>
          <Typography
            fontFamily={"Josefin Sans"}
            gutterBottom
            fontSize={20}
            variant="h5"
            component="div"
          >
            {title}
          </Typography>
          <Typography
            fontFamily={"Josefin Sans"}
            fontSize={16}
            variant="body2"
            color="text.secondary"
          >
            {desc}
          </Typography>
        </CardContent>
        <CardActions>
          <ColorButton target="_blank" href={`${urlGit}`} variant="contained">
            Go to Github
          </ColorButton>
          <ColorButton target="_blank" href={`${urlWeb}`} variant="contained">
            Go to Website
          </ColorButton>
        </CardActions>
      </Card>
    </>
  );
}
