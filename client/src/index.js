import "materialize-css/dist/css/materialize.min.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import App from "./components/App";
import reduxThunk from "redux-thunk";

// Reducers
import reducers from "./reducers/";

// creating instance of our Redux Store
const store = createStore(reducers, applyMiddleware(reduxThunk));
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);

console.log("STRIPE KEY => ", process.env.REACT_APP_STRIPE_KEY);
console.log("Environment is  => ", process.env.NODE_ENV);
