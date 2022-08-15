import React, {Component, useState} from "react";

import {useNavigate, useSearchParams} from "react-router-dom";
import {useStyles} from "../../styles";
import {Box, Card, CardActionArea} from "@material-ui/core";
import axios from "axios";
import {ReactComponent as MainIcon} from "../../images/Frame 1.svg";
import {Button} from "@mui/material";

axios.defaults.withCredentials = true;

const submit = async () => {
    const {email, password} = {
        email: "sanggom@ssaty.com",
        password: "sanggom1234!"
    };
    try {
        const {data} = await axios.post(
            "http://i7d211.p.ssafy.io:8081/user/login",
            {email, password}
        );

        if (data.token) {
            console.log(data.token);
        } else {
            alert("이메일 혹은 비밀번호가 틀렸습니다.")
        }

    } catch (e) {
        // 서버에서 받은 에러 메시지 출력
        console.log(e)
    }
};

const Login = (props) => {
    const styles = useStyles();
    const navigate = useNavigate();

    return (
        <Card>
            <CardActionArea>
                <Box className={[styles.center]}>
                    <MainIcon className={styles.largeLogo}/>
                    <Box>
                        <button onClick={submit}>
                            Do Something!</button>
                    </Box>
                    <Box>
                        { props.books.title }
                    </Box>
                </Box>
            </CardActionArea>
        </Card>
    );
};

export default Login;