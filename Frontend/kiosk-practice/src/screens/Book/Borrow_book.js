import {CardActionArea, Fade, Grid, Typography} from "@mui/material";
import {Box} from "@mui/system";
import React, {useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom";
import {useStyles} from "../../styles";
import {ReactComponent as BtnMiniSearchPressed} from "../../images/btnmini-search-pressed.svg";
import Header from "./Header";
import Footer from "./Footer";
export default function SearchResult() {
    const styles = useStyles();
    
    return (
        <Box>
          <BtnMiniSearchPressed className={styles.innerwrapBtn}/>
          <Box className={styles.innerwrapBtn}>
              책이름:<br></br>
              작가이름:<br></br>
              출판사:<br></br>
              반납일자:<br></br>
          </Box>
        </Box>
    );
}
