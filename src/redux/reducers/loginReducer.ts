import { LoginType } from "../actions/login/type";

const initialState = {
  pending: false,
  loginRe: {},
  error: null,
};

const loginReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case LoginType.LOG_IN_ACTION:
      return {
        ...state,
        pending: true,
      };

    case LoginType.LOG_IN_SUCCESS:
      return {
        ...state,
        pending: false,
        loginRe: action.payload.result,
        error: null,
      };

    case LoginType.LOG_IN_FAILURE:
      return {
        ...state,
        pending: false,
        loginRe: {},
        error: action.payload.error,
      };

    default:
      return {
        ...state,
      };
  }
};

export default loginReducer;
