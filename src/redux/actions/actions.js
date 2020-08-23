import * as type from "../types";

const sumar = () => {
  return {
    type: type.SUMAR,
  };
};

const restar = () => {
  return {
    type: type.RESTAR,
  };
};

const logIn = (usuario) => {
  return {
    type: type.LOG_IN,
    payload: usuario,
  };
};

const logOut = () => {
  return {
    type: type.LOG_OUT,
  };
};

export default { sumar, restar, logIn, logOut };
