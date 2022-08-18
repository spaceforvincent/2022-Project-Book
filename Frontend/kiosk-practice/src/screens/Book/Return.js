import React, { useState } from "react";
import { useStyles } from "../../styles";
import { Box, CardActionArea, Fade, Grid } from "@material-ui/core";

import Return1 from "./Return1";
import Return2 from "./Return2";
import Return3 from "./Return3";
import Return4 from "./Return4";

export default function ReturnScreen(props) {
    const styles = useStyles();

    const [brBooks, setBrbooks] = useState([]);
    const [Final, setFinal] = useState([]);
    const [rbook, setRbook] = useState([]);
    const [Accept, setAccept] = useState(false);
    const [brNum, setBrnum] = useState(1);
    const [isbn, setIsbn] = useState();

    const result = brBooks.filter(brBook => brBook.return_check === 0);

    console.log(brBooks);

    return (
        <Fade in={true}>
            <CardActionArea>
                {
                    rbook.length === 0
                        ? <Return1 rbook={rbook} setRbook={setRbook} />
                        : brBooks.length === 0
                            ? <Return2
                                brNum={brNum}
                                setBrnum={setBrnum}
                                rbook={rbook}
                                setRbook={setRbook}
                                setAccept={setAccept}
                                setBrbooks={setBrbooks}
                                brBooks={brBooks} />
                            : brBooks[brBooks.length - 1].book.title === result[result.length - 1].book.title
                                ? <Return4 brBooks={result} />
                                : <Return3 brBooks={result} />

                }
            </CardActionArea>
        </Fade>
    );
}
