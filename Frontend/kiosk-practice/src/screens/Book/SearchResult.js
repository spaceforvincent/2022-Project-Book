import { CardActionArea, Fade, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useStyles } from "../../styles";
import Header from "./Header";
import Footer from "./Footer";
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
            <Box className={[styles.main]}>
              <Box
                style={{
                  width: "100%",
                  position: "fixed",
                  backgroundColor: 'rgba(96, 105, 190, 1)'
                                }}
              >
                <Header />
              <Box
                style={{
                  display: "flex",
                  alignItems: "center",
                  position: "relative",
                  justifyContent: "center",
                  backgroundColor: "rgba(96, 105, 190, 1)", 
                }}
              >
                "{state.keyword}"의 검색결과입니다.
              </Box>
              </Box>

              <Box
                className={[styles.main]}
                style={{
                  marginTop: 600,
                  paddingTop:100,
                  justifyContent:'center',
                  backgroundColor: "rgba(96, 105, 190, 1)",
                }}
              >
                {books ? (
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
                            noWrap
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
                ) : (
                  "표시할 책 내용이 없습니다."
                )}
              </Box>
            </Box>
            <Footer />
          </Box>
        </CardActionArea>
      </Fade>
    </div>
  );
}
