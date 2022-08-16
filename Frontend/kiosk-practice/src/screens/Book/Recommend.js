import React, {useState} from "react";
import { useStyles } from "../../styles";
import { Box, CardActionArea, Fade } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { Button, Typography } from "@mui/material";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import emotions from "../../images/emotions.png";
import agegroup from "../../images/agegroup.png";
import RecommendMain from "./RecommendMain";
import RecommendEmotion from "./RecommendEmotion";

import io from "socket.io-client";

export default function RecommendScreen() {
  const styles = useStyles();
  const navigate = useNavigate();

  const [emotion, setEmotion] = useState(false);
  const [faces, setFaces] = useState([]);
  const [camera, setCamera] = useState(false)


  return (
    <Fade in={true}>
      <CardActionArea>
      {
        faces.length === 0 
              ? camera 
              ? <RecommendMain setEmotion={setEmotion} setFaces={setFaces} faces={faces} setCamera={setCamera}/>  
              : <RecommendScreen />
            : <RecommendEmotion faces={faces} />
                }

      </CardActionArea>
    </Fade>
  );
}
