import {useState, useEffect, useCallback} from 'react';

import React, {Component} from "react";
import {useStyles} from "../../styles";
import {Box, Grid} from "@material-ui/core";
import Footer from "../../components/Footer";
import AcceptBtn from "../../components/AcceptBtn";

import Borrow_booklist from './Borrow_booklist';

import io from "socket.io-client";
import axios from 'axios';

const Borrow2 = (props) => {
    const [sockets, setSockets] = useState([]);
    const [books, setBooks] = useState([]);
    const [data, setData] = useState(false);

    props.setAccept(data);

    console.log(data);

    const socket = io.connect("http://localhost:9994");


    const getBook = (bookdata) => {
        console.log(bookdata)
        axios
            .get("http://i7d211.p.ssafy.io:8081/book/detail", {
                params: {
                    ISBN: bookdata
                }
            })
            .then(function (response) {
                setBooks(response.data)
                props.refreshFunction(response.data);
                console.log("헬롱!", books)
                console.log("발롱!", props.borrowList)
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
            <Box className={styles.padding}/> {/* <Borrow_booklist/> */}
            <Box className={[styles.TitleMessage, styles.padding]}>
                {weeksAfterdayTime().slice(0, 9)}
            </Box>

            <div>
                {books.title}
            </div>

            <button onClick={() => {
                    otherbook()
                }}>
                더 빌릴래요!
            </button>

            <button onClick={() => {
                    finishbook()
                }}>
                그만할래요!
            </button>

            <button onClick={() => {
                    getBook('9791197910821')
                }}>
                isbn을 추가해요!
            </button>
            <button onClick={() => {
                    getBook('9791165345990')
                }}>
                isbn을 추가해요2!
            </button>

            <Box className={[styles.TitleMessage]}>
                <b>까지</b>
                대여
                <b>합니다.</b>
            </Box>

            <AcceptBtn setData={setData}/>

            <Footer/>
        </Box>
    );
}

export default Borrow2;