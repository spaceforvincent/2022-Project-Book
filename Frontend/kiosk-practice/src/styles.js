import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    },

    background: {
        color: "#ffffff"
    },

    main: {
        flex: 1,
        overflow: "auto",
        flexDirection: "column",
        display: "flex",
        color: "#ffffff"
    },
    title: {
        marginTop: 10,
        marginBottom: 100,
        width: 500,
        height: 200
    },
    TitleMessage: {
        fontFamily: "'Noto Sans'",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "130px",
        color: "#FFFFFF",   
        textShadow: "0 16px 40px rgba(0, 0, 0, 0.25), 0 16px 40px #6068BE",

    },
    ment: {
        width: 1100,
        height: 300
    },

    center: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "rgba(15, 29, 160, 0.65)"
    },

    largeLogo: {
        position: "relative",
        display: "flex",
        width: 983,
        marginTop: 30,
        marginBottom: 30
    },

    MainButton: {
        position: "relative",
        height: 608,
        width: 672
    },
    TitleButton: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 150,
        marginRight: 150,
        height: 150,
        width: 150
    },
    footer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    Header: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        paddingTop: 150,
        paddingBottom: 150,
    },
    padding: {
        paddingTop: 150,
        paddingBottom: 150,
    },
    MiniButton: {
        position: "relative",
        height: 300,
        width: 320,
        margin: 20
    },
    cards: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    searchbar: {
        width: 1000,
        height: 1000
    },
    detailUpper: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginLeft: 30,
        marginRight: 30
    },
    detailUpperButton: {
        marginTop: 30,
        marginLeft: 20,
        marginRight: 20
    },
    detailBorrowStatus: {
        marginLeft: 10,
        marginRight: 10
    },
    RelatedBooks: {
        backgroundColor: "#223069",
        padding: 100,
        justifyContent: "center"
    },
    RelatedBookList: {
        marginLeft: 30,
        marginRight: 30
    }
}));
