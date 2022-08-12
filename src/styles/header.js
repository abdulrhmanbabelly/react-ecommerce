import { createUseStyles } from "react-jss";

let useHeaderStyles = createUseStyles((theme) => ({
    header : {
        "& button" : {
            width: "3vw",
            height: "3vw",
            padding: "2vw !important",
            marginLeft: ".4vw !important",
        },
        "& a" : {
            color : "#fff !important",
            textDecoration: "none !important",
            display : "flex",
            alignItems : "center",
            "&:hover" : {
                color: "#fff"
            }
        },
        "& li a" : {
            color:  "rgba(0, 0, 0, 0.87) !important",
        }
    }
}));

export default useHeaderStyles;