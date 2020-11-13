import { types } from "../types/types";

export const contadorReducer = (state = 0, action) => {
  switch (action.type) {
    case types.SUMAR:
      return state + 1;

    case types.RESTAR:
      return state - 1;

    default:
      return state;
  }
}