import React, {Component} from "react";
import {useStyles} from "../../styles";
import {Box, Grid} from "@material-ui/core";
import Footer from "../../components/Footer";
import Borrow_booklist from './Borrow_booklist';
import Timer from './Timer';
const Return3 = () => {
    const styles = useStyles();
    return (
        <Box className={styles.center}>
            <Box className={[styles.TitleMessage, styles.padding]}>
                대여&nbsp;현황
            </Box>
            <Box className={styles.padding}/> {/* <Borrow_booklist/> */}
            <Box className={[styles.TitleMessage, styles.padding]}></Box>
            <Box className={[styles.TitleMessage]}>
                반납이&nbsp;완료되었습니다<br></br>
                감사합니다
            </Box>

            <Timer sec="10"/>
            <meta http-equiv="refresh" content="10; url=http://localhost:3000/book/main"/>

            <Footer/>
        </Box>
    );
}

export default Return3;
