import React, {useState} from "react";
import {useStyles} from "../../styles";

import {CardActionArea, Fade} from "@material-ui/core";

import Borrow1 from "./Borrow1";
import Borrow2 from "./Borrow2";
import Borrow3 from "./Borrow3";
import BorrowLogin from "./BorrowLogin";

export default function ReturnScreen(props) {
    const styles = useStyles();

    const [books, setbooks] = useState([]);
    const [Accept, setAccept] = useState(false);

    const refreshFunction = (newBook) => {
        setbooks(books.concat(newBook));
        console.log("borrow페이지 리스트",books);
    };

    console.log(Accept);

    return (
        <Fade in={true}>
            <CardActionArea>
                {
                    books.length === 0
                        ? <Borrow1 borrowList={books} refreshFunction={refreshFunction}/>
                        : Accept
                            ? <BorrowLogin  borrowList={books}/>
                            : <Borrow2 setAccept={setAccept} borrowList={books} refreshFunction={refreshFunction}/>
                }
            </CardActionArea>
        </Fade>

    );
}
