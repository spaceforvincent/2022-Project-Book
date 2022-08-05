import { CardActionArea, Fade, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SearchResultTitle } from "../../images/검색 결과.svg";
import { ReactComponent as BtnMiniReturn } from "../../images/btnmini-return.svg";
import { ReactComponent as BtnMiniRental } from "../../images/btnmini-rental.svg";
import { ReactComponent as BtnMiniSearchPressed } from "../../images/btnmini-search-pressed.svg";
import { ReactComponent as BtnMiniRecommend } from "../../images/btnmini-recommend.svg";
import { ReactComponent as Home } from "../../images/homeBtn.svg";
import { ReactComponent as Back } from "../../images/backBtn.svg";
import { useStyles } from "../../styles";
export default function SearchResult() {
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
                  onClick={() => navigate("/book/main")} />
              <SearchResultTitle className={styles.title} />
              <Back
                  className={styles.TitleButton}
                  onClick={() => navigate(-1)} />
                </Box>
            <Grid container>
              <Grid item xs={6} style={{marginBottom:200}}>
                <img
                  src="https://dummyimage.com/430x600/000/fff"
                  alt="dummy"
                >
                </img>
                <Typography style={{marginTop:10}} component="h3" variant="h3"> 책 제목 </Typography>
                </Grid>
              <Grid item xs={6}>
                <img
                  src="https://dummyimage.com/430x600/000/fff"
                  alt="dummy"
                ></img>
                <Typography style={{marginTop:10}} component="h3" variant="h3"> 책 제목 </Typography>
                </Grid>
              <Grid item xs={6}>
                <img
                  src="https://dummyimage.com/430x600/000/fff"
                  alt="dummy"
                ></img>
                <Typography style={{marginTop:10}} component="h3" variant="h3"> 책 제목 </Typography>
                </Grid>
              <Grid item xs={6}>
                <img
                  src="https://dummyimage.com/430x600/000/fff"
                  alt="dummy"
                ></img>
                <Typography style={{marginTop:10}} component="h3" variant="h3"> 책 제목 </Typography>
                </Grid>
            </Grid>
            </Box>
            <Box className={styles.center}>
              <Grid container>
                <Grid item sm={12}>
                  <BtnMiniRental
                    onClick={() => navigate("/book/borrow")}
                    className={styles.MiniButton}
                  />
                  <BtnMiniReturn
                    onClick={() => navigate("/book/return")}
                    className={styles.MiniButton}
                  />
                  <BtnMiniRecommend
                    onClick={() => navigate("/book/recommend")}
                    className={styles.MiniButton}
                  />
                  <BtnMiniSearchPressed className={styles.MiniButton} />
                </Grid>
              </Grid>
            </Box>
          </Box>
        </CardActionArea>
      </Fade>
    </div>
  );
}
