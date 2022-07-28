import { createUseStyles } from "react-jss";

let useCartsStyles = createUseStyles((theme) => ({
    carts : {
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
                padding: "1vw"
            },
            "& .paycard" : {
                color: "#fff",
                padding: "2vw",
                "& .checkoutButton" : {
                    width: "100% !important",
                    display: "flex",
                    justifyContent: "space-between"
                },
                "& .MuiOutlinedInput-root" : {
                    marginBottom: "1vw"
                }
            },
            "& ::placeholder, & label" : {
                color: "#fff"
            }
    
        },
        "& .MuiButton-containedSuccess , & .addToCartForm" : {
            marginLeft: "2vw",
            marginBottom: "1vw"
        },
        "& .addToCartForm" : {
            marginTop: "-.5vw",
            marginRight: "2vw",
            marginBottom: "1vw"
        }
    }
    
}));

export default useCartsStyles;