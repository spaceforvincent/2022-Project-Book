import { Box, Button, CardActionArea, Fade } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useStyles } from "../../styles";

export default function RecommendResult(props) {
  const styles = useStyles();
  const navigate = useNavigate();
  return (
    <Fade in={true}>
      <CardActionArea>
        {props.emotion === "sad" ? (
          <Box
            style={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: "#2B95AC",
            }}
          >
            <Header />
            <Box style={{ marginTop: 80 }} className={styles.TitleMessage}>
              당신의 감정은 슬픔입니다.
            </Box>
            <Box className={styles.outerWrapperSearch}>
              <Box style={{ marginTop: 100 }} className={styles.wrapperSearch}>
                {props.BookList.map((Book) => (
                  <Box
                    onClick={() => {
                      navigate(`/book/detail/${Book.isbn}`);
                    }}
                    style={{
                      display: "flex",
                      border: "0px 2px 2px 2px solid #ffffff",
                      borderTop: 0,
                    }}
                  >
                    <img
                      src={Book.cover}
                      alt="cover"
                      style={{ margin: 50, width: "250px", height: "350px" }}
                    ></img>
                    <Box
                      style={{
                        display: "flex",
                        color: "white",
                        fontSize: 60,
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      {Book.title}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box>
              <Footer />
            </Box>
          </Box>
        ) : props.emotion === "angry" ? (
          <Box
            style={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: "#AC2B2B",
            }}
          >
            <Header />
            <Box style={{ marginTop: 80 }} className={styles.TitleMessage}>
              당신의 감정은 분노입니다.
            </Box>
            <Box className={styles.outerWrapperSearch}>
              <Box style={{ marginTop: 100 }} className={styles.wrapperSearch}>
                {props.BookList.map((Book) => (
                  <Box
                    onClick={() => {
                      navigate(`/book/detail/${Book.isbn}`);
                    }}
                    style={{
                      display: "flex",
                      border: "0px 2px 2px 2px solid #ffffff",
                      borderTop: 0,
                    }}
                  >
                    <img
                      src={Book.cover}
                      alt="cover"
                      style={{ margin: 50, width: "250px", height: "350px" }}
                    ></img>
                    <Box
                      style={{
                        display: "flex",
                        color: "white",
                        fontSize: 60,
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      {Book.title}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box>
              <Footer />
            </Box>
          </Box>
        ) : props.emotion === "disgust" ? (
          <Box
            style={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: "#AAAC2B",
            }}
          >
            <Header />
            <Box style={{ marginTop: 80 }} className={styles.TitleMessage}>
              당신의 감정은 역겨움입니다.
            </Box>
            <Box className={styles.outerWrapperSearch}>
              <Box style={{ marginTop: 100 }} className={styles.wrapperSearch}>
                {props.BookList.map((Book) => (
                  <Box
                    onClick={() => {
                      navigate(`/book/detail/${Book.isbn}`);
                    }}
                    style={{
                      display: "flex",
                      border: "0px 2px 2px 2px solid #ffffff",
                      borderTop: 0,
                    }}
                  >
                    <img
                      src={Book.cover}
                      alt="cover"
                      style={{ margin: 50, width: "250px", height: "350px" }}
                    ></img>
                    <Box
                      style={{
                        display: "flex",
                        color: "white",
                        fontSize: 60,
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      {Book.title}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box>
              <Footer />
            </Box>
          </Box>
        ) : props.emotion === "happy" ? (
          <Box
            style={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: "#AAAC2B",
            }}
          >
            <Header />
            <Box style={{ marginTop: 80 }} className={styles.TitleMessage}>
              당신의 감정은 행복함입니다.
            </Box>
            <Box className={styles.outerWrapperSearch}>
              <Box style={{ marginTop: 100 }} className={styles.wrapperSearch}>
                {props.BookList.map((Book) => (
                  <Box
                    onClick={() => {
                      navigate(`/book/detail/${Book.isbn}`);
                    }}
                    style={{
                      display: "flex",
                      border: "0px 2px 2px 2px solid #ffffff",
                      borderTop: 0,
                    }}
                  >
                    <img
                      src={Book.cover}
                      alt="cover"
                      style={{ margin: 50, width: "250px", height: "350px" }}
                    ></img>
                    <Box
                      style={{
                        display: "flex",
                        color: "white",
                        fontSize: 60,
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      {Book.title}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box>
              <Footer />
            </Box>
          </Box>
        ) : props.emotion === "fear" ? (
          <Box
            style={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: "#AAAC2B",
            }}
          >
            <Header />
            <Box style={{ marginTop: 80 }} className={styles.TitleMessage}>
              당신의 감정은 두려움입니다.
            </Box>
            <Box className={styles.outerWrapperSearch}>
              <Box style={{ marginTop: 100 }} className={styles.wrapperSearch}>
                {props.BookList.map((Book) => (
                  <Box
                    onClick={() => {
                      navigate(`/book/detail/${Book.isbn}`);
                    }}
                    style={{
                      display: "flex",
                      border: "0px 2px 2px 2px solid #ffffff",
                      borderTop: 0,
                    }}
                  >
                    <img
                      src={Book.cover}
                      alt="cover"
                      style={{ margin: 50, width: "250px", height: "350px" }}
                    ></img>
                    <Box
                      style={{
                        display: "flex",
                        color: "white",
                        fontSize: 60,
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      {Book.title}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box>
              <Footer />
            </Box>
          </Box>
        ) : props.emotion === "surprise" ? (
          <Box
            style={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: "#AAAC2B",
            }}
          >
            <Header />
            <Box style={{ marginTop: 80 }} className={styles.TitleMessage}>
              당신의 감정은 놀라움입니다.
            </Box>
            <Box className={styles.outerWrapperSearch}>
              <Box style={{ marginTop: 100 }} className={styles.wrapperSearch}>
                {props.BookList.map((Book) => (
                  <Box
                    onClick={() => {
                      navigate(`/book/detail/${Book.isbn}`);
                    }}
                    style={{
                      display: "flex",
                      border: "0px 2px 2px 2px solid #ffffff",
                      borderTop: 0,
                    }}
                  >
                    <img
                      src={Book.cover}
                      alt="cover"
                      style={{ margin: 50, width: "250px", height: "350px" }}
                    ></img>
                    <Box
                      style={{
                        display: "flex",
                        color: "white",
                        fontSize: 60,
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      {Book.title}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box>
              <Footer />
            </Box>
          </Box>
        ) : props.emotion === "neutral" ? (
          <Box
            style={{
              justifyContent: "center",
              alignItems: "center",
              textAlign: "center",
              backgroundColor: "#AAAC2B",
            }}
          >
            <Header />
            <Box style={{ marginTop: 80 }} className={styles.TitleMessage}>
              당신의 감정을 모르겠습니다.
            </Box>
            <Box className={styles.outerWrapperSearch}>
              <Box style={{ marginTop: 100 }} className={styles.wrapperSearch}>
                {props.BookList.map((Book) => (
                  <Box
                    onClick={() => {
                      navigate(`/book/detail/${Book.isbn}`);
                    }}
                    style={{
                      display: "flex",
                      border: "0px 2px 2px 2px solid #ffffff",
                      borderTop: 0,
                    }}
                  >
                    <img
                      src={Book.cover}
                      alt="cover"
                      style={{ margin: 50, width: "250px", height: "350px" }}
                    ></img>
                    <Box
                      style={{
                        display: "flex",
                        color: "white",
                        fontSize: 60,
                        alignItems: "center",
                        justifyContent: "center",
                        marginLeft: "auto",
                        marginRight: "auto",
                      }}
                    >
                      {Book.title}
                    </Box>
                  </Box>
                ))}
              </Box>
            </Box>
            <Box>
              <Footer />
            </Box>
          </Box>
        ) : (
          <></>
        )}
      </CardActionArea>
    </Fade>
  );
}
