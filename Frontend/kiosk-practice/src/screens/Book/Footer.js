import React from "react";
import {useStyles} from "../../styles";
import {ReactComponent as BtnMiniReturn} from "../../images/btnmini-return.svg";
import {ReactComponent as BtnMiniReturnPressed} from "../../images/btnmini-return-pressed.svg";
import {ReactComponent as BtnMiniRental} from "../../images/btnmini-rental.svg";
import {ReactComponent as BtnMiniRentalPressed} from "../../images/btnmini-rental-pressed.svg";
import {ReactComponent as BtnMiniSearch} from "../../images/btnmini-search.svg";
import {ReactComponent as BtnMiniSearchPressed} from "../../images/btnmini-search-pressed.svg";
import {ReactComponent as BtnMiniRecommend} from "../../images/btnmini-recommend.svg";
import {ReactComponent as BtnMiniRecommendPressed} from "../../images/btnmini-recommend-pressed.svg";
import {Box, CardActionArea, Fade, Grid} from "@material-ui/core";
import {useNavigate} from "react-router-dom";
import {useLocation} from "react-router-dom"

const Footer = () => {
    const styles = useStyles();
    const sampleLocation = useLocation();
    const navigate = useNavigate();
    console.log(sampleLocation.pathname);

    return (
        <Box className={styles.center}>
            <Grid container="container">
                <Grid item="item" sm={12} className={styles.footer}>
                    {
                        sampleLocation.pathname === "/book/borrow"
                            ? <BtnMiniRentalPressed className={styles.MiniButton}/>
                            : <BtnMiniRental
                                    className={styles.MiniButton}
                                    onClick={() => navigate("/book/borrow")}/>
                    }
                    {
                        sampleLocation.pathname === "/book/return"
                            ? <BtnMiniReturnPressed className={styles.MiniButton}/>
                            : <BtnMiniReturn
                                    className={styles.MiniButton}
                                    onClick={() => navigate("/book/return")}/>
                    }
                    {
                        sampleLocation.pathname === "/book/recommend"
                            ? <BtnMiniRecommendPressed className={styles.MiniButton}/>
                            : <BtnMiniRecommend
                                    className={styles.MiniButton}
                                    onClick={() => navigate("/book/recommend")}/>
                    }
                    {
                        sampleLocation.pathname === "/book/search"
                            ? <BtnMiniSearchPressed className={styles.MiniButton}/>
                            : <BtnMiniSearch
                                    className={styles.MiniButton}
                                    onClick={() => navigate("/book/search")}/>

                    }
                </Grid>
            </Grid>
        </Box>
    );
}

export default Footer;
