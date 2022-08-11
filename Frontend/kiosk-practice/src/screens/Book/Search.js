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
          <Box className={styles.center}>
          <Header />
            <Box className={[styles.keyboard]}>
              <VirtualKeyboard />
            </Box>
           <Footer />
          </Box>
        </CardActionArea>
      </Fade>
    </div>
  );
}
