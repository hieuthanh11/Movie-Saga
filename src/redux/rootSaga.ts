import { all, fork } from "redux-saga/effects";
import addFilmSaga from "../saga/addFilmSaga";
import loginSaga from "../saga/loginSaga";
import movieSaga from "../saga/movieSaga";

export function* rootSaga() {
  yield all([fork(movieSaga), fork(loginSaga), fork(addFilmSaga)]);
}
