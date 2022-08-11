import { useState, useEffect, useCallback } from 'react';

import React, {Component} from "react";
import {useStyles} from "../../styles";
import {ReactComponent as Accept} from "../../images/accept+.svg";
import {ReactComponent as Cancle} from "../../images/cancle+.svg";
import {Box, Grid} from "@material-ui/core";
import Footer from "./Footer";

import Borrow_booklist from './Borrow_booklist';

import io from "socket.io-client";
import axios from 'axios';

const Borrow1 = () => {

    // let isbndata = [];
    
    const socket = io.connect("http://localhost:9994");
    const [ books, setBook ] = useState([]);

    const getBook = ( bookdata ) => {
        axios.get("http://i7d211.p.ssafy.io:8081/book/detail", { 
            params: { ISBN : bookdata }
        })
      .then(function (response) {
           return setBook(response.data)
      })
    }


    socket.on('isbnoutput', (data) => {
        getBook(data)
    });
    

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
                오늘 <br></br>
                {todayTime().slice(0, 9)}
            </Box>
            <Box className={styles.padding}/>
            <Borrow_booklist/>
            <Box className={[styles.TitleMessage, styles.padding]}>
                {weeksAfterdayTime().slice(0, 9)}
            </Box>

            <Box className={[styles.TitleMessage]}>
                <div>
                <h1> { books.title } </h1>
                </div>
                <b>까지</b> 대여 <b>합니다.</b>
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