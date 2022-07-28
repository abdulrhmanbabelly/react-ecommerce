import { createUseStyles } from "react-jss";

let useSignInStyles = createUseStyles((theme) => ({
    signIn : {
        margin: "20vh auto",
        padding: "1vw",
        boxShadow: "0px 2px 1px -1px rgb(0,0,0, 20%), 0px 1px 1px 0px rgb(0,0,0, 14%), 0px 1px 3px 0px rgb(0,0,0, 12%)",
    }
}));

export default useSignInStyles;