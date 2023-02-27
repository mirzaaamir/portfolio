import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ListMenu from "./ListMenu";
import second from "../../public/Rectangle15.svg";
import personalPic from "../../public/Rectangle16.jpg";
import styles from "@/styles/Home.module.css";
import { Box } from "@mui/system";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
const Header = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"

        // padding={4}
      >
        <Box
          sx={{
            backgroundImage: `url(${second.src})`,
            height: "500px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "grid",
            gridTemplateColumns: "1fr 80px",
          }}
        >
          <Grid
            container
            direction="column"
            // justifyContent="center"
            // alignItems="center"
            // columnSpacing={4}
          >
            <Box padding={4}>
              <Grid
                container
                spacing={{ xs: 2, md: 16 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item>Services</Grid>
                <Grid item>Skills</Grid>
                <Grid item>Projects</Grid>
                <Grid item>Blogs</Grid>
                <Grid item>Contact</Grid>
              </Grid>
            </Box>

            <Box marginTop={6} marginBottom={4}>
              <Grid container direction="column">
                <Grid item>
                  <Typography display="flex" justifyContent="center">
                    Daniel Alexander
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography display="flex" justifyContent="center">
                    Mern Stack Developer
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box marginTop={4} marginBottom={2}>
              <Grid container direction="column">
                <Grid item paddingLeft={4}>
                  <Typography display="flex" justifyContent="center">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry of
                    standard dummy text ever since the 1500s, when an unknown
                    {/* printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s */}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            {/* <Box>
              <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
                <Box gridColumn="span 4">
                  <Image
                    src={personalPic}
                    alt="personal Picture"
                    width={209}
                    height={230}
                  />
                </Box>
                <Box gridColumn="span 5">
                  <Box>
                    <Box
                      display="grid"
                      gridTemplateColumns="repeat(12, 1fr)"
                      gap={2}
                    >
                      <Typography gridColumn="span 2">Age:</Typography>
                      <Typography gridColumn="span 3">26</Typography>
                    </Box>
                    <Box
                      display="grid"
                      gridTemplateColumns="repeat(12, 1fr)"
                      gap={2}
                    >
                      <Typography gridColumn="span 2"> Phone:</Typography>
                      <Typography gridColumn="span 3">
                        +92-307-6373865
                      </Typography>
                    </Box>
                    <Box
                      display="grid"
                      gridTemplateColumns="repeat(12, 1fr)"
                      gap={2}
                    >
                      <Typography gridColumn="span 2"> Email:</Typography>
                      <Typography gridColumn="span 3">
                        mirzaaamir157@gmail.com
                      </Typography>
                    </Box>
                    <Box
                      display="grid"
                      gridTemplateColumns="repeat(12, 1fr)"
                      // gap={2}
                    >
                      <Typography gridColumn="span 2"> Address:</Typography>
                      <Typography gridColumn="span 3">
                        310 Model Town L block Lahore
                      </Typography>
                    </Box>
                  </Box>
                </Box>
                <Box gridColumn="span 3" display="flex" alignItems="end">
                  <Box display="flex">
                    <Typography>Follow me | </Typography>
                    <LinkedInIcon />
                  </Box>
                </Box>
              </Box>
            </Box> */}
          </Grid>
          <Grid
            container
            direction="column"
            display="flex"
            // alignSelf="center"
            width={400}
            height={400}
            className={styles.headerEffect}
          >
            <Box>1</Box>
           
            {/* <Typography>right filtter</Typography> */}
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default Header;
