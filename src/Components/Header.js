import { Grid } from "@mui/material";
import React from "react";
import ListMenu from "./ListMenu";

const Header = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        <Grid item direction="row">
          <ListMenu />
        </Grid>
        <Grid item direction="row" display="flex" justifyContent="center">
          <h1>Mirza Aamir Rasheed</h1>
        </Grid>
        <Grid item direction="row" display="flex" justifyContent="center">
          <h2>Mern Stack Developer</h2>
        </Grid>
        <Grid item direction="row" display="flex" justifyContent="center" columnGap={4}>
       <Grid  > name</Grid>
       <Grid>value</Grid>
        </Grid>
        <Grid item direction="row" display="flex" justifyContent="flex-end">
          Follow me |
        </Grid>
      </Grid>
    </>
  );
};

export default Header;
