import { combineReducers } from "redux";
import contadorReducer from "./contadorReducer";
import loginReducer from "./loginReducer";

export default combineReducers({
  contador: contadorReducer,
  login: loginReducer,
});
