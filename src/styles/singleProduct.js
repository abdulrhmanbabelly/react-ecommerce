
let singleProductStyles = {
    "& .MuiGrid-grid-md-6:nth-of-type(1)" : {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        "& img" : {
            width: "50%",
            padding : "2vw"
        }
    },
    "& > .MuiGrid-grid-md-6:nth-of-type(2)" : {
        padding: "2vw",
        "& button" : {
            marginRight: "1vw"
        }
    }
}

export default singleProductStyles;