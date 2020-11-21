import "@babel/polyfill"; // regenerator runtime is not defined
import React from "react";
import { renderToString, renderToStaticMarkup } from "react-dom/server";
import App from "./components/App";

const Template = () => (
  <html lang="en">
    <head>
      <meta charSet="UTF-8" />
      <title>My Meals</title>
    </head>
    <body>
      <div id="root">
        {"APP"}
      </div>
    </body>
  </html>
);

export default () => renderToStaticMarkup(<Template/>);//.replace("APP", renderToString(<App />));
