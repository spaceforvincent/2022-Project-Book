import {useState, useEffect} from 'react';

import React, {Component} from "react";
import {useStyles} from "../../styles";
import {ReactComponent as Accept} from "../../images/accept+.svg";
import {ReactComponent as Cancle} from "../../images/cancle+.svg";
import {Box, Grid} from "@material-ui/core";
import Footer from "../../components/Footer";

import Borrow_booklist from './Borrow_booklist';

import io from "socket.io-client";
import axios from 'axios';

const Borrow1 = () => {

    const [sockets, setSockets] = useState([]);
    const [books, setBooks] = useState([]);

    const socket = io.connect("http://localhost:9994");

    const getBook = (bookdata) => {
        axios
            .get("http://i7d211.p.ssafy.io:8081/book/detail", {
                params: {
                    ISBN: bookdata
                }
            })
            .then(function (response) {
                setBooks(response.data)
                console.log(books)
                return books
            })
    }

    const otherbook = () => {
        setSockets('connect')
        socket.emit("inputdata", 1);
    }

    const finishbook = () => {
        setSockets('disconnect')
    }

    useEffect(() => {
        socket.on('isbnoutput', (data) => {
            console.log(data)
            getBook(data)
        })
        return() => {
            socket.close()
        }
    }, [socket]);

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
            <Box className={styles.padding}/>
            <Borrow_booklist/>
            <Box className={[styles.TitleMessage, styles.padding]}>
                {weeksAfterdayTime().slice(0, 9)}
                까지<br/>
                대여합니다.
            </Box>

            <Box className={[styles.TitleMessage]}>

                <div>
                    {books.title}
                </div>

                <button
                    onClick={() => {
                        otherbook()
                    }}>
                    더 빌릴래요!
                </button>

                <button
                    onClick={() => {
                        finishbook()
                    }}>
                    그만할래요!
                </button>
            </Box>

            <Box>
                <Grid container="container">
                    <Grid item="item" sm={12} className={styles.footer}>
                        <Accept className={styles.AcceptButton}/>
                        <Cancle className={styles.AcceptButton}/>
                    </Grid>
                </Grid>
            </Box>

            <Footer/>
        </Box>
    );
}

export default Borrow1;