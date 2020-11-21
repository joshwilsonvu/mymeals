import React from "react";
import { render, hydrate } from "react-dom";
import App from "./components/App";

// Render the whole application onto pre-rendered HTML
const ren = process.env.NODE_ENV === "production" ? hydrate : render;
ren(<App />, document.getElementById("root"));
