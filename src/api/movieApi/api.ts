import axios, { AxiosPromise } from "axios";
import { GROUP_ID } from "../../constants/common";
import { IMovie } from "../../interfaces/movieInterface";
import { MovieApi } from "./endpoint";

export const getMovieList = (): AxiosPromise<IMovie> => {
  return axios({
    method: "GET",
    url: `${MovieApi.GET_LIST_MOVIE}?maNhom=${GROUP_ID}`,
  });
};
