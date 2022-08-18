import React from "react";
import { useStyles } from "../styles";
import { useNavigate } from "react-router-dom";

import { Box, Grid } from "@material-ui/core";

const AcceptBtn = (props) => {
    const styles = useStyles();
    const navigate = useNavigate();
    return (
        <Box >
            <Grid container="container">
                <Grid item="item" sm={12} className={styles.footer}>
                    <img
                        alt="dummy"
                        src={"src\images\Return.png"}
                        onClick={() => props.setData(true)}
                        className={styles.AcceptButton} />
                    <img
                        alt="dummy"
                        src={"../../images/Cancle.png"}
                        onClick={() => {
                            navigate("/book/main");
                        }}
                        className={styles.AcceptButton} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default AcceptBtn;
