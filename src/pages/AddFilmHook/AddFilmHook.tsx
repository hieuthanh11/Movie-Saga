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
import { useForm, Controller } from "react-hook-form";
import moment from "moment";
const AddFilmHook = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const { register, handleSubmit, setValue, control } = useForm();

  const [value, setValue1] = React.useState<string | null>(
    new Date().toLocaleDateString("en-GB")
  );

  // const [selectFile, setSelectFile] = React.useState<File>({} as File);

  // console.log(typeof selectFile, "selectFile");

  const [imgSrc, setImgSrc] = React.useState<string | null>();

  // const [valueSwitch, setValueSwitch] = React.useState<boolean>(false);
  // console.log(valueSwitch, "valueSwitch");

  const handleChangeFile = async (event: any) => {
    console.log(event.target.files[0], "event.target.files[0]");
    let file: File = event.target.files[0];

    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    ) {
      await setValue("hinhAnh", file);
      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event: any) => {
        setImgSrc(event.target.result);
      };
      // reader.readAsText(file);
      // setSelectFile(file);
    }
  };

  // const handleSubmit = (event: any) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);
  //   const dataFile = new FormData();
  //   let a = dataFile.append("File", selectFile, selectFile?.name);
  //   console.log(a, "a");

  //   const value = {
  //     tenPhim: data.get("tenPhim"),
  //     trailer: data.get("trailer"),
  //     moTa: data.get("moTa"),
  //     ngayKhoiChieu: data.get("ngayKhoiChieu"),
  //     dangChieu: data.has("dangChieu"),
  //     sapChieu: data.has("sapChieu"),
  //     hot: data.has("hot"),
  //     danhGia: data.get("danhGia"),
  //     hinhAnh: data.append("File", selectFile, selectFile?.name),
  //     // hinhAnh: dataFile,
  //     maNhom: GROUP_ID,
  //   };
  //   console.log(value, "value");

  //   const callbackSuccess = () => {
  //     history.push("/home");
  //   };

  //   const callbackError = () => {};
  //   dispatch(addFilmAction(value, callbackSuccess, callbackError));
  // };

  const handleChangeSwitch = (name: string) => {
    return (event: any) => {
      setValue(name, event.target.checked);
    };
  };

  const handleSubmitForm = (values: any) => {
    let formData = new FormData();
    // setValue("maNhom", GROUP_ID);
    for (let key in values) {
      if (key !== "hinhAnh") {
        formData.append(key, values[key]);
      } else {
        formData.append("File", values.hinhAnh, values.hinhAnh.name);
      }
    }
    // console.log(values, "values");

    const callbackSuccess = () => {
      history.push("/home");
    };

    const callbackError = () => {};
    dispatch(addFilmAction(formData, callbackSuccess, callbackError));
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
        <Box
          width={500}
          component='form'
          onSubmit={handleSubmit(handleSubmitForm)}
        >
          <TextField
            fullWidth
            label='Tên Phim'
            margin='normal'
            {...register("tenPhim")}
          />
          <TextField
            fullWidth
            label='Trailer'
            margin='normal'
            {...register("trailer")}
          />
          <TextField
            fullWidth
            label='Mô Tả'
            margin='normal'
            {...register("moTa")}
          />

          <TextField
            fullWidth
            label='Mã Nhóm'
            margin='normal'
            {...register("maNhom")}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              label='Ngày Chiếu'
              inputFormat='dd/MM/yyyy'
              openTo='year'
              views={["year", "month", "day"]}
              value={value}
              onChange={(newValue) => {
                setValue1(newValue);
                let ngayKhoiChieu = moment(newValue).format("DD/MM/yyyy");
                setValue("ngayKhoiChieu", ngayKhoiChieu);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>

          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  onChange={handleChangeSwitch("dangChieu")}
                />
              }
              label='Đang Chiếu'
            />
          </FormGroup>

          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  defaultChecked
                  onChange={handleChangeSwitch("sapChieu")}
                />
              }
              label='Sắp Chiếu'
            />
          </FormGroup>

          <FormGroup>
            <FormControlLabel
              control={
                <Switch defaultChecked onChange={handleChangeSwitch("hot")} />
              }
              label='Hot'
            />
          </FormGroup>

          <TextField
            type='number'
            label='Đánh Giá'
            margin='normal'
            sx={{ display: "block" }}
            {...register("danhGia")}
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

export default AddFilmHook;
