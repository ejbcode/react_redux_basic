import { combineReducers, createStore, compose } from "redux";
import { contadorReducer } from "./reducers/contadorReducer";
import { loginReducer } from "./reducers/loginReducer";

const composeEnhancers =
  (typeof window !== 'undefined' &&
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
  compose;

const reducers = combineReducers({
  contador: contadorReducer,
  login: loginReducer,
})

const store = createStore(reducers, composeEnhancers());


export default store;
