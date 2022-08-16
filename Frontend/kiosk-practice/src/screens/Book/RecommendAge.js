import React, { useEffect, useState } from "react";
import { useStyles } from "../../styles";
import { Box, CardActionArea, Fade } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function RecommendScreen() {
  const styles = useStyles();
  const navigate = useNavigate();
  const [Age,setAge] = useState(0);
  const [Books, setBooks] = useState([]);
  const getBooks = async () => {
    const json = await (
      await fetch(`http://i7d211.p.ssafy.io:8081/book/ageRank`)
    ).json();
    setBooks(json);
  };

  useEffect(() => {
    getBooks();
  }, []);

  return (
    <Fade in={true}>
      <CardActionArea>
        <Box className={[styles.center]}>
          <Header />
          <Box
            className={styles.subTitleMessage}
            style={{ display: "flex", justifyContent: "space-evenly" }}
          >
            <Button
              style={{ backgroundColor: "navy", fontSize: 50, color: "white" }}
              onClick={() => {setAge(0)}}
            >
              유아
            </Button>
            <Button
              style={{ backgroundColor: "navy", fontSize: 50, color: "white" }}
              onClick={() => {setAge(10)}}
            >
              10대
            </Button>
            <Button
              style={{ backgroundColor: "navy", fontSize: 50, color: "white" }}
              onClick={() => {setAge(20)}}
            >
              20대
            </Button>
            <Button
              style={{ backgroundColor: "navy", fontSize: 50, color: "white" }}
              onClick={() => {setAge(30)}}
            >
              30대
            </Button>
            <Button
              style={{ backgroundColor: "navy", fontSize: 50, color: "white" }}
              onClick={() => {setAge(40)}}
            >
              40대
            </Button>
            <Button
              style={{ backgroundColor: "navy", fontSize: 50, color: "white" }}
              onClick={() => {setAge(50)}}
            >
              50대
            </Button>
            
          </Box>
          <Box className={styles.outerWrapperSearch}>
            <Box style={{ marginTop: -50 }} className={styles.wrapperSearch}>
              {Age === 0 ? Books.zero &&
                Books.zero.map((Book) => (
                  <Box
                    onClick={() => {
                      navigate(`/book/detail/${Book.isbn}`);
                    }}
                    style={{ display: "flex", border:'2px solid #ffffff' }}
                  >
                    <img
                      src={Book.cover}
                      alt="cover"
                      style={{ margin: 50, width: "250px", height: "350px" }}
                    ></img>
                    <Box
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Typography
                        style={{ color: "white", margin: 50, marginTop: 100 }}
                        variant="h5
                    "
                        component="h5"
                      >
                        {Book.title}
                      </Typography>
                    </Box>
                    
                  </Box>
                )) : Age === 10 ? Books.ten &&
                Books.ten.map((Book) => (
                  <Box
                    onClick={() => {
                      navigate(`/book/detail/${Book.isbn}`);
                    }}
                    style={{ display: "flex", border:'2px solid #ffffff' }}
                  >
                    <img
                      src={Book.cover}
                      alt="cover"
                      style={{ margin: 50, width: "250px", height: "350px" }}
                    ></img>
                    <Box
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Typography
                        style={{ color: "white", margin: 50, marginTop: 100 }}
                        variant="h5
                    "
                        component="h5"
                      >
                        {Book.title}
                      </Typography>
                    </Box>
                    
                  </Box>
                )) : Age === 20 ? Books.twenty &&
                Books.twenty.map((Book) => (
                  <Box
                    onClick={() => {
                      navigate(`/book/detail/${Book.isbn}`);
                    }}
                    style={{ display: "flex", border:'2px solid #ffffff' }}
                  >
                    <img
                      src={Book.cover}
                      alt="cover"
                      style={{ margin: 50, width: "250px", height: "350px" }}
                    ></img>
                    <Box
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Typography
                        style={{ color: "white", margin: 50, marginTop: 100 }}
                        variant="h5
                    "
                        component="h5"
                      >
                        {Book.title}
                      </Typography>
                    </Box>
                    
                  </Box>
                )) : Age===30 ? Books.thirty &&
                Books.thirty.map((Book) => (
                  <Box
                    onClick={() => {
                      navigate(`/book/detail/${Book.isbn}`);
                    }}
                    style={{ display: "flex", border:'2px solid #ffffff' }}
                  >
                    <img
                      src={Book.cover}
                      alt="cover"
                      style={{ margin: 50, width: "250px", height: "350px" }}
                    ></img>
                    <Box
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Typography
                        style={{ color: "white", margin: 50, marginTop: 100 }}
                        variant="h5
                    "
                        component="h5"
                      >
                        {Book.title}
                      </Typography>
                    </Box>
                    
                  </Box>
                )) : Age===40 ? Books.forty &&
                Books.forty.map((Book) => (
                  <Box
                    onClick={() => {
                      navigate(`/book/detail/${Book.isbn}`);
                    }}
                    style={{ display: "flex", border:'2px solid #ffffff' }}
                  >
                    <img
                      src={Book.cover}
                      alt="cover"
                      style={{ margin: 50, width: "250px", height: "350px" }}
                    ></img>
                    <Box
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Typography
                        style={{ color: "white", margin: 50, marginTop: 100 }}
                        variant="h5
                    "
                        component="h5"
                      >
                        {Book.title}
                      </Typography>
                    </Box>
                    
                  </Box>
                )) : Age===50 ? Books.fifty &&
                Books.fifty.map((Book) => (
                  <Box
                    onClick={() => {
                      navigate(`/book/detail/${Book.isbn}`);
                    }}
                    style={{ display: "flex", border:'2px solid #ffffff' }}
                  >
                    <img
                      src={Book.cover}
                      alt="cover"
                      style={{ margin: 50, width: "250px", height: "350px" }}
                    ></img>
                    <Box
                      style={{ alignItems: "center", justifyContent: "center" }}
                    >
                      <Typography
                        style={{ color: "white", margin: 50, marginTop: 100 }}
                        variant="h5
                    "
                        component="h5"
                      >
                        {Book.title}
                      </Typography>
                    </Box>
                    
                  </Box>
                )) : <></>}
            </Box>
          </Box>
          <Box>
            <Footer />
          </Box>
        </Box>
      </CardActionArea>
    </Fade>
  );
}
