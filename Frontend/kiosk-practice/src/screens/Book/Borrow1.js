import React from "react";
import { useStyles } from "../../styles";
import { ReactComponent as Accept } from "../../images/accept+.svg";
import { ReactComponent as Cancle } from "../../images/cancle+.svg";
import { Box, CardActionArea, Fade, Grid } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

const Borrow1 = () => {
    const styles = useStyles();

    return (
        <Box className={styles.center}>
            <Grid container="container">
                <Grid item="item" sm={6} className={styles.footer}>
                    <Accept className={styles.AcceptButton} />
                    <Box className={styles.AcceptButtonText} >반납</Box>
                </Grid>
                <Grid item="item" sm={6} className={styles.footer}>

                    <Cancle className={styles.AcceptButton} />
                </Grid>
            </Grid>
        </Box>
    );
}

export default Borrow1;
