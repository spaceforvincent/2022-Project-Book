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

<<<<<<< HEAD
=======
    const [page, setPage] = useState(1);

    const nextPage = () => {
        console.log(page)
        if (page >= props.brBooks.length) {
            setPage(1)
        } else {
            setPage(page + 1)
        }
    }

>>>>>>> c274628882b2a3509cc7fd088fae5c3e11954807
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
<<<<<<< HEAD
        getBorrow(props.isbn)
=======
>>>>>>> c274628882b2a3509cc7fd088fae5c3e11954807
    }, []);

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
                    <Box className={[styles.TitleMessage,]} style={{
                        margin: 50
                    }}>
                        대여&nbsp;현황
                    </Box>
                    {
                        <Box className={[styles.Card]}>
                            <Box>{page}/{props.brBooks.length}</Box>
                            <img
                                src={props
                                    .brBooks[page - 1].book
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
                                        .brBooks[page - 1]
                                        .book.title
                                }</Box>
                            }
                            {
                                <Box
                                    style={{
                                        margin: 50
                                    }}>{
                                        props
                                            .brBooks[page - 1]
                                            .return_date.slice(0, 10)
                                    }</Box>
                            }
                        </Box>
                    }
                    <Box className={[styles.TitleMessage]} style={{
                        margin: 50
                    }}>
                        대여가&nbsp;완료되었습니다<br></br>
                        감사합니다
                    </Box>
                </Box>
            </Box>



            {/* <Box>
                {books.map((BOOK) => (<div>{BOOK.isbn}</div>))}
            </Box> */}
            <Box>
                {Dbooks.map((book) => (<div>{book.title}</div>))}
            </Box>
<<<<<<< HEAD
            {/* <Box>
                {books.map((BOOK) => (<div>{BOOK.isbn}</div>))}
            </Box> */}
            <Box>
                {Dbooks.map((book) => (<div>{book.title}</div>))}
            </Box>
=======
>>>>>>> c274628882b2a3509cc7fd088fae5c3e11954807
            <Box className={[styles.TitleMessage]}></Box>

<<<<<<< HEAD
            <Timer sec="10" /> {/*  <meta http-equiv="refresh" content="10; url=http://localhost:3000/book/main"
 *   />

 */
            }
=======

            <Timer sec="10" />
            {/* <meta http-equiv="refresh" content="10; url=http://localhost:3000/book/main" /> */}

>>>>>>> c274628882b2a3509cc7fd088fae5c3e11954807

            <Footer />
        </Box>
    );
}

export default Borrow3;
