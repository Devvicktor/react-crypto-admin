import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import appReducer from "./store/store";
import thunk from "redux-thunk";

const storeName = "STOCKUP";

const savedToLocalStorage = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(storeName, serializedState);
  } catch (e) {
    // ignore write errors;
    console.log("Error writing to local storage", e);
  }
};
const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem("state");
    if (serializedState === null) return undefined;
    return JSON.parse(serializedState);
  } catch (e) {
    // ignore read errors;
    console.log("Error reading from local storage", e);
  }
};
const middleware = [thunk];
const persistedStorage = loadFromLocalStorage();

const store = createStore(
  appReducer,
  persistedStorage,
  composeWithDevTools(applyMiddleware(...middleware))
);
store.subscribe(() => {
  savedToLocalStorage(store.getState());
});
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
