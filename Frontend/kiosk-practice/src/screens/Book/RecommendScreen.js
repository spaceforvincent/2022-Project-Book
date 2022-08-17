import {Box, Card, CardActionArea, Fade} from "@material-ui/core";
import React, { useEffect, useState, useRef } from "react";

import {useStyles} from "../../styles";
import {ReactComponent as MainIcon} from "../../images/Frame 1.svg";
import {ReactComponent as Signup} from "../../images/Signup.svg";
import {useNavigate} from 'react-router-dom';
import Footer from "../../components/Footer";
import io from "socket.io-client";
import axios from 'axios';

export default function RecommendScreen(props) {

  console.log("넘어왔다!")

  const styles = useStyles();

  const socket = io.connect("http://localhost:9994");
  const [sockets, setSockets] = useState([]);

  const videoRef = useRef(null)

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

    const getWebcam = (callback) => {
      try {
        const constraints = {
          'video': true,
          'audio': false
        }
        navigator.mediaDevices.getUserMedia(constraints)
          .then(callback);
      } catch (err) {
        console.log(err);
        return undefined;
      }
    }
    
    const Styles = {
      Video: { width: "100%", height: "100%", background: 'rgba(245, 240, 215, 0.5)' },
      None: { display: 'none' },
    }
  
    useEffect(() => {
      getWebcam((stream => {
        videoRef.current.srcObject = stream;
      }));
      socket.on('faceoutput', (data) => {
          console.log(data)
          getFace(data)
      })
      return() => {
          socket.close()
      }
    }, [sockets]);

    return(
      <CardActionArea>
    <div style={{ width: '100vw', height: '100vh', padding: '3em' }}>
      <video ref={videoRef} autoPlay style={Styles.Video} /></div>
          </CardActionArea>
    )
}

