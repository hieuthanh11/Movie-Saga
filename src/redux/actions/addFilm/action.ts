import { AddFilmType } from "./type";

export const addFilmAction = (
  // value: {
  //   tenPhim: FormDataEntryValue | null;
  //   trailer: FormDataEntryValue | null;
  //   moTa: FormDataEntryValue | null;
  //   ngayKhoiChieu: FormDataEntryValue | null;
  //   dangChieu: boolean;
  //   sapChieu: boolean;
  //   hot: boolean;
  //   danhGia: FormDataEntryValue | null;
  //   // hinhAnh: FormDataEntryValue | null;
  //   hinhAnh: any;
  //   maNhom: string;
  // },
  value: any,
  callbackSuccess: Function,
  callbackError: Function
) => ({
  type: AddFilmType.ADD_FILM_ACTION,
  value,
  callbackSuccess,
  callbackError,
});

export const addFilmActionSuccess = (payload: any) => ({
  type: AddFilmType.ADD_FILM_ACTION_SUCCESS,
  payload,
});

export const addFilmActionError = (payload: any) => ({
  type: AddFilmType.ADD_FILM_ACTION_FAILURE,
  payload,
});
