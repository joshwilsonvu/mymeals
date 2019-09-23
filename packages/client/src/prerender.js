import "@babel/polyfill"; // regenerator runtime is not defined
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./components/App";

// This HTML string will be injected into <body>:
export default `<div id="root">${renderToString(<App />)}</div>`;
