import React from "react";
import {useStyles} from "../../styles";
import {Box, CardActionArea, Fade, Grid} from "@material-ui/core";
import {ReactComponent as MainIcon} from "../../images/Frame 1.svg";
import {useNavigate} from "react-router-dom";

import Return1 from "./Return1";
import Return2 from "./Return2";
import Return3 from "./Return3";


export default function ReturnScreen() {
    const styles = useStyles();
    return (
      <Fade in={true}>
        <CardActionArea>
          <Return1 />
          <Return2 />
          <Return3 />
        </CardActionArea>
      </Fade>
    );
}
