import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import client from "./config/apolloClient";
import { AlertContextProvider } from "./contexts/alertContext";
import "./config/i18n";
import { Provider } from "react-redux";
import store from './store/index';

// initiating dark mode
if (!localStorage.getItem("darkMode")) localStorage.setItem("darkMode", false);


let Index = () => {
  return (
    <ApolloProvider client={client}>
      <AlertContextProvider>
        <Provider store={store}>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </Provider>
      </AlertContextProvider>
    </ApolloProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
