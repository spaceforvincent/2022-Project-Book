import React, {useEffect, useState} from "react";
import { useStyles } from "../../styles";
import { Box, CardActionArea, Fade } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import emotions from "../../images/emotions.png";
import agegroup from "../../images/agegroup.png";

import axios from 'axios';
import io from "socket.io-client";

export default function RecommendScreen(props) {

  const styles = useStyles();
  const navigate = useNavigate();


  const socket = io.connect("http://localhost:9994");

  const [sockets, setSockets] = useState([]);

  const sendMsg = (answer) => {
    console.log(answer);
    socket.emit("inputdata", answer);
  };

  const getFace = (facedata) => {
    console.log(facedata)
    axios
        .get("http://i7d211.p.ssafy.io:8081/book/emotion", {
            params: {
                emotion: facedata
            }
        })
        .then(function (response) {
            props.setFaces(response.data)
            console.log(props.faces)
            return
        })
    }

  useEffect(() => {
    socket.on('faceoutput', (data) => {
        console.log(data)
        getFace(data)
    })
    return() => {
        socket.close()
    }
  }, [sockets]);

  return (
    <Fade in={true}>
      <CardActionArea>

        <Box className={[styles.center]}>
          <Header />
          <Box>
            <Typography
              variant="h3"
              component="h3"
              style={{ marginTop: 400, fontSize: 50, color: "white" }}
            >
              추천 방식을 선택하세요
            </Typography>
            <Box
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-evenly",
                height: 1030,
                marginBottom: 400,
              }}
            >
              <Button
                onClick = {() => {
                  sendMsg(3)
                  props.setCamera(true)
                  props.setEmotion(true)
                }}
                variant="contained"
                sx={{
                  backgroundColor: "rgba(19, 33, 84, 0.6)",
                  fontSize: 50,
                  padding: 10,
                  height: 750,
                  width: 500,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              ><Box>

                <img src={emotions} alt="emotions" style={{width:"90%", height:"100%"}}></img>
                <Typography sx={{ fontSize: 50, marginTop:10 }}>감정인식 추천</Typography>
              </Box>
              </Button>
              <Button
              onClick = {() => {
                navigate(`/book/recommend/age`);
              }}
                variant="contained"
                size="large"
                sx={{
                  backgroundColor: "rgba(19, 33, 84, 0.6)",
                  padding: 10,
                  height: 750,
                  width: 500,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box>

                <img src={agegroup} alt="agegroup" style={{width:"90%", height:"100%"}}></img>
                <Typography sx={{ fontSize: 50, marginTop:10 }}>연령대별 추천</Typography>
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
