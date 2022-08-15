import React, {Component} from "react";
import {useStyles} from "../../styles";
import {Box} from "@material-ui/core";
import Footer from "../../components/Footer";
import Timer from './Timer';

import RentalStatus from './RentalStatus';

const Borrow3 = () => {
    const styles = useStyles();
    return (
        <Box className={styles.center}>
            <Box className={[styles.TitleMessage, styles.padding]}>
                대여&nbsp;현황
            </Box>
            {/* <RentalStatus/> */}
            <Box className={[styles.TitleMessage]}></Box>
            <Box className={[styles.TitleMessage]}>
                대여가&nbsp;완료되었습니다<br></br>
                감사합니다
            </Box>

            <Timer sec="10"/>
            <meta http-equiv="refresh" content="10; url=http://localhost:3000/book/main"/>

            <Footer/>
        </Box>
    );
}

export default Borrow3;
