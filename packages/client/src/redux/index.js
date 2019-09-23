import { applyMiddleware, createStore } from "redux";
import createSagaMiddleware from "redux-saga";

import reducer from "./reducers";
import saga from "./sagas";

export const applicationStore = () => {
  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(reducer, null, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(saga);
  return store;
};
