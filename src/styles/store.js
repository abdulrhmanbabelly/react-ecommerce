import { createUseStyles } from "react-jss";

let useStoreStyles = createUseStyles((theme) => ({
    store : {
        paddingTop: "1vw",
        "& .filter-wrapper" : {
            "& .filter" : {
                margin: "1vw",
                padding: "1vw",
                boxShadow: "0px 2px 1px -1px rgb(0,0,0, 20%), 0px 1px 1px 0px rgb(0,0,0, 14%), 0px 1px 3px 0px rgb(0,0,0, 12%)"
            },
            "& form" : {
                "& > div" : {
                    marginBottom: "1vw",
                    marginTop: "1vw"
                }
            }
        },
        "& .products" : {
            paddingBottom: "1vw"
        },
        "& .product" : {
            marginBottom: "1vw",
            "& img" : {
                width: "50% !important",    
                margin: "1vw auto !important"
            }
        },
        "& .footer" : {
            width: "100% !important",
            "& > div" : {
                width: "auto !important"
            }
        }
    }
}));

export default useStoreStyles;