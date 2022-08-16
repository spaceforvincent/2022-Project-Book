import {Box, Card, CardActionArea} from "@material-ui/core";
import React from "react";

import {useStyles} from "../../styles";
import {ReactComponent as MainIcon} from "../../images/Frame 1.svg";
import {ReactComponent as Signup} from "../../images/Signup.svg";
import {useNavigate} from 'react-router-dom';
import Footer from "../../components/Footer";

export default function CameraScreen(props) {
    const styles = useStyles();
    const navigate = useNavigate();

    const video = document.querySelector("#videoElement");
 
        if (navigator.mediaDevices.getUserMedia) {
          navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
              video.srcObject = stream;
            })
            .catch(function (err0r) {
              console.log("Something went wrong!");
            });
        }

    return (
        <div id="container">
        <video autoplay="true" id="videoElement">
        
        </video>
    </div>
    );
}
