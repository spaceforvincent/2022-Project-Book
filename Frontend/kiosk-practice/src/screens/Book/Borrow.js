import React, { useState } from "react";
import { useStyles } from "../../styles";
import { Box, CardActionArea, Fade } from "@material-ui/core";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import Borrow1 from "./Borrow1";
import Borrow2 from "./Borrow2";
import Borrow3 from "./Borrow3";

export default function LendScreen() {
  const styles = useStyles();
  const state = useState();
  return (
      <Fade in={true}>
        <CardActionArea>
          <Borrow2></Borrow2>
        </CardActionArea>
      </Fade>
  );
}
