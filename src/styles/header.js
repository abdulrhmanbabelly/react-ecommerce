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
            color:  "#fff",
            textDecoration: "none",
            "&:hover" : {
                color: "#fff"
            }
        }
    }
}));

export default useHeaderStyles;