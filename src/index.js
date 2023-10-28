import React from "react";
import ReactDOM from "react-dom/client";
import Router from "./pages/Router/Router";
import "./assets/styles/normalize.scss"
import "./assets/styles/index.scss";
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Router />
  </BrowserRouter>
);

