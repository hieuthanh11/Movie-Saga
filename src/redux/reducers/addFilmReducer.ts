import { AddFilmType } from "../actions/addFilm/type";

const initialState = {
  pending: false,
  addFilmRe: {},
  error: null,
};

const addFilmReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case AddFilmType.ADD_FILM_ACTION:
      return {
        ...state,
        pending: true,
      };

    case AddFilmType.ADD_FILM_ACTION_SUCCESS:
      return {
        ...state,
        pending: false,
        addFilmRe: action.payload.result,
        error: null,
      };

    case AddFilmType.ADD_FILM_ACTION_FAILURE:
      return {
        ...state,
        pending: false,
        addFilmRe: {},
        error: action.payload.error,
      };

    default:
      return {
        ...state,
      };
  }
};

export default addFilmReducer;
