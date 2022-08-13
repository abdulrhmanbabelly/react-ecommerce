import { createUseStyles } from "react-jss";

let useFooterStyles = createUseStyles({
    footer : {
        borderTop : '1px solid #ccc',
        "& input, ::placeholder, label" : {
            color : '#fff !important',
        },
        "& fieldset" : {
            border : '.1px solid #fff !important',
        },
        backgroundColor : (props) => `${props.palette.mode === 'light' ? '#1976d2' : '#121212' }`,
        color : '#fff',
        "& a" : {
            textDecoration : 'none'
        }
    }
});

export default useFooterStyles;