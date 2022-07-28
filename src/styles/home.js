import { createUseStyles } from "react-jss";

let useHomeStyles = createUseStyles((theme) => ({
    home : {
        "& .slider-container" : {
            padding: 0,
            '& div' : {
                position: "relative",
                '& span' : {
                    position: "absolute",
                    color: "rgba($color: #000000, $alpha: 0.8)",
                    background: "rgba($color: #fff, $alpha: 0.3)",
                    fontSize: "2vw",
                    left: "50%",
                    top: "50%",
                    transform: "translate(-50%,-50%)",
                    fontWeight: 700,
                },
                '& img' : {
                    width: "100% !important",
                    height: "86vh",
                    display: "block !important",
                    margin: "auto"
                }
            }
            
        }
    }
}));

export default useHomeStyles;