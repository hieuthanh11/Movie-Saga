export interface IAddFilm {
  tenPhim: FormDataEntryValue | null;
  trailer: FormDataEntryValue | null;
  moTa: FormDataEntryValue | null;
  ngayKhoiChieu: FormDataEntryValue | null;
  dangChieu: boolean;
  sapChieu: boolean;
  hot: boolean;
  danhGia: FormDataEntryValue | null;
  // hinhAnh: FormDataEntryValue | null;
  hinhAnh: any;
  maNhom: string;
}
