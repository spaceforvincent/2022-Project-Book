import React, {useState} from "react";
import {useStyles} from "../../styles";
import {Box, CardActionArea, Fade, Grid} from "@material-ui/core";

import Return1 from "./Return1";
import Return2 from "./Return2";
import Return3 from "./Return3";

export default function ReturnScreen() {
    const styles = useStyles();
    const [books, setbooks] = useState([]);
    console.log(books.length);
    let booksLength = books.lengt;
    const [Accept, setAccept] = useState(false);

    return (
        <Fade in={true}>
            <CardActionArea>
                {
                    books.length === 0
                        ? <Return1/>
                        : Accept
                            ? <Return3/>
                            : <Return2/>
                }
            </CardActionArea>
        </Fade>
    );
}
