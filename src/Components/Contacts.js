import { Grid, Typography } from '@mui/material'
import React from 'react'
import styles from "@/styles/Home.module.css";
const Contacts = () => {
  return (
   
    <Grid
    className={styles.services}
    container
    direction="column"
    justifyContent="flex-start"
    alignItems="stretch"
  >
    {/* There is already an h1 in the page, let's not duplicate it. */}
    <Typography variant="h1" component="h2">
      Get In Touch
    </Typography>
  </Grid>
  )
}

export default Contacts