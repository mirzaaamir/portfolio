import { Grid } from "@mui/material";
import Image from "next/image";
import React from "react";
import ListMenu from "./ListMenu";
import second from "../../public/Rectangle15.svg";
const Header = () => {
  return (
    <>
      <Grid
        container
        direction="column"
        justifyContent="flex-start"
        alignItems="stretch"
      >
        <Image src={second} alt="background Image" width={1512} height={644}/>
        {/* <Grid item direction="row">
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
        </Grid> */}
      </Grid>
    </>
  );
};

export default Header;
