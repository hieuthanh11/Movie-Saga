import { MovieType } from "../actions/movie/type";

const initialState = {
  pending: false,
  movieList: [],
  error: null,
};

const movieReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case MovieType.GET_LIST_MOVIE_ACTION:
      return {
        ...state,
        pending: true,
      };

    case MovieType.GET_LIST_MOVIE_SUCCESS:
      return {
        ...state,
        pending: false,
        movieList: action.payload.result,
        error: null,
      };

    case MovieType.GET_LIST_MOVIE_FAILURE:
      return {
        ...state,
        pending: false,
        movieList: [],
        error: action.payload.error,
      };

    default:
      return {
        ...state,
      };
  }
};

export default movieReducer;
