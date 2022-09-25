import React from "react";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { ADD_USER } from "../gql";
import { useMutation } from "@apollo/client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { signUpStyles } from "../styles";

let SignUp = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  let { t, i18n } = useTranslation();
  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  let [addUser] = useMutation(ADD_USER);

  let formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      city: "",
      street: "",
      zipcode: "",
      username: "",
      password: "",
      number: undefined,
      lat: undefined,
      long: undefined,
      phone: undefined,
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
      long: Yup.number().required(t("signUpPage.reqField")),
      lat: Yup.number().required(t("signUpPage.reqField")),
      phone: Yup.number().required(t("signUpPage.reqField")),
      zipcode: Yup.string().required(t("signUpPage.reqField")),
      number: Yup.number().required(t("signUpPage.reqField")),
    }),
    onSubmit: async (values) => {
      await addUser({
        variables: {
          input: {
            email: values.email,
            username: values.username,
            password: values.password,
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
          },
        },
      });
    },
  });

  return (
    <>
      <Container component="main" maxWidth="xs" sx={signUpStyles(i18n)}>
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t("signUpPage.title")}
        </Typography>
        <Box
          component="form"
          sx={{ mt: 3, display: `${activeStep === 0 ? "block" : "none"}` }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                name="firstname"
                required
                fullWidth
                label={t("signUpPage.firstname")}
                autoFocus
                defaultValue={formik.values.firstname}
                onChange={formik.handleChange}
                error={
                  formik.touched.firstname && Boolean(formik.errors.firstname)
                }
                helperText={formik.touched.firstname && formik.errors.firstname}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                label={t("signUpPage.lastname")}
                name="lastname"
                autoComplete="family-name"
                defaultValue={formik.values.lastname}
                onChange={formik.handleChange}
                error={
                  formik.touched.lastname && Boolean(formik.errors.lastname)
                }
                helperText={formik.touched.lastname && formik.errors.lastname}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label={t("signUpPage.email")}
                autoComplete="email"
                type="email"
                defaultValue={formik.values.email}
                onChange={formik.handleChange}
                error={formik.touched.email && Boolean(formik.errors.email)}
                helperText={formik.touched.email && formik.errors.email}
              />
            </Grid>
          </Grid>
          <Button variant="contained" className="next" onClick={handleNext}>
            {t("signUpPage.next")}
          </Button>
        </Box>
        <Box
          component="form"
          noValidate
          sx={{ mt: 3, display: `${activeStep === 1 ? "block" : "none"}` }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
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
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                name="street"
                label={t("signUpPage.street")}
                defaultValue={formik.values.street}
                onChange={formik.handleChange}
                error={formik.touched.street && Boolean(formik.errors.street)}
                helperText={formik.touched.street && formik.errors.street}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
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
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                type="number"
                fullWidth
                name="lat"
                label={t("signUpPage.lat")}
                defaultValue={formik.values.lat}
                onChange={formik.handleChange}
                error={formik.touched.lat && Boolean(formik.errors.lat)}
                helperText={formik.touched.lat && formik.errors.lat}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type="number"
                name="number"
                label={t("signUpPage.number")}
                defaultValue={formik.values.number}
                onChange={formik.handleChange}
                error={formik.touched.number && Boolean(formik.errors.number)}
                helperText={formik.touched.number && formik.errors.number}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label={t("signUpPage.zipcode")}
                name="zipcode"
                defaultValue={formik.values.zipcode}
                onChange={formik.handleChange}
                error={formik.touched.zipcode && Boolean(formik.errors.zipcode)}
                helperText={formik.touched.zipcode && formik.errors.zipcode}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                type="number"
                label={t("signUpPage.phone")}
                name="phone"
                defaultValue={formik.values.phone}
                onChange={formik.handleChange}
                error={formik.touched.phone && Boolean(formik.errors.phone)}
                helperText={formik.touched.phone && formik.errors.phone}
              />
            </Grid>
          </Grid>
          <Button variant="contained" className="back" onClick={handleBack}>
            {t("signUpPage.back")}
          </Button>
          <Button variant="contained" className="next" onClick={handleNext}>
            {t("signUpPage.next")}
          </Button>
        </Box>
        <Box
          component="form"
          noValidate
          sx={{ mt: 3, display: `${activeStep === 2 ? "block" : "none"}` }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="username"
                label={t("signUpPage.username")}
                defaultValue={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label={t("signUpPage.password")}
                type="password"
                autoComplete="new-password"
                defaultValue={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label={t("signUpPage.iAccept")}
                className="iAccept"
              />
            </Grid>
          </Grid>
          <Button variant="contained" className="back" onClick={handleBack}>
            {t("signUpPage.back")}
          </Button>
          <Button
            variant="contained"
            className="next"
            onClick={formik.handleSubmit}
          >
            {t("signUpPage.submit")}
          </Button>
        </Box>
        <Grid container justifyContent="flex-end">
          <Grid item>
            <Link href="/signIn" variant="body2">
              {t("signUpPage.alreadyHaveAccount")}
            </Link>
          </Grid>
        </Grid>
        <Typography
          variant="body2"
          color="text.secondary"
          align="center"
          mb={5}
        >
          {t("signUpPage.copyright")}
          {new Date().getFullYear()}.
        </Typography>
      </Container>
    </>
  );
};

export default SignUp;
