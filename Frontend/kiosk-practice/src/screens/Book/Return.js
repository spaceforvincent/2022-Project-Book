import React from "react";
import { useStyles } from "../../styles";
import { Box, CardActionArea, Fade, Grid } from "@material-ui/core";
import { ReactComponent as MainIcon } from "../../images/Frame 1.svg";
import { ReactComponent as BtnMiniReturnPressed } from "../../images/btnmini-return-pressed.svg";
import { ReactComponent as BtnMiniRental } from "../../images/btnmini-rental.svg";
import { ReactComponent as BtnMiniSearch } from "../../images/btnmini-search.svg";
import { ReactComponent as BtnMiniRecommend } from "../../images/btnmini-recommend.svg";
import { ReactComponent as ReturnTitle } from "../../images/반납.svg";
import { ReactComponent as Home } from "../../images/homeBtn.svg";
import { ReactComponent as Back } from "../../images/backBtn.svg";
import { ReactComponent as BookUp } from "../../images/도서를 올려주세요.svg";
import { useNavigate } from "react-router-dom";
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
            <Box className={styles.center}>
              <Grid container>
                <Grid item sm={12} className={styles.footer}>
                  <BtnMiniRental
                    onClick={() => navigate("/book/borrow")}
                    className={styles.MiniButton}
                  />
                  <BtnMiniReturnPressed className={styles.MiniButton} />
                  <BtnMiniRecommend
                    onClick={() => navigate("/book/recommend")}
                    className={styles.MiniButton}
                  />
                  <BtnMiniSearch
                    onClick={() => navigate("/book/search")}
                    className={styles.MiniButton}
                  />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </CardActionArea>
      </Fade>
    </div>
  );
}
