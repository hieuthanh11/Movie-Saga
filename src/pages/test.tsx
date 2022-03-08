import React, { useState } from "react";
import { Box } from "@mui/system";
import {
  Button,
  FormControlLabel,
  FormGroup,
  Stack,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import { DesktopDatePicker, LocalizationProvider } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { useFormik } from "formik";
import moment from "moment";
import { useDispatch } from "react-redux";
import * as yup from "yup";
import { GROUP_ID } from "../constants/common";
import { addFilmAction } from "../redux/actions/addFilm/action";
import { useHistory } from "react-router-dom";
const schema = yup.object().shape({
  tenPhim: yup.string().required(),
  trailer: yup.string().url(),
  moTa: yup.string().required(),
  danhGia: yup.string().required(),
  hinhAnh: yup.string().required(),
});

const AddFilmAd = () => {
  const [value, setValue] = useState(new Date());
  const [imgSrc, setImgSrc] = useState("");
  const dispatch = useDispatch();
  const history = useHistory();
  const handleChange = (newValue: any) => {
    setValue(newValue);
    let ngayKhoiChieu = moment(newValue).format("DD/MM/yyyy");
    formik.setFieldValue("ngayKhoiChieu", ngayKhoiChieu);
  };

  const handleChangeSwitch = (name: any) => {
    return (e: any) => {
      formik.setFieldValue(name, e.target.checked);
    };
  };

  const handleChangeFile = async (e: any) => {
    let file = e.target.files[0];
    if (
      file.type === "image/jpeg" ||
      file.type === "image/jpg" ||
      file.type === "image/gif" ||
      file.type === "image/png"
    ) {
      await formik.setFieldValue("hinhAnh", file);

      let reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (e: any) => {
        setImgSrc(e.target.result);
      };
    }
  };

  const formik = useFormik({
    initialValues: {
      tenPhim: "",
      trailer: "",
      moTa: "",
      ngayKhoiChieu: "",
      dangChieu: true,
      sapChieu: true,
      hot: true,
      danhGia: 0,
      hinhAnh: {},
      maNhom: GROUP_ID,
    },
    validationSchema: schema,
    validateOnBlur: true,
    validateOnMount: true,
    onSubmit: (values: any) => {
      let formData = new FormData();
      for (let key in values) {
        if (key !== "hinhAnh") {
          formData.append(key, values[key]);
        } else {
          formData.append("File", values.hinhAnh, values.hinhAnh.name);
        }
      }

      console.log(values, "values");
      console.log(values.hinhAnh, "values.hinhAnh");
      console.log(values.hinhAnh.name, "values.hinhAnh.name");

      const callbackSuccess = () => {
        history.push("/home");
      };

      const callbackError = () => {};
      // dispatch(addFilmAction(formData, callbackSuccess, callbackError));
    },
  });

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
        <Box onSubmit={formik.handleSubmit} width={500} component='form'>
          <TextField
            fullWidth
            label='Tên Phim'
            name='tenPhim'
            margin='normal'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.tenPhim && !!formik.errors.tenPhim}
            helperText={formik.touched.tenPhim && formik.errors.tenPhim}
          />
          <TextField
            fullWidth
            label='Trailer'
            name='trailer'
            margin='normal'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.trailer && !!formik.errors.trailer}
            helperText={formik.touched.trailer && formik.errors.trailer}
          />
          <TextField
            fullWidth
            label='Mô Tả'
            name='moTa'
            margin='normal'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.moTa && !!formik.errors.moTa}
            helperText={formik.touched.moTa && formik.errors.moTa}
          />

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <Stack spacing={3}>
              <DesktopDatePicker
                label='Date'
                inputFormat='dd/MM/yyyy'
                value={value}
                onChange={handleChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>

          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  onChange={handleChangeSwitch("dangChieu")}
                  defaultChecked
                />
              }
              label='Đang Chiếu'
            />
          </FormGroup>

          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  onChange={handleChangeSwitch("sapChieu")}
                  defaultChecked
                />
              }
              label='Sắp Chiếu'
            />
          </FormGroup>

          <FormGroup>
            <FormControlLabel
              control={
                <Switch onChange={handleChangeSwitch("hot")} defaultChecked />
              }
              label='Hot'
            />
          </FormGroup>

          <TextField
            fullWidth
            type='number'
            label='Đánh Giá'
            name='danhGia'
            margin='normal'
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            error={formik.touched.danhGia && !!formik.errors.danhGia}
            helperText={formik.touched.danhGia && formik.errors.danhGia}
          />

          <TextField
            type='file'
            fullWidth
            name='hinhAnh'
            margin='normal'
            onChange={handleChangeFile}
            // accept='image/png, image/jpeg,image/gif,image/png'
          />
          <img width={100} height={100} src={imgSrc} alt='hinhAnh' />
          <Button
            type='submit'
            fullWidth
            variant='contained'
            sx={{ mt: 3, mb: 2 }}
          >
            Create Film
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default AddFilmAd;
