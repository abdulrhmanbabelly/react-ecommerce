import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import client from "./config/apolloClient";
import "./config/i18n";
import { Provider } from "react-redux";
import store from "./store/index";

// initiating dark mode
if (!localStorage.getItem("darkMode")) localStorage.setItem("darkMode", false);

let Index = () => {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ApolloProvider>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Index />);
