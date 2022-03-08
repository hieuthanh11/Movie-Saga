import { MovieType } from "./type";

export const getMovieRequest = () => ({
  type: MovieType.GET_LIST_MOVIE_ACTION,
});

export const getMovieSuccess = (payload: any) => ({
  type: MovieType.GET_LIST_MOVIE_SUCCESS,
  payload,
});

export const getMovieFailure = (payload: any) => ({
  type: MovieType.GET_LIST_MOVIE_FAILURE,
  payload,
});
