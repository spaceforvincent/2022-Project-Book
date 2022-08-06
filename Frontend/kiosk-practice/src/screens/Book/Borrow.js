import React from "react";
import { useStyles } from "../../styles";
import { Box, CardActionArea, Fade, Grid } from "@material-ui/core";
import { ReactComponent as MainIcon } from "../../images/Frame 1.svg";

import { ReactComponent as BookUp } from "../../images/도서를 올려주세요.svg";

import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';

export default function LendScreen() {
  const styles = useStyles();
  const navigate = useNavigate();
  return (
    <div>
      <Fade in={true}>
        <CardActionArea>
          
          <Box className={[styles.root, styles.background]}>
          <Header />
            <Box className={[styles.main, styles.center]}>
              <MainIcon className={styles.largeLogo}></MainIcon>
            </Box>
            <Box className={styles.center}>
              <BookUp className={[styles.ment]}></BookUp>
            </Box>
          </Box>
        </CardActionArea>
      </Fade>
      <Footer />
    </div>
  );
}
