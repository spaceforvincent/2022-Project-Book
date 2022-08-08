import { Box, CardActionArea, Fade} from "@material-ui/core";
import React from "react";
import { useStyles } from "../../styles";
import { useNavigate } from "react-router-dom";
import VirtualKeyboard from "../../components/keyboard/Keyboard.tsx";
import Header from "./Header";
import Footer from "./Footer";

export default function SearchScreen() {
  const styles = useStyles();
  return (
    <div>
      <Fade in={true}>
        <CardActionArea>
          <Box className={[styles.root, styles.background]}>
          <Header />
            <Box className={[styles.main, styles.center]}>
            </Box>
            <Box className={styles.center}>
              <VirtualKeyboard />
            </Box>
           <Footer />
          </Box>
        </CardActionArea>
      </Fade>
    </div>
  );
}
