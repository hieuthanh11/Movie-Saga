import { AxiosResponse } from "axios";
import {
  all,
  call,
  CallEffect,
  put,
  PutEffect,
  takeLatest,
} from "redux-saga/effects";
import { addFilm } from "../api/addFilm/api";
import {
  addFilmActionError,
  addFilmActionSuccess,
} from "../redux/actions/addFilm/action";
import { AddFilmType } from "../redux/actions/addFilm/type";

function* addFilmActionSaga({
  value,
  callbackSuccess,
  callbackError,
}: any): Generator<
  | CallEffect<AxiosResponse<any, any>>
  | PutEffect<{
      type: AddFilmType;
      payload: any;
    }>,
  void,
  any
> {
  try {
    const response = yield call(addFilm, value);
    console.log(response, "response");

    yield put(
      addFilmActionSuccess({
        result: response.data,
      })
    );

    yield callbackSuccess();
  } catch (error) {
    let temp = error as any;
    yield put(
      addFilmActionError({
        error: temp,
      })
    );
    yield callbackError();
  }
}

function* addFilmSaga() {
  yield all([takeLatest(AddFilmType.ADD_FILM_ACTION, addFilmActionSaga)]);
}

export default addFilmSaga;
