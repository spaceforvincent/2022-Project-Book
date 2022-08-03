import {
  ThemeProvider,
  CssBaseline,
  Paper,
} from "@material-ui/core";
import { createTheme } from "@material-ui/core";
import { BrowserRouter, Routes, Route, } from "react-router-dom";

// book
import Main from "./screens/Book/Main";
import Borrow from "./screens/Book/Borrow";
import Recommend from "./screens/Book/Recommend";
import Return from "./screens/Book/Return";
import Search from "./screens/Book/Search";

// user
import SignIn from "./screens/User/SignIn";
import LogIn from "./screens/User/LogIn";
import Profile from './screens/User/Profile';

// board
import Board from './screens/Board/Board';

const theme = createTheme({
  typography: {
    h1: { fontWeight: "bold" },
    h2: {
      fontSize: "2rem",
      color: "black",
    },
    h3: {
      fontSize: "1.8rem",
      fontWeight: "bold",
      color: "white",
    },
    palette: {
      primary: { main: "#ff1744" },
      secondary: {
        main: "#118e16",
        contrastText: "#ffffff",
      },
    },
  },
});

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Paper>
          <Routes>
            {/* book */}
            <Route path="/main" element={<Main />} exact></Route>
            <Route path="/rental" element={<Borrow />} exact></Route>
            <Route path="/return" element={<Return />} exact></Route>
            <Route path="/recommend" element={<Recommend />} exact></Route>
            <Route path="/search" element={<Search />} exact></Route>
            
            {/* user */}
            <Route path="/signin" element={<SignIn />} exact></Route>
            <Route path="/login" element={<LogIn />} exact></Route>
            <Route path="/profile" element={<Profile />} exact></Route>

            {/* board */}
            <Route path="/board" element={<Board />} exact></Route>
          </Routes>
        </Paper>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
