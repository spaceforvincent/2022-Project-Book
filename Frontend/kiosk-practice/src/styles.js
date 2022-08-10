import {makeStyles} from "@material-ui/core";

export const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        display: "flex",
        flexDirection: "column"
    },

    background: {
        background: "6069BE"
    },

    booklistBox: {
        width: 500,
        height: 200
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
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgorund: "#6069BE"
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
        backgorund: "#6069BE",
        marginTop: 100,
        marginBottom: 100
    },
    ment: {
        width: 1100,
        height: 300
    },

    center: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        backgroundColor: "rgba(15, 29, 160, 0.65)"
    },

    largeLogo: {
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
    miniMessage: {
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
        backgorund: "#6069BE",
        marginTop: 100,
        marginBottom: 100,
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
        paddingTop: 100,
    },
    padding: {
        paddingTop: 100
    },
    searchResult: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        paddingTop: 150,
        paddingBottom: 150
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
    },
    AcceptButton: {
        verticalAlign: "middle",
        display: "grid",
        justifyContent: "center"
    },
    AcceptButtonText: {
        position: "relative",
        top: "-300px",
        transform: "translate(-50 %, -50 %)",
        zIndex: "1",
        fontFamily: "Noto Sans",
        fontStyle: "normal",
        fontWeight: "700",
        fontSize: "130px",
        lineHeight: "177px"
    },
    wrapper: {
        overflow: "scroll",
        overflow: "auto",
        whiteSpace: "nowrap",
        width: 1300,
        height: 900,
        background: "#223069",
        boxShadow: "inset 4px 16px 40px rgba(0, 0, 0, 0.5), inset 0px 4px 4px rgba(0, 0, 0, 0.25)"
    },
    wrapperSearch: {
        overflow: "scroll",
        width: 1300,
        height: 1630,
        background: "#223069",
        boxShadow: "inset 4px 16px 40px rgba(0, 0, 0, 0.5), inset 0px 4px 4px rgba(0, 0, 0, 0.25)"
    },
    innerwrapBtn: {
        float: "left",
        width: "50%",
        display: "grid",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    outerWrapper: {
        verticalAlign: "middle",
        display: "grid",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        whiteSpace: "nowrap",
    },
    outerWrapperSearch: {
        verticalAlign: "middle",
        display: "grid",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center"
    },
    boxBtn: {
        width: 500,
        height: 200,
        background: "#223069",
        boxShadow: "inset 4px 16px 40px rgba(0, 0, 0, 0.5), inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
        marginTop: 10,
        marginBottom: 100,
        lineHeight: "100%",
    },
    boxBtnCenter: {
        verticalAlign: "middle",
        display: "grid",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        whiteSpace: "nowrap",
    }
}));
