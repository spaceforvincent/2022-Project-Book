import {useState} from 'react';

import React from "react";
import {useStyles} from "../../styles";
import {Box} from "@material-ui/core";
import Footer from "../../components/Footer";
import AcceptBtn from "../../components/AcceptBtn";
// import Borrow_booklist from './Borrow_booklist';

import io from "socket.io-client";
import axios from 'axios';

const Borrow5 = () => {

    // let isbndata = [];

    const socket = io.connect("http://localhost:9994");
    const [books, setBook] = useState([]);

    const getBook = (bookdata) => {
        axios
            .get("http://i7d211.p.ssafy.io:8081/book/detail", {
                params: {
                    ISBN: bookdata
                }
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
                오늘
                <br></br>
                {todayTime().slice(0, 9)}
            </Box>
            {/* <Borrow_booklist/> */}

            <div>
                <h1>
                    {books.title}
                </h1>
            </div>

            <Box className={[styles.TitleMessage]}>
                {weeksAfterdayTime().slice(0, 9)}
                <br></br>
                까지&nbsp; 대여&nbsp; 합니다.
            </Box>
            <AcceptBtn/>
            <Footer/>
        </Box>
    );
}

export default Borrow5;