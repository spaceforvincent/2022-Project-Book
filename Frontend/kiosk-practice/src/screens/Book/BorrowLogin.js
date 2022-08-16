import React, { Component, useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useStyles } from "../../styles";
import { Box, Card, CardActionArea } from "@material-ui/core";
import axios from "axios";
import { ReactComponent as MainIcon } from "../../images/Frame 1.svg";
import { Button } from "@mui/material";
import { tokenToString } from "typescript";

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
    const navigate = useNavigate();

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
                Borrow(data.token);

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
        props.setFinished(true);
    };

    return (
        <Card>
            <CardActionArea>
                <Box className={[styles.center]}>
                    <MainIcon className={styles.largeLogo} />
                    <Box>
                        <button
                            onClick={() => {
                                submit();
                            }}></button>
                    </Box>
                    <Box>
                        {
                            props
                                .borrowList
                                .map((BOOK) => (
                                    <div>{BOOK.title}여기는 외않되<br></br>
                                        {BOOK.isbn}
                                    </div>
                                ))
                        }
                    </Box>
                </Box>
            </CardActionArea>
        </Card >
    );
};

export default Login;