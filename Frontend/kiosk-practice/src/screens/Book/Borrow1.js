import React from "react";
import {useStyles} from "../../styles";
import {Box} from "@material-ui/core";
import {ReactComponent as MainIcon} from "../../images/Frame 1.svg";
import Footer from "../../components/Footer";
import Header from "../../components/Header";

export default function Borrow1() {
    const styles = useStyles();
    return (
        <Box className={styles.center}>
            <Header/>
            <MainIcon className={styles.largeLogo} />
            <Box className={[styles.TitleMessage, styles.padding]}>책을 올려주세요</Box>
            <Footer/>
        </Box>
    );
}