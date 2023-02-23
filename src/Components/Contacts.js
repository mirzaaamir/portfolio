import { Grid, Typography } from "@mui/material";
import React from "react";
import styles from "@/styles/Home.module.css";
import { Box } from "@mui/system";
const Contacts = () => {
  return (
    <Grid
      className={styles.services}
      columnGap={{ sm: 4, md: 6, lg: 6, xl: 8 }}
      rowGap={4}
      columns={{ sm: 6, md: 8, lg: 8, xl: 16 }}
      container
      direction="row"
      justifyContent="flex-start"
      alignItems="stretch"
    >
      <Grid item>
        {" "}
        <Typography variant="h1" component="h2">
          Get In Touch
        </Typography>
        <Box>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Typography gridColumn="span 2">Phone::</Typography>
            <Typography gridColumn="span 3">0307-6373865</Typography>
          </Box>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Typography gridColumn="span 2">Skype::</Typography>
            <Typography gridColumn="span 3">*************</Typography>
          </Box>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Typography gridColumn="span 2">Email:</Typography>
            <Typography gridColumn="span 3">mirzaaamir157@gmail.com</Typography>
          </Box>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Typography gridColumn="span 2">Facebook:</Typography>
            <Typography gridColumn="span 3">26</Typography>
          </Box>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Typography gridColumn="span 2">Linkedin:</Typography>
            <Typography gridColumn="span 3">26</Typography>
          </Box>
          <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>
            <Typography gridColumn="span 2">Github:</Typography>
            <Typography gridColumn="span 3">26</Typography>
          </Box>
        </Box>
      </Grid>
      <Grid item>
        <Box>
          <Box display="grid" gridAutoRows="repeat(12,1fr)" gap={2}>
            <Typography gridColumn="span 2">or just write me a letter here_</Typography>
            <Typography gridColumn="span 3">form</Typography>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Contacts;
