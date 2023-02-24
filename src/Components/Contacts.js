import { Button, Grid, TextField, Typography } from "@mui/material";
import React from "react";
import styles from "@/styles/Home.module.css";
import { Box } from "@mui/system";
const Contacts = () => {
  return (
    <Grid
      className={styles.contacts}
      columnGap={{ sm: 4, md: 5, lg: 5, xl: 5 }}
      rowGap={2}
      columns={{ sm: 5, md: 5, lg: 5, xl: 5 }}
      container
    >
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        <Grid container xs={12} sm={6}>
          <Box display="grid" gridTemplateColumns="1fr 2fr" gridAutoRows="50px">
            <Typography>phone</Typography>
            <Typography>0307-6373865</Typography>
            <Typography>Skype:</Typography>
            <Typography>*************</Typography>
            <Typography>Email:</Typography>
            <Typography>mirzaaamir157@gmail.com</Typography>
            <Typography>Linkedin:</Typography>
            <Typography>mirzaaamir</Typography>
            <Typography>Github:</Typography>
            <Typography>mirzaaamir</Typography>
          </Box>
        </Grid>

        <Grid container xs={12} sm={6}>
          <Box
            display="grid"
            gridTemplateColumns="2fr"
            gap={2}
            marginTop="24px"
            alignItems="stretch"
            sx={{
              width: "80%",
            }}
          >
            <Typography>
              or just write me a letter here_ rite me a letter here_
            </Typography>
            <TextField
              label="name"
              type="text"
              variant="outlined"
              color="primary"
              s
            />
            <TextField label="email" variant="standard" type="email" />
            <TextField
              id="outlined-multiline-flexible"
              label="Message"
              multiline
              rows={4}
              variant="filled"
              fullWidth="true"
            />
            <Button color="primary" variant="outlined">
              Send
            </Button>
            <Button color="primary" variant="contained">
              Send
            </Button>{" "}
            <Button color="primary" variant="Text">
              Send
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Box sx={{width:"-webkit-fill-available"}}>
        <Typography display="flex" justifyContent="center">
          © 2023 Mirza Aamir Rasheed, All Rights Reserved,
        </Typography>
      </Box>
      {/* <Grid item>
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
            <Typography gridColumn="span 2">
              or just write me a letter here_
            </Typography>
            <Box display="grid" gridTemplateRows="repeat(12,1fr)" gap={2}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
              />
             
            </Box>
          </Box>
        </Box>
      </Grid> */}
    </Grid>
  );
};

export default Contacts;
