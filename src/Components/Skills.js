import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import js from "../../public/javascript-logo.svg";
const Skills = () => {
  return (
    <Grid
      className={styles.skills}
      container
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
    >
      {/* There is already an h1 in the page, let's not duplicate it. */}
      {/* <Typography variant="h1" component="h2">
       Skills
      </Typography> */}
      <Typography
        gridColumn={4}
        className={styles.headingOne}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        Skills
      </Typography>
      <Grid
        style={{ padding: "96px 66px" }}
        container
        columnGap={{ sm: 4, md: 6, lg: 6, xl: 8 }}
        rowGap={4}
        columns={{ sm: 6, md: 8, lg: 8, xl: 16 }}
        sx={{ margin: "12px 0px" }}
      >
        <Card
          // style={{ margin: " 0px 66px 40px 0px" }}
          className={styles.skillsCard}
        >
          <CardContent>
            <Image src={js} alt="background Image" width={170} height={94} />
          </CardContent>
          <Typography style={{ display: "flex", justifyContent: "center" }}>
            javascript
          </Typography>
        </Card>
        <Card
          // style={{ margin: " 0px 66px 40px 0px" }}
          className={styles.skillsCard}
        >
          <CardContent>
            <Image src={js} alt="background Image" width={170} height={94} />
          </CardContent>
          <Typography style={{ display: "flex", justifyContent: "center" }}>
            javascript
          </Typography>
        </Card>
        <Card
          // style={{ margin: " 0px 66px 40px 0px" }}
          className={styles.skillsCard}
        >
          <CardContent>
            <Image src={js} alt="background Image" width={170} height={94} />
          </CardContent>
          <Typography style={{ display: "flex", justifyContent: "center" }}>
            javascript
          </Typography>
        </Card>
        <Card
          // style={{ margin: " 0px 66px 40px 0px" }}
          className={styles.skillsCard}
        >
          <CardContent>
            <Image src={js} alt="background Image" width={170} height={94} />
          </CardContent>
          <Typography style={{ display: "flex", justifyContent: "center" }}>
            javascript
          </Typography>
        </Card>
        <Card
          // style={{ margin: " 0px 66px 40px 0px" }}
          className={styles.skillsCard}
        >
          <CardContent>
            <Image src={js} alt="background Image" width={170} height={94} />
          </CardContent>
          <Typography style={{ display: "flex", justifyContent: "center" }}>
            javascript
          </Typography>
        </Card>
        <Card
          // style={{ margin: " 0px 66px 40px 0px" }}
          className={styles.skillsCard}
        >
          <CardContent>
            <Image src={js} alt="background Image" width={170} height={94} />
          </CardContent>
          <Typography style={{ display: "flex", justifyContent: "center" }}>
            javascript
          </Typography>
        </Card>
        <Card
          // style={{ margin: " 0px 66px 40px 0px" }}
          className={styles.skillsCard}
        >
          <CardContent>
            <Image src={js} alt="background Image" width={170} height={94} />
          </CardContent>
          <Typography style={{ display: "flex", justifyContent: "center" }}>
            javascript
          </Typography>
        </Card>
        <Card
          // style={{ margin: " 0px 66px 40px 0px" }}
          className={styles.skillsCard}
        >
          <CardContent>
            <Image src={js} alt="background Image" width={170} height={94} />
          </CardContent>
          <Typography style={{ display: "flex", justifyContent: "center" }}>
            javascript
          </Typography>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Skills;
