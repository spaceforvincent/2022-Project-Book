import React, { Component, useState, useEffect } from "react";
import Footer from "../../components/Footer";
import { useStyles } from "../../styles";
import { Box, Card, CardActionArea } from "@material-ui/core";
import axios from "axios";

import { ReactComponent as Plus } from "../../images/plusBtn.svg";

axios.defaults.withCredentials = true;

const Login = (props) => {
    const styles = useStyles();
    const [page, setPage] = useState(1);
    const [token, setToken] = useState("");
    const [count, setCount] = useState(0);

    const nextPage = () => {
        console.log(page)
        if (page >= props.borrowList.length) {
            setPage(1)
        } else {
            setPage(page + 1)
        }
    }

    const submit = async () => {
        const { email, password } = {
            email: "sanggom@ssaty.com",
            password: "sanggom1234!"
        };
        try {
            const { data } = await axios.post(
                "/user/login",
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
            .map((BOOK) => (console.log(BOOK.isbn), setCount(count + 1), axios.put("/book/borrow", {}, {
                params: {
                    ISBN: BOOK.isbn
                },
                headers: headers // headers에 headers 객체 전달
            })))

    };

    const BRcheck = (token) => {
        console.log("HELP ME")
        const headers = {
            'X-AUTH-TOKEN': token
        }
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

    useEffect(() => {
        if (count == props.borrowList.length) {
            BRcheck(token);
        }
    }, [count]);

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

                </Box>

            </Box>
            <Box style={{
                padding: 130
            }}></Box>
            <Plus onClick={() => {
                submit()
            }} />
            <Footer />
        </Box>
    );
};

export default Login;