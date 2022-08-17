import React, { Component, useState, useEffect } from "react";
<<<<<<< HEAD
import { useNavigate, useSearchParams } from "react-router-dom";
=======
import Footer from "../../components/Footer";
>>>>>>> c274628882b2a3509cc7fd088fae5c3e11954807
import { useStyles } from "../../styles";
import { Box, Card, CardActionArea } from "@material-ui/core";
import axios from "axios";

import { ReactComponent as Plus } from "../../images/plusBtn.svg";

import io from "socket.io-client";

axios.defaults.withCredentials = true;

const Login = (props) => {

    const [sockets, setSockets] = useState([]);
    const socket = io.connect("http://localhost:9994");
    const [info, setInfo] = useState();


    useEffect(() => {
        socket.emit("inputdata", 4);
        socket.on('isbnoutput', (data) => {
            console.log(data)
            setInfo(data)
        })
        return () => {
            socket.close()
        }
    }, [sockets]);

    const styles = useStyles();
    const [page, setPage] = useState(1);
    const [token, setToken] = useState("");
    const nextPage = () => {
        console.log(page)
        if (page >= props.borrowList.length) {
            setPage(1)
        } else {
            setPage(page + 1)
        }
    }

    const submit = async () => {
        // const { email, password } = {
        //     email: "sanggom@ssaty.com",
        //     password: "sanggom1234!"
        // };

        const { email, password } = {
            email: info.slice(0, info.indexOf('//')),
            password: info.slice(info.indexOf('//') + 2)
        };
        console.log(info)
        console.log(info.slice(0, info.indexOf('//')));
        console.log(info.slice(info.indexOf('//') + 2));

        try {
            const { data } = await axios.post(
                "http://i7d211.p.ssafy.io:8081/user/login",
                { email, password }
            );

            if (data.token) {
                console.log(data.token);
                setToken(data.token)


            } else {
                alert("이메일 혹은 비밀번호가 틀렸습니다.")
            }

        } catch (e) {
            // 서버에서 받은 에러 메시지 출력
            console.log(e)
        }
    };

    const Borrow = (token) => {
        console.log("borrowToken", token)
        const headers = {
            'X-AUTH-TOKEN': token
        }
        props
            .borrowList
            .map((BOOK) => (console.log(BOOK.isbn), axios.put("/book/borrow", {}, {
                params: {
                    ISBN: BOOK.isbn
                },
                headers: headers // headers에 headers 객체 전달
            })))
        axios
            .get("/user/profileUsage", {
                headers: headers // headers에 headers 객체 전달
            })
            .then(function (response) {
                props.setBrbooks(props.brBooks.concat(response.data))
                console.log(response.data)
            })
    };

    useEffect(() => {
        if (token != "") {

            Borrow(token);
        }
    }, [token]);

    return (
        <Box className={styles.center}>
            <Box
                className={[styles.Bigcard]}
                style={{
                    paddingTop: 50
                }}>
                <Box
                    className={[styles.BigcardInner]}
                    onClick={() => {
                        nextPage()
                    }}>
                    {
                        <Box className={[styles.Card]}>
                            <Box>{page}/{props.borrowList.length}</Box>
                            <img
                                src={props
                                    .borrowList[page - 1]
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
                                        .borrowList[page - 1]
                                        .title
                                }</Box>
                            }
                            {
                                <Box
                                    style={{
                                        margin: 50
                                    }}>{
                                        props
                                            .borrowList[page - 1]
                                            .author
                                    }</Box>
                            }
                        </Box>
                    }
                    <Box
                        className={[styles.TitleMessage]}
                        style={{
                            marginTop: 50
                        }}>
                        카드를 리더기에<br></br>
                        대주세요
                    </Box>
                    <Plus
                        onClick={() => {
                            submit()
                        }} />
                </Box>

            </Box>
            <Footer />
        </Box>
    );
};

export default Login;