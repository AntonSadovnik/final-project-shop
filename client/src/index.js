import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "./store/store";
import {theme} from "./Styles/Theme";
import {ThemeProvider} from "@mui/material";

ReactDOM.render(
  <React.StrictMode>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </BrowserRouter>
      </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
