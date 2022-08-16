import { createUseStyles } from "react-jss";

let useEditAccountStyles = createUseStyles((theme) => ({
    editAccount : {
        margin: "3vw auto",
        padding: "1vw",
        width: "90%",
        boxShadow: "0px 2px 1px -1px rgb(0,0,0, 20%), 0px 1px 1px 0px rgb(0,0,0, 14%), 0px 1px 3px 0px rgb(0,0,0, 12%)",
        button : {
            marginRight: "1vw"
        },
        "& h2" :{
            textAlign : "center"
        },
        "& h5" : {
            margin : "1vw 0"
        }
    }
}));

export default useEditAccountStyles;