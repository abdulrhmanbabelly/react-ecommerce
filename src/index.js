import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import App from "./app";
import './scss/index.scss';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from "react-router-dom";
import client from "./config/apolloClient";

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
        <ApolloProvider client={client}>
            <ThemeProvider theme={(darkMode) ? darkTheme : lightTheme}>
                <CssBaseline />
                <BrowserRouter>
                    <App mode = {mode} />
                </BrowserRouter>
            </ThemeProvider>
        </ApolloProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Index />
);

