
let storeStyles = {
    paddingTop: "1vw",
    width : "100vw",
    "& .product" : {
        marginBottom: "1vw",
        "& .image" : {
            padding : "2vw",
            display : 'flex',
            justifyContent : "center",
            width : '100%',
            '& img' : {
                width: "50% !important",    
                margin: "auto !important"
            }
        }
    },
}

export default storeStyles;