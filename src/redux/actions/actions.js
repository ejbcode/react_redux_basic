import { types } from "../types/types";


const sumar = () => {
  return {
    type: types.SUMAR,
  };
};

const restar = () => {
  return {
    type: types.RESTAR,
  };
};

const logIn = (usuario) => {
  return {
    type: types.LOG_IN,
    payload: usuario,
  };
};

const logOut = () => {
  return {
    type: types.LOG_OUT,
  };
};

export default { sumar, restar, logIn, logOut };
