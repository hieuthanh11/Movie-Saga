import {
  getMovieFailure,
  getMovieSuccess,
} from "./../redux/actions/movie/action";
import {
  all,
  call,
  CallEffect,
  put,
  PutEffect,
  takeLatest,
} from "redux-saga/effects";
import { getMovieList } from "../api/movieApi/api";
import { MovieType } from "../redux/actions/movie/type";
import { AxiosResponse } from "axios";
import { IMovie } from "../interfaces/movieInterface";

function* actionMovieSaga(): Generator<
  | CallEffect<AxiosResponse<IMovie, any>>
  | PutEffect<{
      type: MovieType;
      payload: any;
    }>,
  void,
  any
> {
  try {
    const response = yield call(getMovieList);
    // console.log(response, "response");

    yield put(
      getMovieSuccess({
        result: response.data,
      })
    );
  } catch (error) {
    let temp = error as any;
    yield put(
      getMovieFailure({
        error: temp.message,
      })
    );
  }
}

function* movieSaga() {
  yield all([takeLatest(MovieType.GET_LIST_MOVIE_ACTION, actionMovieSaga)]);
}

export default movieSaga;
