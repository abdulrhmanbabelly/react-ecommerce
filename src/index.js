import React, { useState } from "react";
import ReactDOM from 'react-dom/client';
import App from "./app";
import './scss/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from "@mui/material";
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { RestLink } from 'apollo-link-rest';

const fakestoreapi = new RestLink({ uri : "https://fakestoreapi.com/" })
const client = new ApolloClient({
    link: fakestoreapi,
    cache: new InMemoryCache(),
  });

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
                <App mode = {mode} />
            </ThemeProvider>
        </ApolloProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Index />
);


