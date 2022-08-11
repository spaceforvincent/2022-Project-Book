import { Box, CardActionArea, Fade, Grid } from '@material-ui/core';
import React from 'react'
import { ReactComponent as LendTitle } from "../../images/대여.svg";
import { ReactComponent as BookUp } from "../../images/도서를 올려주세요.svg";
import { ReactComponent as MainIcon } from "../../images/Frame 1.svg";
import { useStyles } from '../../styles';
import { useNavigate } from 'react-router-dom';
import Footer from './Footer';

export default function RecommendScreen() {
    const styles = useStyles();
    return (
      <div> 
        <Fade in={true}>
          <CardActionArea>
            <Box className={[styles.root, styles.background]}>
              <Box className={[styles.main, styles.center]}>
                <Box>
                <LendTitle className={styles.title}></LendTitle>
                </Box>
                <MainIcon className={styles.largeLogo}></MainIcon>
              </Box>
              <Box className={styles.center}>
                <BookUp className={[styles.ment]}></BookUp>
              </Box>
            </Box>
          </CardActionArea>
        </Fade>
        <Footer />
        </div>
  )
}
