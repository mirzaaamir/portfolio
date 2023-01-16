import { Button, Grid } from "@mui/material";
import React from "react";

const ListMenu = () => {
  const list = ["Hello_", "Services", "Skills", "Projects", "Blogs", "Contact"];
  return (
    <Grid container columnSpacing={6}>
      <Grid item xs={8} sm={8} lg={8} xl={8}>
        <Grid container justifyContent="space-between">
          {list.map((item, index) => {
            return <h1 key={index}>{item}</h1>;
          })}
        </Grid>
      </Grid>
      <Grid item xs={4} sm={4} lg={4} xl={4} justifyContent="flex-end">
        <Button>Hire Me</Button>
      </Grid>
    </Grid>
  );
};

export default ListMenu;
