import { createStore } from "redux";
import reducer from "./reducers";

const devTool =
  typeof window === "object" &&
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f;

const store = createStore(reducer, devTool);

export default store;
