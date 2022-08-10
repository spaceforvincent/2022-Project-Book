import React, { useState } from "react";
import { useStyles } from "../../styles";
import { Box, CardActionArea, Fade } from "@material-ui/core";
import Footer from "./Footer";
import Header from "./Header";
import Borrow1 from "./Borrow1";
import Borrow2 from "./Borrow2";
import "./All.css";
export default function LendScreen() {
  const styles = useStyles();
  const state = useState();
  return (
      <Fade in={true}>
        <CardActionArea>
          <Box className={styles.root}>
          {state === "/book/return" ? <Borrow2></Borrow2>:<Borrow1></Borrow1>}  
          </Box>
        </CardActionArea>
      </Fade>
  );
}
