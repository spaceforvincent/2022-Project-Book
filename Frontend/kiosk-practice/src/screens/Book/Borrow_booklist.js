import React from "react";
import { useStyles } from "../../styles";
import { Box, CardActionArea, Fade, Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom"

const Footer = () => {
    const styles = useStyles();
    const sampleLocation = useLocation();
    console.log(sampleLocation.pathname);

    return (
        <Box className={[styles.center, styles.topmargin]}>
            <Grid container="container">
                <Grid item="item" sm={12} className={styles.footer}>

                </Grid>
            </Grid>
        </Box>
    );
}

export default Footer;
