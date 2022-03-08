import { AxiosResponse } from "axios";
import {
  all,
  call,
  CallEffect,
  put,
  PutEffect,
  takeLatest,
} from "redux-saga/effects";
import { login } from "../api/login/api";
import { ILoginResponse } from "../interfaces/loginInterface";
import {
  loginActionFailure,
  loginActionSuccess,
} from "../redux/actions/login/action";
import { LoginType } from "../redux/actions/login/type";

function* actionLoginSaga({
  value,
  callbackSuccess,
  callbackError,
}: any): Generator<
  | CallEffect<AxiosResponse<ILoginResponse, any>>
  | PutEffect<{
      type: LoginType;
      payload: any;
    }>,
  void,
  any
> {
  // console.log(value, "value");

  try {
    const response = yield call(login, value);
    console.log(response, "response");

    yield put(
      loginActionSuccess({
        result: response.data,
      })
    );

    yield callbackSuccess(
      localStorage.setItem("token", response.data.accessToken)
    );
  } catch (error) {
    let temp = error as any;
    yield put(
      loginActionFailure({
        error: temp,
      })
    );
    yield callbackError();
  }
}

function* loginSaga() {
  yield all([takeLatest(LoginType.LOG_IN_ACTION, actionLoginSaga)]);
}

export default loginSaga;
