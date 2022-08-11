import React, {Component} from "react";
import {useStyles} from "../../styles";
import {ReactComponent as Accept} from "../../images/accept+.svg";
import {ReactComponent as Cancle} from "../../images/cancle+.svg";
import {Box} from "@material-ui/core";
import Footer from "./Footer";

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
            <Box className={styles.padding}/>
            <Borrow_booklist/>

            <Box className={[styles.TitleMessage]}>
                반납&nbsp;합니다
            </Box>

            <Box className={styles.wrapBtn}>
                <Box className={styles.innerwrapBtn}>
                    <Accept className={styles.AcceptButton}/>
                </Box>
                <Box className={styles.innerwrapBtn}>
                    <Cancle className={styles.AcceptButton}/>
                </Box>
            </Box>

            <Footer/>
        </Box>
    );
}

export default Borrow1;
