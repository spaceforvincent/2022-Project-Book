<<<<<<< HEAD
import React, { Component, useState, useEffect} from "react";
=======
import React, { Component, useState, useEffect } from "react";
>>>>>>> c274628882b2a3509cc7fd088fae5c3e11954807
import { useStyles } from "../../styles";
import { Box, Grid } from "@material-ui/core";
import Footer from "../../components/Footer";

<<<<<<< HEAD
import io from "socket.io-client";
import axios from 'axios';

import Borrow_booklist from './Borrow_booklist';

const Return2 = (props) => {

    console.log(props.rbook)

    const styles = useStyles();
    const [sockets, setSockets] = useState([]);
    const [data, setData] = useState(false);

=======
import { useNavigate } from "react-router-dom";
import { ReactComponent as Accept } from "../../images/accept+.svg";
import { ReactComponent as Cancle } from "../../images/cancle+.svg";

import { ReactComponent as Plus } from "../../images/plusBtn.svg";
import io from "socket.io-client";
import axios from 'axios';

const Return2 = (props) => {
    const styles = useStyles();
    const navigate = useNavigate();
    console.log(props.rbook)

    const [sockets, setSockets] = useState([]);
    const [data, setData] = useState(false);
    const [state, setState] = useState(false);
    const [num, setNum] = useState(0);

    props.setAccept(data);
    console.log(data);

>>>>>>> c274628882b2a3509cc7fd088fae5c3e11954807
    const socket = io.connect("http://localhost:9994");

    const getBook = (bookdata) => {
        console.log(bookdata)
        axios
<<<<<<< HEAD
            .get("http://i7d211.p.ssafy.io:8081/book/detail", {
=======
            .get("/book/detail", {
>>>>>>> c274628882b2a3509cc7fd088fae5c3e11954807
                params: {
                    ISBN: bookdata
                }
            })
            .then(function (response) {
                props.setRbook(props.rbook.concat(response.data));
<<<<<<< HEAD
                return
            })
    }

    const mouse = () => {
        props.rbook.map((BOOK) => (
            console.log(BOOK.title)
            )) 
=======
            })
    }

    const getReturn = (isbn) => {
        console.log(isbn)
        axios
            .put("/book/return", {}, {
                params: {
                    ISBN: isbn
                }
            })
            .then(function (response) {
                console.log(response.data)

            })
    }

    const getReturnFinal = (isbn) => {
        console.log(isbn)
        axios
            .put("/book/return", {}, {
                params: {
                    ISBN: isbn
                }
            })
            .then(function (response) {
                console.log(response.data, "HI")
                props.setBrbooks(props.brBooks.concat(response.data.usage))
            })
    }

    const Return = () => {
        for (let i = 0; i < props.rbook.length; i++) {
            console.log(props.rbook[i].isbn)
            if (i == props.rbook.length - 1) {
                getReturnFinal(props.rbook[i].isbn)
            } else {
                getReturn(props.rbook[i].isbn)
            }
        }
>>>>>>> c274628882b2a3509cc7fd088fae5c3e11954807
    }

    const otherbook = () => {
        setSockets('connect')
<<<<<<< HEAD
=======
        setState(true)
>>>>>>> c274628882b2a3509cc7fd088fae5c3e11954807
        socket.emit("inputdata", 0);
    }

    useEffect(() => {
        socket.on('isbnoutput', (data) => {
            console.log(data)
            getBook(data)
        })
<<<<<<< HEAD
        return() => {
=======
        return () => {
>>>>>>> c274628882b2a3509cc7fd088fae5c3e11954807
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
<<<<<<< HEAD
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
=======

    return (
        <Box className={styles.center}>
            <Box
                className={[styles.Bigcard]}
                style={{
                    paddingTop: 50
                }}>
                <Box className={[styles.BigcardInner]}>
                    {
                        state
                            ? <Box className={[styles.Card]}>
                                <Box>
                                    책을 올려주세요
                                </Box>
                                <Plus
                                    onClick={() => {
                                        getBook('9791165345990')
                                    }} />
                            </Box>
                            : <Box className={[styles.Card]}>
                                <img
                                    src={props
                                        .rbook[props.rbook.length - 1]
                                        .cover}
                                    style={{
                                        width: "600px",
                                        height: "750px",
                                        boxShadow: "20px 60px 40px rgba(0, 0, 0, 0.25)",
                                        margin: 50
                                    }}
                                    alt="dummy"></img>
                                {
                                    <Box>{
                                        props
                                            .rbook[props.rbook.length - 1]
                                            .title
                                    }</Box>
                                }
                                {
                                    <Box
                                        style={{
                                            margin: 50
                                        }}>{
                                            props
                                                .rbook[props.rbook.length - 1]
                                                .author
                                        }</Box>
                                }
                                <Plus
                                    onClick={() => {
                                        otherbook()
                                    }} />
                            </Box>
                    }
                    <Box
                        className={[styles.TitleMessage]}
                        style={{
                            marginTop: 50
                        }}>
                        {todayTime().slice(0, 9)}
                        <br></br>
                        반납합니다
                    </Box>
                </Box>

>>>>>>> c274628882b2a3509cc7fd088fae5c3e11954807
            </Box>

            <Grid container="container">
                <Grid item="item" sm={12} className={styles.footer}>
                    <Accept className={styles.AcceptButton} onClick={() => Return(true)} />
                    <Cancle
                        className={styles.AcceptButton}
                        onClick={() => {
                            navigate("/book/main");
                        }} />
                </Grid>
            </Grid>

            <Footer />
        </Box>
    );
}

export default Return2;
