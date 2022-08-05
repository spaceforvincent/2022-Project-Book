import { CardActionArea, Fade, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SearchResultTitle } from "../../images/검색 결과.svg";
import { ReactComponent as ShowReview } from "../../images/리뷰 보기.svg";
import { ReactComponent as BookLocation } from "../../images/책의 위치.svg";
import { ReactComponent as Reservation } from "../../images/대여 예약.svg";
import { ReactComponent as BorrowStatus } from "../../images/대여 현황.svg";
import { ReactComponent as RelatedBooks } from "../../images/연관 도서.svg";
import { ReactComponent as BtnMiniReturn } from "../../images/btnmini-return.svg";
import { ReactComponent as BtnMiniRental } from "../../images/btnmini-rental.svg";
import { ReactComponent as BtnMiniSearch } from "../../images/btnmini-search.svg";
import { ReactComponent as BtnMiniRecommend } from "../../images/btnmini-recommend.svg";
import { ReactComponent as Home } from "../../images/homeBtn.svg";
import { ReactComponent as Back } from "../../images/backBtn.svg";
import { useStyles } from "../../styles";
export default function Detail() {
  const styles = useStyles();
  const navigate = useNavigate();
  return (
    <div>
      <Fade in={true}>
        <CardActionArea>
          <Box className={[styles.root, styles.background]}>
            <Box className={[styles.main, styles.center]}>
              <Box style={{marginBottom:100}}>
                <Home
                  className={styles.TitleButton}
                  onClick={() => navigate("/book/main")}
                />
                <SearchResultTitle className={styles.title} />
                <Back
                  className={styles.TitleButton}
                  onClick={() => navigate(-1)}
                />
              </Box>
              <Box container className={styles.detailUpper}>
                <img
                  src="https://dummyimage.com/430x600/000/fff"
                  alt="dummy"
                ></img>
                <Box>
                  <Typography component="h3" variant="h3">
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged.
                  </Typography>
                  <Box>
                    <ShowReview className={styles.detailUpperButton} />
                    <BookLocation className={styles.detailUpperButton} />
                    <Reservation className={styles.detailUpperButton} />
                  </Box>
                </Box>
              </Box>
              <Box>
                <BorrowStatus
                  style={{ marginLeft: 350, justifyContent: "end" }}
                />
                <img
                  className={styles.detailBorrowStatus}
                  src="https://dummyimage.com/125x200/000/fff"
                  alt="dummy"
                ></img>
                <img
                  className={styles.detailBorrowStatus}
                  src="https://dummyimage.com/125x200/000/fff"
                  alt="dummy"
                ></img>
                <img
                  className={styles.detailBorrowStatus}
                  src="https://dummyimage.com/125x200/000/fff"
                  alt="dummy"
                ></img>
                <img
                  className={styles.detailBorrowStatus}
                  src="https://dummyimage.com/125x200/000/fff"
                  alt="dummy"
                ></img>
              </Box>
            </Box>
            <RelatedBooks />
            <Box className={styles.RelatedBooks}>
              <img
                className={styles.RelatedBookList}
                src="https://dummyimage.com/350x500/000/fff"
                alt="dummy"
              ></img>
              <img
                className={styles.RelatedBookList}
                src="https://dummyimage.com/350x500/000/fff"
                alt="dummy"
              ></img>
              <img
                className={styles.RelatedBookList}
                src="https://dummyimage.com/350x500/000/fff"
                alt="dummy"
              ></img>
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
