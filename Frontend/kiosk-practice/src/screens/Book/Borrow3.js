import React, { Component, useEffect } from "react";
import { useState } from "react";
import { useStyles } from "../../styles";
import { Box } from "@material-ui/core";
import Footer from "../../components/Footer";
import Timer from './Timer';

import RentalStatus from './RentalStatus';

import axios from 'axios';

const Borrow3 = (props) => {
    const styles = useStyles();
    const [books, setBooks] = useState([]);
    const [Dbooks, setDBooks] = useState([]);

    const getBorrow = (isbn) => {
        console.log(isbn)

        axios
            .put("/book/return", {}, {
                params: {
                    ISBN: isbn
                }
            })
            .then(function (response) {
                setBooks(response.data)
                getBook(response.data)
            })
    }

    const getBook = (data) => {
        data.map((BOOK) => (console.log(BOOK.isbn), axios.get("/book/detail", {
            params: {
                ISBN: BOOK.isbn
            }
        }).then(function (response) {
            setDBooks(Dbooks.concat(response.data));
        })))
    }

    useEffect(() => {
        console.log(props.isbn)
        getBorrow(props.isbn)
    }, []);

    return (
        <Box className={styles.center}>
            <Box className={[styles.TitleMessage, styles.padding]}>
                대여&nbsp;현황
            </Box>
            {/* <Box>
                {books.map((BOOK) => (<div>{BOOK.isbn}</div>))}
            </Box> */}
            <Box>
                {Dbooks.map((book) => (<div>{book.title}</div>))}
            </Box>
            <Box className={[styles.TitleMessage]}></Box>
            <Box className={[styles.TitleMessage]}>
                대여가&nbsp;완료되었습니다<br></br>
                감사합니다
            </Box>

            <Timer sec="10" /> {/*  <meta http-equiv="refresh" content="10; url=http://localhost:3000/book/main"
 *   />

 */
            }

            <Footer />
        </Box>
    );
}

export default Borrow3;
