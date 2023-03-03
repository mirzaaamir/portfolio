import { Button, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import ListMenu from "./ListMenu";
import second from "../../public/Rectangle15.svg";
import personalPic from "../../public/Rectangle16.jpg";
import styles from "@/styles/Home.module.css";
import { Box } from "@mui/system";

const Header = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        <Box
          sx={{
            backgroundImage: `url(${second.src})`,
            height: "700px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            display: "grid",
            gridTemplateColumns: "1fr 80px",
          }}
        >
          <Grid container direction="column" paddingX={4} mt={3}>
            <Box display="flex" justifyContent="center">
              <Grid
                container
                columnGap={{ xs: 0, md: 8 }}
                columns={{ xs: 12, sm: 12, md: 12 }}
              >
                <Button href="#text-buttons" className={styles.headerButton}>
                  Services
                </Button>

                <Button className={styles.headerButton} href="#text-buttons">
                  Skills
                </Button>

                <Button className={styles.headerButton} href="#text-buttons">
                  Projects
                </Button>

                <Button className={styles.headerButton} href="#text-buttons">
                  Contact
                </Button>
              </Grid>
            </Box>

            <Box>
              <Grid
                container
                direction="column"
                mt={8}
                className={styles.setMarginTop}
              >
                <Grid item mb={3}>
                  <Typography
                    className={styles.headerTitle}
                    component="h1"
                    display="flex"
                    justifyContent="center"
                  >
                    Mirza Aamir
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography
                    component="h1"
                    variant="h1"
                    display="flex"
                    justifyContent="center"
                    className={styles.headerJobTitle}
                  >
                    JavaScript Developer
                  </Typography>
                </Grid>
              </Grid>
            </Box>
            <Box>
              <Grid container direction="column" mt={4}>
                <Grid item>
                  <Typography
                    component="p"
                    className={styles.headerDescription}
                    display="flex"
                    justifyContent="center"
                  >
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry of
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Grid>
          <Grid
            container
            direction="column"
            display="flex"
            width={400}
            height={400}
            className={styles.headerEffect}
          >
            <Box>1</Box>
          </Grid>
        </Box>
      </Grid>
    </>
  );
};

export default Header;
