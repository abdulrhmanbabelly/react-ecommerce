import { useMutation } from "@apollo/client";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import FormGroup from "@mui/material/FormGroup";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import React from "react";
import { Loading } from "../Components";
import { DELETE_USER, UPDATE_USER } from "../gql";
import { useUser } from "../hooks";
import { editAccountStyles, rtlTextFiled } from "../styles";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";

let EditAccount = () => {
  let { loading, error, user } = useUser(1);
  let [updateUser] = useMutation(UPDATE_USER);
  let [deleteUser] = useMutation(DELETE_USER);
  let { t } = useTranslation();
  let formik = useFormik({
    initialValues: {
      firstname: user.name.firstname,
      lastname: user.name.lastname,
      email: user.email,
      city: user.address.city,
      street: user.address.street,
      long: user.address.geolocation.long,
      lat: user.address.geolocation.lat,
      number: user.address.number,
      zipcode: user.address.zipcode,
      phone: user.phone,
      username: user.username,
      password: user.password,
    },
    validationSchema: Yup.object({
      firstname: Yup.string()
        .max(20, t("signUpPage.fnameErr1"))
        .min(3, t("signUpPage.fnameErr2"))
        .required(t("signUpPage.reqField")),
      lastname: Yup.string()
        .max(20, t("signUpPage.lnameErr1"))
        .min(3, t("signUpPage.lnameErr1"))
        .required(t("signUpPage.reqField")),
      email: Yup.string()
        .matches(
          /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/,
          t("signUpPage.emailErr")
        )
        .required(t("signUpPage.reqField")),
      city: Yup.string()
        .max(20, t("signUpPage.cityErr1"))
        .min(3, t("signUpPage.cityErr2"))
        .required(t("signUpPage.reqField")),
      street: Yup.string()
        .max(20, t("signUpPage.streetErr1"))
        .min(3, t("signUpPage.streetErr2"))
        .required(t("signUpPage.reqField")),
      username: Yup.string()
        .max(10, t("signUpPage.usernameErr1"))
        .min(5, t("signUpPage.usernameErr2"))
        .required(t("signUpPage.reqField")),
      password: Yup.string()
        .max(10, t("signUpPage.passwordErr1"))
        .min(5, t("signUpPage.passwordErr2"))
        .required(t("signUpPage.reqField")),
      zipcode: Yup.string().required(t("signUpPage.reqField")),
      phone: Yup.string().required(t("signUpPage.reqField")),
      long: Yup.number().required(t("signUpPage.reqField")),
      lat: Yup.number().required(t("signUpPage.reqField")),
      number: Yup.number().required(t("signUpPage.reqField")),
    }),
    onSubmit: async (values) => {
      await updateUser({
        variables: {
          input: {
            email: values.email,
            username: values.username,
            name: {
              firstname: values.firstname,
              lastname: values.lastname,
            },
            address: {
              city: values.city,
              street: values.street,
              number: values.number,
              zipcode: values.zipcode,
              geolocation: {
                lat: values.lat,
                long: values.long,
              },
            },
            phone: values.phone,
            password: values.password,
          },
          id: 1,
        },
      });
    },
  });
  if (loading) return <Loading width={100} height={100} />;
  if (error) return <h2>error</h2>;

  formik.values = {
    firstname: user.name.firstname,
    lastname: user.name.lastname,
    email: user.email,
    city: user.address.city,
    street: user.address.street,
    long: Number(user.address.geolocation.long),
    lat: Number(user.address.geolocation.lat),
    number: Number(user.address.number),
    zipcode: user.address.zipcode,
    phone: user.phone,
    username: user.username,
    password: user.password,
  };

  console.log(formik.values);

  let handleDelete = async (e) => {
    e.preventDefault();
    await deleteUser({
      variables: {
        id: 1,
      },
    });
    location.href = "/signUp";
  };

  return (
    <Box sx={editAccountStyles}>
      <form>
        <h2 className="text-center">{t("signUpPage.editAccountTitle")}</h2>
        <h5>{t("signUpPage.personalInfo")}</h5>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormGroup className="mb-3">
              <TextField
                sx={rtlTextFiled}
                name="email"
                variant="outlined"
                label={t("signUpPage.email")}
                defaultValue={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormGroup className="mb-3">
              <TextField
                sx={rtlTextFiled}
                type="text"
                name="username"
                variant="outlined"
                label={t("signUpPage.username")}
                defaultValue={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormGroup className="mb-3">
              <TextField
                sx={rtlTextFiled}
                type="text"
                name="firstname"
                variant="outlined"
                label={t("signUpPage.firstname")}
                defaultValue={formik.values.firstname}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstname && Boolean(formik.errors.firstname)
                }
                helperText={formik.touched.firstname && formik.errors.firstname}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormGroup className="mb-3">
              <TextField
                sx={rtlTextFiled}
                type="text"
                fullWidth
                label={t("signUpPage.lastname")}
                autoComplete="family-name"
                defaultValue={formik.values.lastname}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastname && Boolean(formik.errors.lastname)
                }
                helperText={formik.touched.lastname && formik.errors.lastname}
              />
            </FormGroup>
          </Grid>
        </Grid>
        <h5>{t("signUpPage.address")}</h5>
        <Grid container spacing={1}>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormGroup>
              <TextField
                sx={rtlTextFiled}
                type="text"
                fullWidth
                id="city"
                name="city"
                label={t("signUpPage.city")}
                autoFocus
                defaultValue={formik.values.city}
                onChange={formik.handleChange}
                error={formik.touched.city && Boolean(formik.errors.city)}
                helperText={formik.touched.city && formik.errors.city}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormGroup>
              <TextField
                sx={rtlTextFiled}
                type="text"
                fullWidth
                name="street"
                label={t("signUpPage.street")}
                defaultValue={formik.values.street}
                onChange={formik.handleChange}
                error={formik.touched.street && Boolean(formik.errors.street)}
                helperText={formik.touched.street && formik.errors.street}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormGroup>
              <TextField
                sx={rtlTextFiled}
                fullWidth
                type="number"
                name="number"
                label={t("signUpPage.number")}
                defaultValue={formik.values.number}
                onChange={formik.handleChange}
                error={formik.touched.number && Boolean(formik.errors.number)}
                helperText={formik.touched.number && formik.errors.number}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormGroup>
              <TextField
                sx={rtlTextFiled}
                type="text"
                fullWidth
                label={t("signUpPage.zipcode")}
                name="zipcode"
                defaultValue={formik.values.zipcode}
                onChange={formik.handleChange}
                error={formik.touched.zipcode && Boolean(formik.errors.zipcode)}
                helperText={
                  formik.touched.zipcodenumber && formik.errors.zipcode
                }
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormGroup>
              <TextField
                sx={rtlTextFiled}
                type="number"
                fullWidth
                name="lat"
                label={t("signUpPage.lat")}
                defaultValue={formik.values.lat}
                onChange={formik.handleChange}
                error={formik.touched.lat && Boolean(formik.errors.lat)}
                helperText={formik.touched.lat && formik.errors.lat}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormGroup>
              <TextField
                sx={rtlTextFiled}
                type="number"
                fullWidth
                id="long"
                name="long"
                label={t("signUpPage.long")}
                defaultValue={formik.values.long}
                onChange={formik.handleChange}
                error={formik.touched.long && Boolean(formik.errors.long)}
                helperText={formik.touched.long && formik.errors.long}
              />
            </FormGroup>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <FormGroup className="mb-3">
              <TextField
                sx={rtlTextFiled}
                type="text"
                fullWidth
                label={t("signUpPage.phone")}
                name="phone"
                defaultValue={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </FormGroup>
          </Grid>
        </Grid>
        <h5>{t("signUpPage.password")}</h5>
        <FormGroup>
          <TextField
            sx={rtlTextFiled}
            fullWidth
            name="password"
            label={t("signUpPage.password")}
            type="password"
            autoComplete="new-password"
            defaultValue={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
        </FormGroup>
        <Box mt={1}>
          <Button type="submit" onClick={formik.handleSubmit}>
            {t("signUpPage.update")}
          </Button>
          <Button type="submit" onClick={handleDelete} mr={1}>
            {t("signUpPage.delete")}
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default EditAccount;
