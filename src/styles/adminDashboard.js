import { createUseStyles } from "react-jss";

let useAdminDashboardStyles = createUseStyles((theme) => ({
    adminDashboard : {
        "& a" : {
            textDecoration : "none"
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
    },
}));

export default useAdminDashboardStyles;