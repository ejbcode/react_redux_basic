import * as type from "../types";

const initialState = { usuario: null, usuarioLogueado: false };

export default function (state = initialState, action) {
  switch (action.type) {
    case type.LOG_OUT:
      return { ...state, usuario: null, usuarioLogueado: false };

    case type.LOG_IN:
      return { ...state, usuario: action.payload, usuarioLogueado: true };

    default:
      return state;
  }
}
