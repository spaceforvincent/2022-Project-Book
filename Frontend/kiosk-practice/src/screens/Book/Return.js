import React from "react";
import { useStyles } from "../../styles";
import { Box, CardActionArea, Fade, Grid } from "@material-ui/core";
import { ReactComponent as MainIcon } from "../../images/Frame 1.svg";
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
import Header from './Header';
export default function ReturnScreen() {
  const styles = useStyles();
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
              <Box className={[styles.TitleMessage, styles.padding]}>안녕하세요!</Box>
            </Box>
            <Footer />
          </Box>
        </CardActionArea>
      </Fade>

    </div>
  );
}
