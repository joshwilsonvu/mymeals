import React from "react";
import ReactDOM from "react-dom";
import { applicationStore } from "./redux";
import { Provider } from "react-redux";

//import theme from "./theme";
import App from "./pages/index";

const store = applicationStore();

// Function to render the whole application
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
