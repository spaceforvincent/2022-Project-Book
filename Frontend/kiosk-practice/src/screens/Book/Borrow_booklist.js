import React from "react";
import { useStyles } from "../../styles";
import { Box } from "@material-ui/core";
import { useLocation } from "react-router-dom"

const Borrow_booklist = () => {
    const styles = useStyles();

    return (
        <Box className={styles.outerWrapper}>
            <Box className={styles.wrapper}>
                <Box className={styles.slide}>초특가 야놀자!!</Box>
                <Box className={styles.slide}>초특가 야놀자!!</Box>
                <Box className={styles.slide}>초특가 야놀자!!</Box>
                <Box className={styles.slide}>초특가 야놀자!!</Box>
                <Box className={styles.slide}>초특가 야놀자!!</Box>
                <Box className={styles.slide}>초특가 야놀자!!</Box>
                <Box className={styles.slide}>초특가 야놀자!!</Box>
                <Box className={styles.slide}>초특가 야놀자!!</Box>
                <Box className={styles.slide}>초특가 야놀자!!</Box>
            </Box>
        </Box>
    );
}

export default Borrow_booklist;
