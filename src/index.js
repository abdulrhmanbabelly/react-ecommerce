import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import App from "./app";
import './scss/index.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";


let Index = () => {

    let [darkMode, setDarkMode] = useState(false);
    let mode = {
        setDarkMode : setDarkMode,
        darkMode : darkMode
    }

    let darkTheme = createTheme({
        palette: {
            mode: 'dark',
        }
    })

    let lightTheme = createTheme({
        palette: {
            mode: 'light',
        }
    })
    

    return (
        <ThemeProvider theme={(darkMode) ? darkTheme : lightTheme}>
            <CssBaseline />
            <App mode = {mode} />
        </ThemeProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Index />
);


