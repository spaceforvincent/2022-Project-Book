import React from "react";
import {useStyles} from "../../styles";
import {Box} from "@material-ui/core";
import {ReactComponent as MainIcon} from "../../images/Frame 1.svg";
import Footer from './Footer';
import Header from './Header';

export default function ReturnScreen() {
    const styles = useStyles();
    return (
        <Box className={styles.center}>
            <Header/>
            <MainIcon className={styles.largeLogo}/>
            <Box className={[styles.TitleMessage, styles.padding]}>책을 올려주세요</Box>
            <Footer/>
        </Box>
    );
}