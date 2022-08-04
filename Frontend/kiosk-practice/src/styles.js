import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
  },

  background: {
    backgroundColor: "rgba(15, 29, 160, 0.65)",
    color: "#ffffff",
  },

  main: {
    flex: 1,
    overflow: "auto",
    flexDirection: "column",
    display: "flex",
    color: "#ffffff",
  },

  title: { marginTop: 30 },

  ment: {
    width: 1100,
    height: 300,
  },

  center: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  largeLogo: {
    position: "relative",
    display: "flex",
    width: 983,
    marginTop: 30,
    marginBottom: 30,
  },

  MainButton: {
    position: "relative",
    height: 608,
    width: 672,
  },

  footer: {
    display: "flex",
    flexDirection: "row",
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
  searchbar: {
    width: 1000,
    height: 1000,
  },
}));
