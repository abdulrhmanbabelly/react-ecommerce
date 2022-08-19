import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./app";
import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from "react-router-dom";
import client from "./config/apolloClient";
import { DARK_MODE, LOGGED_IN, PRICES } from "./gql";
import { AlertContextProvider } from "./contexts/alertContext";

// initiating dark mode

if (!localStorage.getItem('darkMode')) localStorage.setItem('darkMode',false);

client.writeQuery({
    query : DARK_MODE,
    data : {
        on : localStorage.getItem('darkMode')
    }
});

client.writeQuery({
    query : LOGGED_IN,
    data : {
      loggedIn : localStorage.getItem('token') ? true : false
    }
  });


let Index = () => {


    return (
        <ApolloProvider client={client}>
            <AlertContextProvider>
                <BrowserRouter>
                    <App />
                </BrowserRouter>
            </AlertContextProvider>
        </ApolloProvider>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <Index />
);

