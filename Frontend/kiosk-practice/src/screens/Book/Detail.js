import { CardActionArea, Fade, Modal, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { ReactComponent as ShowReview } from "../../images/리뷰 보기.svg";
import { ReactComponent as BookLocation } from "../../images/책의 위치.svg";
import { ReactComponent as Reservation } from "../../images/대여 예약.svg";
import { ReactComponent as BorrowStatus } from "../../images/대여 현황.svg";
import { ReactComponent as RelatedBooks } from "../../images/연관 도서.svg";
import { ReactComponent as Star0 } from "../../images/star0_day.svg";
import { ReactComponent as Star05 } from "../../images/star0.5_day.svg";
import { ReactComponent as Star1 } from "../../images/star1_day.svg";
import { ReactComponent as Star15 } from "../../images/star1.5_day.svg";
import { ReactComponent as Star2 } from "../../images/star2_day.svg";
import { ReactComponent as Star25 } from "../../images/star2.5_day.svg";
import { ReactComponent as Star3 } from "../../images/star3_day.svg";
import { ReactComponent as Star35 } from "../../images/star3.5_day.svg";
import { ReactComponent as Star4 } from "../../images/star4_day.svg";
import { ReactComponent as Star45 } from "../../images/star4.5_day.svg";
import { ReactComponent as Star5 } from "../../images/star5_day.svg";
import { ReactComponent as Location } from "../../images/Location.svg";
import { useStyles } from "../../styles";
import Header from "./Header";
import Footer from "./Footer";
export default function Detail() {
  const styles = useStyles();
  const url = window.location.pathname;
  const regex = /[0-9]/g; //숫자만 추출
  const [onReview, setReview] = useState(false);
  const [onLocation, setLocation] = useState(false);
  const [book, setBook] = useState([]);
  const getBook = async () => {
    const json = await (
      await fetch(
        `http://i7d211.p.ssafy.io:8081/book/detail?ISBN=${url
          .match(regex)
          .join("")}`
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
          <Box className={[styles.center]}>
            <Header />
            <Box container className={styles.detailUpper}>
              <img
                style={{ width: "430px", height: "660px" }}
                src={book.cover}
                alt="cover"
              ></img>
              <Box>
                <Typography
                  component="h3"
                  variant="h3"
                  style={{
                    color: "#ffffff",
                    marginLeft: 40,
                    marginBottom: 50,
                  }}
                >
                  {onReview
                    ? book.reviews.length > 0
                      ? book.reviews.map((review) => (
                          <Box>
                            <Box style={{ display: "flex", height: 100 }}>
                              {review.star === 5 ? (
                                <Star5 />
                              ) : review.star === 4.5 ? (
                                <Star45 />
                              ) : review.star === 4 ? (
                                <Star4 />
                              ) : review.star === 3.5 ? (
                                <Star35 />
                              ) : review.star === 3 ? (
                                <Star3 />
                              ) : review.star === 2.5 ? (
                                <Star25 />
                              ) : review.star === 2 ? (
                                <Star2 />
                              ) : review.star === 1.5 ? (
                                <Star15 />
                              ) : review.star === 1 ? (
                                <Star1 />
                              ) : review.star === 0.5 ? (
                                <Star05 />
                              ) : (
                                <Star0 />
                              )}
                              <Typography
                                style={{
                                  fontSize: 40,
                                  marginLeft: "auto",
                                  marginRight: "auto",
                                }}
                              >
                                {review.story}
                              </Typography>
                              <Typography
                                style={{
                                  fontSize: 40,
                                  marginLeft: "auto",
                                  marginRight: "auto",
                                }}
                              >
                                {review.id} {review.created_date.slice(0, 10)}
                              </Typography>
                            </Box>
                          </Box>
                        ))
                      : "등록된 리뷰가 없습니다."
                    : book.content
                    ? book.content
                    : "표시할 책 내용이 없습니다."}
                </Typography>
                <Box style={{ marginLeft: 30 }}>
                  <ShowReview
                    onClick={() => {
                      setReview(!onReview);
                    }}
                    className={styles.detailUpperButton}
                  />
                  <BookLocation
                    onClick={() => {
                      setLocation(true);
                    }}
                    className={styles.detailUpperButton}
                  />

                  <Modal
                    open={onLocation}
                    onClose={() => {
                      setLocation(false);
                    }}
                  >
                    <Box className={styles.modal}>
                      <Location />
                    </Box>
                  </Modal>
                  <Reservation className={styles.detailUpperButton} />
                </Box>
              </Box>
            </Box>
            <Box
              style={{
                display: "flex",
                justifyContent: "end",
                alignItems: "center",
                marginTop: -200,
                marginRight: 50,
              }}
            >
              <BorrowStatus style={{ alignItems: "center" }} />
              <img
                className={styles.detailBorrowStatus}
                src={book.cover}
                style={{ width: 125, height: 200 }}
                alt="dummy"
              ></img>
              <img
                className={styles.detailBorrowStatus}
                style={{ width: 125, height: 200 }}
                src={book.cover}
                alt="dummy"
              ></img>
              <img
                className={styles.detailBorrowStatus}
                src={book.cover}
                style={{ width: 125, height: 200 }}
                alt="dummy"
              ></img>
              <img
                className={styles.detailBorrowStatus}
                src={book.cover}
                style={{ width: 125, height: 200 }}
                alt="dummy"
              ></img>
            </Box>
            <Box style={{ display: "flex", justifyContent: "start" }}>
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
