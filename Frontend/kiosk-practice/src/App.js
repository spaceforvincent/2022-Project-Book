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
import SignUp from "./screens/User/SignUp";
import LogIn from "./screens/User/LogIn";
import Profile from './screens/User/Profile';

// board
import Notice from './screens/Board/Notice';
import Introduce from './screens/Board/Introduce';
import Suggestion from './screens/Board/Suggestion';
import FAQ from './screens/Board/FAQ';
import Complaint from './screens/Board/Complaint';
import BookSuggestion from './screens/Board/Book_Suggestion';
import SearchResult from "./screens/Book/SearchResult";
import Detail from "./screens/Book/Detail";

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
            <Route path="/book/main" element={<Main />} exact></Route>
            <Route path="/book/borrow" element={<Borrow />} exact></Route>
            <Route path="/book/return" element={<Return />} exact></Route>
            <Route path="/book/recommend" element={<Recommend />} exact></Route>
            <Route path="/book/search" element={<Search />} exact></Route>
            <Route path="/book/searchresult" element={<SearchResult />} exact></Route>
            <Route path="/book/detail/:id" element={<Detail />} exact></Route>
            
            {/* user */}
            <Route path="/user/signup" element={<SignUp />} exact></Route>
            <Route path="/user/login" element={<LogIn />} exact></Route>
            <Route path="/user/profile" element={<Profile />} exact></Route>

            {/* board */}
            <Route path="/board/notice" element={<Notice />} exact></Route>
            <Route path="/board/introduce" element={<Introduce />} exact></Route>
            <Route path="/board/suggestion" element={<Suggestion />} exact></Route>
            <Route path="/board/FAQ" element={<FAQ />} exact></Route>
            <Route path="/board/complaint" element={<Complaint />} exact></Route>
            <Route path="/board/booksuggestion" element={<BookSuggestion />} exact></Route>

          </Routes>
        </Paper>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
