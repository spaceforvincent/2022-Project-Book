import React from "react";
import { useStyles } from "../../styles";
import { ReactComponent as Accept } from "../../images/accept+.svg";
import { ReactComponent as Cancle } from "../../images/cancle+.svg";
import { Box, CardActionArea, Fade, Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";
import Borrow_booklist from './Borrow_booklist';

const Borrow1 = () => {
    const styles = useStyles();
    const todayTime = () => {
        let now = new Date();
        let todayMonth = now.getMonth() + 1;
        let todayDate = now.getDate();
        const week = ['일', '월', '화', '수', '목', '금', '토'];
        let dayOfWeek = week[now.getDay()];

        return todayMonth + "월" + todayDate + "일" + dayOfWeek + "요일";
    }

    return (
        <Box>
            <Borrow_booklist />
            <Box className={[styles.TitleMessage, styles.padding]} > {todayTime().slice(0, 9)} </Box>
            <Box className={[styles.TitleMessage, styles.padding]} > 총 알을 맞으셨습니다. </Box>
            <Grid container="container" className={styles.padding}>
                <Grid item="item" sm={6} className={styles.footer} container="container">
                    <Accept className={styles.AcceptButton} />
                    <Box className={styles.AcceptButtonText} >반납</Box>
                </Grid>
                <Grid item="item" sm={6} className={styles.footer} container="container">
                    <Cancle className={styles.AcceptButton} />
                    <Box className={styles.AcceptButtonText} >취소</Box>
                </Grid>
            </Grid>
        </Box>
    );
}

export default Borrow1;
