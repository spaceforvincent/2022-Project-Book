import { CardActionArea, Fade, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ShowReview } from "../../images/리뷰 보기.svg";
import { ReactComponent as BookLocation } from "../../images/책의 위치.svg";
import { ReactComponent as Reservation } from "../../images/대여 예약.svg";
import { ReactComponent as BorrowStatus } from "../../images/대여 현황.svg";
import { ReactComponent as RelatedBooks } from "../../images/연관 도서.svg";
import { useStyles } from "../../styles";
import Header from "./Header";
import Footer from "./Footer";
export default function Detail() {
  const styles = useStyles();
  const url = window.location.pathname
  const regex = /[0-9]/g //숫자만 추출
  const navigate = useNavigate();
  const [book, setBook] = useState([]);
  const getBook = async () => {
    const json = await (
      await fetch(
        `http://i7d211.p.ssafy.io:8081/book/detail?ISBN=${url.match(regex).join('')}`
      )
    ).json();
    setBook(json);
  };
  useEffect(() => {
    getBook();
  }, []);
  return (
    <div>
      <Fade in={true}>
        <CardActionArea>
          <Box className={[styles.root, styles.background]}>
            <Box className={[styles.main, styles.center]}>
              <Header />
              <Box container className={styles.detailUpper}>
                <img
                style={{width:'430px', height:'660px'}}
                  src={book.cover}
                  alt="dummy"
                ></img>
                <Box>
                  <Typography component="h3" variant="h3" style={{marginBottom:100}}>
                    {book.content ? book.content : "표시할 책 내용이 없습니다."}
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
                  src={book.cover}
                  style={{width:125, height:200}}
                  alt="dummy"
                ></img>
                <img
                  className={styles.detailBorrowStatus}
                  style={{width:125, height:200}}
                  src={book.cover}
                  alt="dummy"
                ></img>
                <img
                  className={styles.detailBorrowStatus}
                  src={book.cover}
                  style={{width:125, height:200}}
                  alt="dummy"
                ></img>
                <img
                  className={styles.detailBorrowStatus}
                  src={book.cover}
                  style={{width:125, height:200}}
                  alt="dummy"
                ></img>
              </Box>
            </Box>
            <Box style={{backgroundColor:"rgba(15, 29, 160, 0.65)"}}>
            <RelatedBooks />
            </Box>
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

            <Footer />
          </Box>
        </CardActionArea>
      </Fade>
    </div>
  );
}
