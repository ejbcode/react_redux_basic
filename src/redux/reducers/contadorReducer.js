import * as type from "../types";

export default function (state = 0, action) {
  switch (action.type) {
    case type.SUMAR:
      return state + 1;

    case type.RESTAR:
      return state - 1;

    default:
      return state;
  }
}
