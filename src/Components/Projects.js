import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "@/styles/Home.module.css";
import demoImage from "../../public/demoImage.jpg";
import Image from "next/image";
const Projects = () => {
  return (
    <Grid
      className={styles.projects}
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
    >
      <Typography
        gridColumn={4}
        variant="h1"
        className={styles.portfolioMainHeading}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        Projects
      </Typography>
      <Grid
        // style={{ padding: "96px 66px" }}
        container
        columnGap={{ sm: 4, md: 6, lg: 6, xl: 8 }}
        rowGap={4}
        columns={{ sm: 6, md: 8, lg: 8, xl: 16 }}
        sx={{ margin: "12px 0px" }}
        display="flex"
        justifyContent="center"
      >
        <Card className={styles.projectsCard} sx={{ maxWidth: 345 }}>
          {/* <CardActionArea>
            <CardMedia
              // style={{ backgroundImage: demoImage }}
              component="img"
              height="140"
              image={require('public/mediaP1.svg')} // require image
             
              alt="green iguana"
            /> */}
            <CardMedia>
            <Image src={demoImage} alt="background Image" width={200} height={140} />
            </CardMedia>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          {/* </CardActionArea> */}
        </Card>
        <Card className={styles.projectsCard} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={styles.projectsCard} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
        <Card className={styles.projectsCard} sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image="/static/images/cards/contemplative-reptile.jpg"
              alt="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Lizard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>

      {/* There is already an h1 in the page, let's not duplicate it. */}
    </Grid>
  );
};

export default Projects;
