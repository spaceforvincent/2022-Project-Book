import React, {useState} from "react";
import {useStyles} from "../../styles";

import {CardActionArea, Fade} from "@material-ui/core";

import Borrow1 from "./Borrow1";
import Borrow2 from "./Borrow2";
import Borrow3 from "./Borrow3";
import Borrow5 from "./Borrow5";

export default function ReturnScreen(props) {
    const styles = useStyles();
    const [books, setbooks] = useState([123]);

    const [Accept, setAccept] = useState(false);
    console.log(Accept);

    return (
        <Fade in={true}>
            <CardActionArea>
                {
                    books.length === 0
                        ? <Borrow1/>
                        : Accept
                            ? <Borrow3/>
                            : <Borrow2 setAccept={setAccept}/>
                }
            </CardActionArea>
        </Fade>

    );
}
