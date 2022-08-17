import React, { useState, useEffect } from "react";
import { useStyles } from "../../styles";
import { Box } from "@material-ui/core";
import { ReactComponent as MainIcon } from "../../images/Frame 1.svg";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

import io from "socket.io-client";
import axios from 'axios';


const Return1 = (props) => {

    const styles = useStyles();

    const socket = io.connect("http://localhost:9994");
    const [sockets, setSockets] = useState([]);

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

    useEffect(() => {
        socket.on('isbnoutput', (data) => {
            console.log(data)
            getBook(data)
        })

        return () => {
            socket.close()
        }
    }, [sockets]);

    return (
        <Box className={styles.center}>
            <Header />
            <MainIcon className={styles.largeLogo} />
            <button
                onClick={() => {
                    getBook('9771228773007')
                }}>
                isbn을 추가해요!
            </button>
            <Box className={[styles.TitleMessage, styles.padding]}>책을 올려주세요</Box>
            <Footer />
        </Box>
    );
}

export default Return1;