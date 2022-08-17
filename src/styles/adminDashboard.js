
let adminDashboardStyles = {
    display : 'flex',
    "& a" : {
        textDecoration : "none",
        color : (props) => `${props.palette.mode === 'light' ? '#1976d2' : '#fff' }`
    },
    "& .MuiListItemIcon-root" : {
        minWidth : "0 !important",
        marginRight : "1.5vw"
    },
    form : {
        "& > div" : {
            marginBottom: "1vw",
            marginTop: "1vw"
        }
    }
}

export default adminDashboardStyles;