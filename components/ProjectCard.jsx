import React from "react";

export default function ProjectCard({title, desc, urlWeb, urlGit, image}) {
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
          <ColorButton
            target="_blank"
            href={`${urlGit}`}
            variant="contained"
          >
            Go to Github
          </ColorButton>
          <ColorButton
            target="_blank"
            href={`${urlWeb}`}
            variant="contained"
          >
            Go to Website
          </ColorButton>
        </CardActions>
      </Card>
    </>
  );
}
