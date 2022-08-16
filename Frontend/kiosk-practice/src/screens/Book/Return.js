import React, {useState} from "react";
import {useStyles} from "../../styles";
import {Box, CardActionArea, Fade, Grid} from "@material-ui/core";

import Return1 from "./Return1";
import Return2 from "./Return2";
import Return3 from "./Return3";

export default function ReturnScreen(props) {
    const styles = useStyles();

    const [rbook, setRbook ]= useState([]);
    const [Accept, setAccept] = useState(false);

    console.log(Accept);

    return (
        <Fade in={true}>
            <CardActionArea>
                {
                    rbook.length === 0
                        ? <Return1 rbook={rbook} setRbook={setRbook} />
                        : Accept
                            ? <Return3/>
                            : <Return2 rbook={rbook} setRbook={setRbook} setAccept={setAccept}/>
                }
            </CardActionArea>
        </Fade>
    );
}
