import { Box, CardActionArea, Fade, Grid } from "@material-ui/core";
import React from "react";
import { ReactComponent as BtnMiniReturn } from "../../images/btnmini-return.svg";
import { ReactComponent as BtnMiniRental } from "../../images/btnmini-rental.svg";
import { ReactComponent as BtnMiniSearchPressed } from "../../images/btnmini-search-pressed.svg";
import { ReactComponent as BtnMiniRecommend } from "../../images/btnmini-recommend.svg";
import { ReactComponent as SearchTitle } from "../../images/도서 검색.svg";
import { useStyles } from "../../styles";
import { useNavigate } from "react-router-dom";
import VirtualKeyboard from "../../components/keyboard/Keyboard.tsx";

export default function SearchScreen() {
  const styles = useStyles();
  const navigate = useNavigate();
  return (
    <div>
      <Fade in={true}>
        <CardActionArea>
          <Box className={[styles.root, styles.background]}>
            <Box className={[styles.main, styles.center]}>
              <SearchTitle className={styles.title} />
              {/* <Box className={styles.searchbar}>
                <SearchBar />
              </Box> */}
            </Box>
            <Box className={styles.center}>
              <VirtualKeyboard />
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
