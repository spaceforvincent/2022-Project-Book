import React, {Component} from "react";
import {useStyles} from "../../styles";
import {ReactComponent as Accept} from "../../images/accept+.svg";
import {ReactComponent as Cancle} from "../../images/cancle+.svg";
import {Box, Grid} from "@material-ui/core";
import Footer from "../../components/Footer";

import Borrow_booklist from './Borrow_booklist';

const Borrow1 = () => {
    const styles = useStyles();

    const todayTime = () => {
        let now = new Date();
        let todayMonth = now.getMonth() + 1;
        let todayDate = now.getDate();
        const week = [
            '일',
            '월',
            '화',
            '수',
            '목',
            '금',
            '토'
        ];
        let dayOfWeek = week[now.getDay()];

        return todayMonth + "월" + todayDate + "일 " + dayOfWeek + "요일";
    }

    const weeksAfterdayTime = () => {
        let now = new Date();
        let weeksAfter = new Date(now.setDate(now.getDate() + 14));
        let todayMonth = weeksAfter.getMonth() + 1;
        let todayDate = weeksAfter.getDate();
        const week = [
            '일',
            '월',
            '화',
            '수',
            '목',
            '금',
            '토'
        ];
        let dayOfWeek = week[weeksAfter.getDay()];

        return todayMonth + "월" + todayDate + "일 " + dayOfWeek + "요일";
    }

    return (
        <Box className={styles.center}>
            <Box className={[styles.TitleMessage, styles.padding]}>
                {todayTime().slice(0, 9)}
            </Box>
            <Borrow_booklist/>

            <Box className={[styles.TitleMessage, styles.padding]}>
                {weeksAfterdayTime().slice(0, 9)}
            </Box>
            <Box className={[styles.TitleMessage, styles.padding]}>
                총 알을 맞으셨습니다. 대여합니다.</Box>
            <Grid container="container" className={styles.padding}>
                <Grid item="item" sm={6} className={styles.footer} container="container">
                    <Accept className={styles.AcceptButton}/>
                    <Box className={styles.AcceptButtonText}>반납</Box>
                </Grid>
                <Grid item="item" sm={6} className={styles.footer} container="container">
                    <Cancle className={styles.AcceptButton}/>
                    <Box className={styles.AcceptButtonText}>취소</Box>
                </Grid>
            </Grid>
            <Footer/>
        </Box>
    );
}

export default Borrow1;
