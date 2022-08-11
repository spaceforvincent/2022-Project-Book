import React from "react";
import {useStyles} from "../../styles";
import {Box, CardActionArea, Fade, Grid} from "@material-ui/core";
import {ReactComponent as MainIcon} from "../../images/Frame 1.svg";
import {useNavigate} from "react-router-dom";

import Recommend1 from "./Recommend1";
import Recommend2 from "./Recommend2";
import Recommend3 from "./Recommend3";

export default function RecommendScreen() {
    const styles = useStyles();
    return (
      <Fade in={true}>
        <CardActionArea>
          <Recommend1 />
          <Recommend2 />
          <Recommend3 />
        </CardActionArea>
      </Fade>
    );
}
