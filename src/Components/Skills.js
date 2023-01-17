import { Grid, Typography } from '@mui/material'
import React from 'react'
import styles from "@/styles/Home.module.css";
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
      <Typography variant="h1" component="h2">
       Skills
      </Typography>
    </Grid>
  )
}

export default Skills