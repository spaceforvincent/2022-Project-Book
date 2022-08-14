import React from "react";
import {useStyles} from "../styles";

import {ReactComponent as Accept} from "../images/accept+.svg";
import {ReactComponent as Cancle} from "../images/cancle+.svg";

import {Box, Grid} from "@material-ui/core";

// function move(type) {     if (type === 1) {         socket.emit("send opper",
// "1");     } else if (type === 2) {         socket.emit("send opper", "2"); }
// else if (type === 3) {         socket.emit("send opper", "3");     } else {
// socket.emit("send opper", "4");     } }

const AcceptBtn = () => {
    const styles = useStyles();

    return (
        <Box >
            <Grid container="container">
                <Grid item="item" sm={12} className={styles.footer}>
                    <Accept className={styles.AcceptButton}/>
                    <Cancle className={styles.AcceptButton}/>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AcceptBtn;
