import React from "react";
import {useStyles} from "../../styles";
import {Box, Grid} from "@material-ui/core";
import {ReactComponent as MainIcon} from "../../images/Frame 1.svg";
import Footer from './Footer';
import Header from './Header';

export default function ReturnScreen() {
    const styles = useStyles();
    return (
        <Box className={styles.center}>
            <Header/>
            <Grid container="container">
                <Grid xs={6} className={styles.boxBtnCenter}>
                    <Box className={styles.boxBtn}>
                        안녕~!?\
                    </Box>
                </Grid>
                <Grid xs={6} className={styles.boxBtnCenter}>
                    <Box className={styles.boxBtn}>
                        안녕~!?\
                    </Box>
                </Grid>
                <Grid xs={6} className={styles.boxBtnCenter}>
                    <Box className={styles.boxBtn}>
                        안녕~!?\
                    </Box>
                </Grid>
                <Grid xs={6} className={styles.boxBtnCenter}>
                    <Box className={styles.boxBtn}>
                        안녕~!?\
                    </Box>
                </Grid>
                <Grid xs={6} className={styles.boxBtnCenter}>
                    <Box className={styles.boxBtn}>
                        안녕~!?\
                    </Box>
                </Grid>
                <Grid xs={6} className={styles.boxBtnCenter}>
                    <Box className={styles.boxBtn}>
                        안녕~!?\
                    </Box>
                </Grid>
            </Grid>
            <Footer/>
        </Box>
    );
}