import React, { Component } from "react";
import { useStyles } from "../../styles";
import { Box } from "@material-ui/core";
import Footer from "../../components/Footer";
import AcceptBtn from "../../components/AcceptBtn";

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


    return (
        <Box className={styles.center}>
            <Box className={[styles.TitleMessage, styles.padding]}>
                오늘 <br></br>
                {todayTime().slice(0, 9)}
            </Box>
            <Box className={styles.padding} />
            <Borrow_booklist />

            <Box className={[styles.TitleMessage]}>
                반납&nbsp;합니다
            </Box>
            <AcceptBtn />
            <Footer />
        </Box>
    );
}

export default Borrow1;
