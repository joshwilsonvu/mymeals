import React from "react";
import { render, hydrate } from "react-dom";
import App from "./components/App";

// Render the whole application onto pre-rendered HTML
(PRERENDER ? hydrate : render)(<App />, document.getElementById("root"));
