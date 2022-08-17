import {
  Box,
  Button,
  CardActionArea,
  Fade,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { useStyles } from "../../styles";

export default function RecommendLoginCheck() {
  const styles = useStyles();
  const navigate = useNavigate();
  return (
    <Fade in={true}>
      <CardActionArea>
        <Box className={[styles.center]}>
          <Header />
          <Box>
            <Box style={{ marginTop: 400 }} className={styles.TitleMessage}>
              Book극성 회원이신가요?
            </Box>
            <Box
              style={{ marginTop: 50, marginBottom: 50 }}
              className={styles.TitleMessage}
            >
              카드를 대주세요!
            </Box>
            <Box className={styles.subTitleMessage}>
              
                대여 이력을 활용해
            </Box>
            <Box style={{marginTop:-50}} className={styles.subTitleMessage}>
                더욱 정확한 도서 추천을 받아보실 수 있습니다!
              </Box>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                height: 400,
                marginBottom: 400,
              }}
            >
              <Button
                onClick={() => {
                  navigate(`/book/recommend/age`);
                }}
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "#233173",
                  borderRadius: 10,
                  height: 300,
                  width: 700,
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: 24,
                }}
              >
                <Box>
                  <Typography sx={{ fontSize: 80 }}>
                    로그인없이 진행
                  </Typography>
                  
                </Box>
              </Button>
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
