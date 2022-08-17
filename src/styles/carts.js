
let cartsStyles = (props) => {
    return ({ 
        "& .cart" : {
        padding: "2vw",
        margin: "1vw auto",
        width: "95vw",
        "& svg": {
            width: "25px",
            height: "25px",
            margin: ".1vw"
        },
        "& .cartProduct:first-of-type" : {
            marginTop: 0
        },
        "& .cartProduct" : {
            margin: "1vw",
            padding: "1vw",
            "& img" : {
                width : "50%"
            }
        },
        "& .paycard" : {
            padding: "2vw",
            color : '#fff !important',
            "& input, ::placeholder, label" : {
                color : '#fff !important',
            },
            "& fieldset" : {
                border : '.1px solid #fff !important',
            },
            background : (props) => `${props.palette.mode === 'light' ? '#1976d2' : '#121212' }`,
                "& .checkoutButton" : {
                width: "100% !important",
                display: "flex",
                justifyContent: "space-between",
                "& .check" : {
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems : 'center'
                }
            },
            "& .MuiOutlinedInput-root" : {
                marginBottom: "1vw"
            }
        },

    },
    "& .MuiButton-containedSuccess , & .addToCartForm" : {
        marginLeft: "2vw",
        marginBottom: "1vw"
    },
    "& .addToCartForm" : {
        marginTop: "-.5vw",
        marginRight: "2vw",
        marginBottom: "1vw"
    }})
}
    

export default cartsStyles;