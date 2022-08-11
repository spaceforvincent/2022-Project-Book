import React from "react";
import { useStyles } from "../styles";
import { Box, Grid } from "@material-ui/core";
import { useNavigate, useLocation } from "react-router-dom";
import { ReactComponent as Home } from "../images/homeBtn.svg";
import { ReactComponent as Back } from "../images/backBtn.svg";

const Header = () => {

    const styles = useStyles();
    const sampleLocation = useLocation();
    const navigate = useNavigate();
    console.log(sampleLocation.pathname);

    return (
        <Box>
            <Grid item="item" sm={12} className={styles.Header}>
                <Home className={styles.TitleButton} onClick={() => navigate("/book/main")} /> {
                    sampleLocation.pathname === "/book/borrow"
                        ? <Box className={styles.TitleMessage}>대여</Box>
                        : sampleLocation.pathname === "/book/return"
                            ? <Box className={styles.TitleMessage}>반납</Box>
                            : sampleLocation.pathname === "/book/recommend"
                                ? <Box className={styles.TitleMessage}>추천</Box>
                                : <Box className={styles.TitleMessage}>검색</Box>
                }
                <Back className={styles.TitleButton} onClick={() => navigate(-1)} />
            </Grid>
        </Box>
    );
}

export default Header;