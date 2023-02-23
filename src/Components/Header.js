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
        padding={4}
      >
        <Box
          sx={{
            backgroundImage: `url(${second.src})`,
            height: "500px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <Grid
            container
            direction="column"
            // justifyContent="center"
            // alignItems="center"
            // columnSpacing={4}
          >
            <Box>
              <Grid
                container
                spacing={{ xs: 4, md: 16 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
              >
                <Grid item>Services</Grid>
                <Grid item>Skills</Grid>
                <Grid item>Projects</Grid>
                <Grid item>Blogs</Grid>
                <Grid item>Contact</Grid>
              </Grid>
            </Box>
            <Box marginTop={12} marginBottom={12}>
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
            <Box>
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
            </Box>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default Header;
