import { DatePicker, LocalizationProvider } from "@mui/lab";
import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { Img } from "../../components/Common/HTMLTags/HTMLTags";
import { GROUP_ID } from "../../constants/common";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { addFilmAction } from "../../redux/actions/addFilm/action";
const AddFilm = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [value, setValue] = React.useState<string | null>(
    new Date().toLocaleDateString("en-GB")
  );

  const [selectFile, setSelectFile] = React.useState<File>({} as File);

  console.log(typeof selectFile, "selectFile");

  const [imgSrc, setImgSrc] = React.useState<string | null>();

  // const [valueSwitch, setValueSwitch] = React.useState<boolean>(false);
  // console.log(valueSwitch, "valueSwitch");

  const handleChangeFile = (event: any) => {
    console.log(event.target.files[0].name, "event.target.files[0]");
    let file: File = event.target.files[0];
    console.log(typeof file, "file");

    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    ) {
      // await formik.setFieldValue("hinhAnh", file);
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event: any) => {
        setImgSrc(event.target.result);
      };
      // reader.readAsText(file);
      setSelectFile(file);
    }
  };

  // const handleChangeSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(event.target.checked, "event");
  //   let value = event.target.checked;
  //   setValueSwitch(value);
  // };

  // React.FormEvent<HTMLFormElement>
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const dataFile = new FormData();
    // let a = dataFile.append("File", selectFile, selectFile?.name);
    // console.log(a, "a");

    const value = {
      tenPhim: data.get("tenPhim"),
      trailer: data.get("trailer"),
      moTa: data.get("moTa"),
      ngayKhoiChieu: data.get("ngayKhoiChieu"),
      dangChieu: data.has("dangChieu"),
      sapChieu: data.has("sapChieu"),
      hot: data.has("hot"),
      danhGia: data.get("danhGia"),
      hinhAnh: data.append("File", selectFile, selectFile?.name),
      // hinhAnh: dataFile,
      maNhom: GROUP_ID,
    };
    console.log(value, "value");

    const callbackSuccess = () => {
      history.push("/home");
    };

    const callbackError = () => {};
    dispatch(addFilmAction(data, callbackSuccess, callbackError));
  };

  return (
    <Box>
      <Typography
        sx={{ paddingTop: "20px" }}
        variant='h3'
        align='center'
        color='secondary.contrastText'
      >
        Create New Movie
      </Typography>

      <Box display='flex' justifyContent='center' padding='50px 0'>
        <Box width={500} component='form' onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label='Tên Phim'
            name='tenPhim'
            margin='normal'
          />
          <TextField fullWidth label='Trailer' name='trailer' margin='normal' />
          <TextField fullWidth label='Mô Tả' name='moTa' margin='normal' />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label='Ngày Chiếu'
              inputFormat='dd/MM/yyyy'
              openTo='year'
              views={["year", "month", "day"]}
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => (
                <TextField name='ngayKhoiChieu' {...params} />
              )}
            />
          </LocalizationProvider>

          <FormGroup>
            <FormControlLabel
              control={<Switch defaultChecked name='dangChieu' />}
              label='Đang Chiếu'
            />
          </FormGroup>

          <FormGroup>
            <FormControlLabel
              control={<Switch defaultChecked name='sapChieu' />}
              label='Sắp Chiếu'
            />
          </FormGroup>

          <FormGroup>
            <FormControlLabel
              control={<Switch defaultChecked name='hot' />}
              label='Hot'
            />
          </FormGroup>

          <TextField
            type='number'
            label='Đánh Giá'
            name='danhGia'
            margin='normal'
            sx={{ display: "block" }}
          />

          <Button variant='contained' component='label'>
            Upload File
            <input
              name='hinhAnh'
              type='file'
              hidden
              accept='image/png,image/jpeg,image/gif,image/png'
              onChange={handleChangeFile}
            />
          </Button>
          <Img
            src={imgSrc}
            width={(100).toString()}
            height={(100).toString()}
            alt='avatar'
          />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddFilm;
