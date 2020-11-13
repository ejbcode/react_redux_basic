import { types } from "../types/types";

const initialState = { usuario: null, usuarioLogueado: false };

export const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LOG_OUT:
      return { ...state, usuario: null, usuarioLogueado: false };

    case types.LOG_IN:
      return { ...state, usuario: action.payload, usuarioLogueado: true };

    default:
      return state;
  }
}
