import React from "react";
import { useStyles } from "../../styles";
import { Box } from "@material-ui/core";
import { useLocation } from "react-router-dom"
import BookItem from "./Borrow_book"

const Borrow_booklist = () => {
    const styles = useStyles();

    return (
        <Box className={[styles.outerWrapper]}>
            <Box className={[styles.wrapper]}>
                <BookItem />
                <BookItem />
                <BookItem />
            </Box>
        </Box>
    );
}

export default Borrow_booklist;
