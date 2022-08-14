import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },

  background: {
    background: "6069BE",
  },

  booklistBox: {
    width: 500,
    height: 200,
  },

  main: {
    flex: 1,
    overflow: "auto",
    flexDirection: "column",
    display: "flex",
    color: "#ffffff",
  },
  title: {
    marginTop: 10,
    marginBottom: 100,
    width: 500,
    height: 200,
  },
  TitleMessage: {
    fontFamily: "'Noto Sans'",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "130px",
    color: "#FFFFFF",
    textShadow: "0 16px 40px rgba(0, 0, 0, 0.25), 0 16px 40px #6068BE",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background: "#6069BE",
  },
  subTitleMessage: {
    fontFamily: "'Noto Sans'",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "50px",
    color: "#FFFFFF",
    textShadow: "0 16px 40px rgba(0, 0, 0, 0.25), 0 16px 40px #6068BE",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background: "#6069BE",
    marginTop: 100,
    marginBottom: 100,
  },
  ment: {
    width: 1100,
    height: 300,
  },

  center: {
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    backgroundColor: "rgba(15, 29, 160, 0.65)",
  },

  largeLogo: {
    position: "relative",
    display: "flex",
    width: 983,
    marginTop: 200,
    marginBottom: 150,
  },

  MainButton: {
    position: "relative",
    height: 608,
    width: 672,
  },
  TitleButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 150,
    marginRight: 150,
    height: 150,
    width: 150,
  },
  footer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  Header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: 150,
  },
  padding: {
    paddingTop: 190,
    paddingBottom: 190,
  },
  searchResult: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    paddingTop: 150,
    paddingBottom: 150,
  },
  MiniButton: {
    position: "relative",
    height: 300,
    width: 320,
    margin: 20,
  },
  cards: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  detailUpper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 50,
    marginRight: 50,
    margin: 110,
  },
  detailUpperButton: {
    marginLeft: 20,
    marginRight: 20,
    marginBottom: 100
  },
  detailBorrowStatus: {
    marginLeft: 10,
    marginRight: 10,
  },
  RelatedBooks: {
    backgroundColor: "#223069",
    padding: 100,
    justifyContent: "center",
  },
  RelatedBookList: {
    marginLeft: 30,
    marginRight: 30,
  },
  horizontalScroll: {
    display:'flex', 
    overflow: 'auto', 
    whiteSpace: 'nowrap'
  }, 
  AcceptButton: {
    verticalAlign: "middle",
    display: "grid",
    zIndex: "1",
  },
  AcceptButtonText: {
    position: "absolute",
    top: "50 %",
    left: "150 %",
    transform: "translate(-50 %, -50 %)",
    zIndex: "1",
    fontFamily: "Noto Sans",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "130px",
    lineHeight: "177px",
    display: "flex",
    color: "#6069BE",
  },
  wrapper: {
    overflow: "scroll",
    width: 1300,
    height: 700,
    background: "#223069",
    boxShadow:
      "inset 4px 16px 40px rgba(0, 0, 0, 0.5), inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  wrapperSearch: {
    overflow: "scroll",
    width: 1300,
    height: 1600,
    background: "#223069",
    boxShadow:
      "inset 4px 16px 40px rgba(0, 0, 0, 0.5), inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
  },
  outerWrapper: {
    verticalAlign: "middle",
    display: "grid",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  outerWrapperSearch: {
    verticalAlign: "middle",
    display: "grid",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },
  keyboard: {
    marginTop: 130,
  },
  modal: {
    display:'flex', 
    width:1376, 
    height:1280, 
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  },
  star:{
    width:300,
    height:60
  }
}));
