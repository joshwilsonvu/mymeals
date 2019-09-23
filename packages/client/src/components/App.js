import React from "react";
import { Provider } from "react-redux";
import { applicationStore } from "../redux";

const store = applicationStore();

const App = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

export default App;
