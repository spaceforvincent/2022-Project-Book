import React from "react";
import { useStyles } from "../../styles";
import { Box, CardActionArea, Fade } from "@material-ui/core";
import Footer from "./Footer";
import Header from "./Header";
import Borrow1 from "./Borrow1";
import "./All.css";
export default function LendScreen() {
  const styles = useStyles();
  return (
    <div>
      <Fade in={true}>
        <CardActionArea>
          <Box className={styles.root}>
            <Header />
            <Borrow1 />
            <Footer />
          </Box>
        </CardActionArea>
      </Fade>
    </div>
  );
}
