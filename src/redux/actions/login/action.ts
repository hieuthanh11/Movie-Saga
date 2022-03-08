import { LoginType } from "./type";
export const loginAction = (
  value: {
    taiKhoan: FormDataEntryValue | null;
    matKhau: FormDataEntryValue | null;
  },
  callbackSuccess: Function,
  callbackError: Function
) => ({
  type: LoginType.LOG_IN_ACTION,
  value,
  callbackSuccess,
  callbackError,
});

export const loginActionSuccess = (payload: any) => ({
  type: LoginType.LOG_IN_SUCCESS,
  payload,
});

export const loginActionFailure = (payload: any) => ({
  type: LoginType.LOG_IN_FAILURE,
  payload,
});
