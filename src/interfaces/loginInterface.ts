export interface ILogin {
  taiKhoan: FormDataEntryValue | null;
  matKhau: FormDataEntryValue | null;
}

export interface ILoginAction {
  value: {
    taiKhoan: FormDataEntryValue | null;
    matKhau: FormDataEntryValue | null;
  };
  callbackSuccess: Function;
  callbackError: Function;
}

export interface ILoginResponse {
  taiKhoan: string;
  hoTen: string;
  email: string;
  soDT: string;
  maNhom: string;
  maLoaiNguoiDung: string;
  accessToken: string;
}
