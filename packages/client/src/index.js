import React from "react";
import ReactDOM from "react-dom";
import store from "./redux";
import { Provider } from "react-redux";
import { ThemeProvider } from "styled-components";


import theme from "./theme";
import ProviderCombiner from "./util/ProviderCombiner";


// TODO preload state
// if (window.__PRELOADED_STATE__) {
// }

// Function to render the whole application
ReactDOM.render(
  <ProviderCombiner providers={[
    <Provider store={store}/>,
    <ThemeProvider theme={theme}/>
  ]}>
    <App/>
  </ProviderCombiner>,
  document.getElementById("root")
);

