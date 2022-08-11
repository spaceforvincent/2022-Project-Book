import React from "react";
import { useStyles } from "../../styles";
import { Box, CardActionArea, Fade, Grid } from "@material-ui/core";
import Borrow_booklist from './Borrow_booklist';

const Borrow1 = () => {
    const styles = useStyles();


    return (
        <Box>
            <Borrow_booklist className={[styles.center]}/>
            <Box className={[styles.TitleMessage, styles.padding]} > 총 알을 맞으셨습니다. </Box>
        </Box>
    );
}

export default Borrow1;
