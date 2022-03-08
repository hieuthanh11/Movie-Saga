import axios, { AxiosPromise } from "axios";
import { ILogin, ILoginResponse } from "../../interfaces/loginInterface";
import { LoginApi } from "./endpoint";

export const login = (value: ILogin): AxiosPromise<ILoginResponse> => {
  // console.log(value, "value");

  return axios({
    method: "POST",
    url: `${LoginApi.LOG_IN}`,
    data: value,
  });
};
