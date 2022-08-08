import { CardActionArea, Fade, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { ReactComponent as SearchResultTitle } from "../../images/검색 결과.svg";
import { ReactComponent as BtnMiniReturn } from "../../images/btnmini-return.svg";
import { ReactComponent as BtnMiniRental } from "../../images/btnmini-rental.svg";
import { ReactComponent as BtnMiniSearchPressed } from "../../images/btnmini-search-pressed.svg";
import { ReactComponent as BtnMiniRecommend } from "../../images/btnmini-recommend.svg";
import { ReactComponent as Home } from "../../images/homeBtn.svg";
import { ReactComponent as Back } from "../../images/backBtn.svg";
import { useStyles } from "../../styles";
export default function SearchResult() {
  const { state } = useLocation();
  const styles = useStyles();
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const getBooks = async () => {
    const json = await (
      await fetch(
        `http://i7d211.p.ssafy.io:8081/book/search?keyword=${state.keyword}`
      )
    ).json();
    setBooks(json);
  };
  useEffect(() => {
    getBooks();
  }, []);

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
                <SearchResultTitle className={styles.title} />
                <Back
                  className={styles.TitleButton}
                  onClick={() => navigate(-1)}
                />
              </Box>
              <Box style={{ marginBottom: 50 }}>
                "{state.keyword}"에 대한 검색결과입니다.
              </Box>
              <Box>
                <Grid container>
                  {books.map((book) => (
                    <Grid item xs={6} style={{ marginBottom: 200 }}>
                      <Box
                        onClick={() => navigate(`/book/detail/${book.isbn}`)}
                      >
                        <img
                          src={book.cover}
                          style={{ width: "400px", height: "500px" }}
                          alt="dummy"
                        ></img>
                        <Typography
                          style={{ marginTop: 10 }}
                          component="h3"
                          variant="h3"
                        >
                          {book.title}
                        </Typography>
                      </Box>
                    </Grid>
                  ))}
                </Grid>
              </Box>
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
