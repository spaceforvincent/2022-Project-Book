import React from "react";
import {useStyles} from "../../styles";
import {Box, Grid} from "@material-ui/core";
import {useNavigate, useLocation} from "react-router-dom";
import {ReactComponent as Home} from "../../images/homeBtn.svg";
import {ReactComponent as Back} from "../../images/backBtn.svg";

const Header = () => {

    const styles = useStyles();
    const sampleLocation = useLocation();
    const navigate = useNavigate();
    console.log(sampleLocation.pathname);

    return (
        <Box className={styles.center}>
            <Grid item="item" sm={12} className={styles.Header}>
                <Home className={styles.TitleButton} onClick={() => navigate("/book/main")}/>
                <Box className={styles.TitleMessage}>안녕하세요!</Box>
                <Back className={styles.TitleButton} onClick={() => navigate(-1)}/>
            </Grid>
        </Box>
    );
}

export default Header;