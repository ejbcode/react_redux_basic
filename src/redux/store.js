import { combineReducers, createStore } from "redux";
import { contadorReducer } from "./reducers/contadorReducer";
import { loginReducer } from "./reducers/loginReducer";

const devTool =
  typeof window === "object" &&
  typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== "undefined"
    ? window.__REDUX_DEVTOOLS_EXTENSION__()
    : (f) => f;

const reducers = combineReducers({
  contador: contadorReducer,
  login: loginReducer,
})

const store = createStore(reducers, devTool);

export default store;
