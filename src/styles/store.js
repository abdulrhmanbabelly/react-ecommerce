import { createUseStyles } from "react-jss";

let useStoreStyles = createUseStyles((theme) => ({
    store : {
        paddingTop: "1vw",
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
        '& .filterButton' : {
            marginLeft : 'auto',
            marginRight : '1vw'
        }
    }
}));

export default useStoreStyles;