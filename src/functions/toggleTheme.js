import client from "../config/apolloClient";
import { DARK_MODE } from "../gql";

const toggleTheme = () => {
    
    let darkMode = localStorage.getItem('darkMode');
    if (darkMode === "false") darkMode = true;
    else darkMode = false
    localStorage.setItem('darkMode', darkMode ? "true" : "false");
    client.writeQuery({
        query : DARK_MODE,
        data : {
            on : localStorage.getItem('darkMode')
        }
    })

}
export default toggleTheme;