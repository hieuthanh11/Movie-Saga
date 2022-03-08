import axios, { AxiosPromise } from "axios";
import { IAddFilm } from "../../interfaces/addFilmInterface";
import { addFilmApi } from "./endpoint";

export const addFilm = (value: IAddFilm): AxiosPromise<any> => {
  return axios({
    method: "POST",
    url: `${addFilmApi.ADD_FILM}`,
    data: value,
  });
};
