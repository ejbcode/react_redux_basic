import { types } from "../types/types";


export const sumar = () => {
  return {
    type: types.SUMAR,
  };
};

export const restar = () => {
  return {
    type: types.RESTAR,
  };
};

export const logIn = (usuario) => {
  return {
    type: types.LOG_IN,
    payload: usuario,
  };
};

export const logOut = () => {
  return {
    type: types.LOG_OUT,
  };
};

