import React from "react";
import { useStyles } from "../../styles";
import { Box, CardActionArea, Fade, Grid } from "@material-ui/core";
import { ReactComponent as MainIcon } from "../../images/Frame 1.svg";
import { ReactComponent as ReturnTitle } from "../../images/반납.svg";
import { ReactComponent as Home } from "../../images/homeBtn.svg";
import { ReactComponent as Back } from "../../images/backBtn.svg";
import { ReactComponent as BookUp } from "../../images/도서를 올려주세요.svg";
import { useNavigate } from "react-router-dom";
import Footer from './Footer';
export default function ReturnScreen() {
  const styles = useStyles();
  const navigate = useNavigate();
  return (
    <div>
      <Fade in={true}>
        <CardActionArea>
          <Box className={[styles.root, styles.background]}>
            <Box className={[styles.main, styles.center]}>
              <Box>
                <Home
                  className={styles.TitleButton}
                  onClick={() => navigate("/book/main")}
                />
                <ReturnTitle className={styles.title}></ReturnTitle>
                <Back
                  className={styles.TitleButton}
                  onClick={() => navigate(-1)}
                />
              </Box>
              <MainIcon className={styles.largeLogo}></MainIcon>
            </Box>
            <Box className={styles.center}>
              <BookUp className={[styles.ment]}></BookUp>
            </Box>
          </Box>
        </CardActionArea>
      </Fade>
      <Footer/>
    </div>
  );
}
