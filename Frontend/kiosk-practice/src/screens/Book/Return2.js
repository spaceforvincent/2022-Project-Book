import React, { Component, useState, useEffect} from "react";
import { useStyles } from "../../styles";
import { Box } from "@material-ui/core";
import Footer from "../../components/Footer";
import AcceptBtn from "../../components/AcceptBtn";

import io from "socket.io-client";
import axios from 'axios';

import Borrow_booklist from './Borrow_booklist';

const Return2 = (props) => {

    console.log(props.rbook)

    const styles = useStyles();
    const [sockets, setSockets] = useState([]);
    const [data, setData] = useState(false);

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
                props.setRbook(props.rbook.concat(response.data));
                return
            })
    }

    const mouse = () => {
        props.rbook.map((BOOK) => (
            console.log(BOOK.title)
            )) 
    }

    const otherbook = () => {
        setSockets('connect')
        socket.emit("inputdata", 0);
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
    props.setAccept(data);
    console.log(data);

    return (
        <Box className={styles.center}>
            <Box className={[styles.TitleMessage, styles.padding]}>
                오늘 <br></br>
                {todayTime().slice(0, 9)}
            </Box>

            <div onClick={() => {
                    mouse()
                }}>
                돼라 제발
            </div>

                <div>
                    안되면 탈주한다
                 { props.rbook.map((BOOK) => (
                    <div>{ BOOK.title }</div>
                    )) }
                </div>

            <div onClick={() => {
                    otherbook()
                }}>
                더 빌릴래요!
            </div>

            <Box className={styles.padding} />

            
            <Box className={[styles.TitleMessage]}>
                반납&nbsp;합니다
            </Box>
            <AcceptBtn setData={setData}/>
            <Footer />
        </Box>
    );
}

export default Return2;
