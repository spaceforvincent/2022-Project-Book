import React from "react";
import {useStyles} from "../../styles";
import {Box, CardActionArea, Fade, Grid} from "@material-ui/core";
import {useNavigate, useLocation} from "react-router-dom";
import { ReactComponent as Home } from "../../images/homeBtn.svg";
import { ReactComponent as Back } from "../../images/backBtn.svg";
import { ReactComponent as LendTitle } from "../../images/대여.svg";

const Header = () => {
    const styles = useStyles();
    const sampleLocation = useLocation();
    const navigate = useNavigate();
    console.log(sampleLocation.pathname);

    return (
        <Box className={[styles.main, styles.center]}>
            <Box>
                <Home className={styles.TitleButton} onClick={() => navigate("/book/main")}/>
                <div className={styles.Title}>안녕하세요!</div>
                <Back className={styles.TitleButton} onClick={() => navigate(-1)}/>
            </Box>
        </Box>
    );
}

export default Header;