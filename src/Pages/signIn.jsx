import React from "react";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Avatar from "@mui/material/Avatar";
import FormControlLabel from "@mui/material/FormControlLabel";
import { useMutation } from "@apollo/client";
import { SIGN_IN } from "../gql";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from "react-i18next";
import { rtlTextFiled } from "../styles";
import { useDispatch } from "react-redux";
import { login } from "../store/features/auth/authSlice";

let SignIn = () => {
  const dispatch = useDispatch();
  let [signIn] = useMutation(SIGN_IN);
  let { t } = useTranslation();
  let formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .max(10, t("signUpPage.usernameErr1"))
        .min(5, t("signUpPage.usernameErr2"))
        .required(t("signUpPage.reqField")),
      password: Yup.string()
        .max(10, t("signUpPage.passwordErr1"))
        .min(5, t("signUpPage.passwordErr2"))
        .required(t("signUpPage.reqField")),
    }),
    onSubmit: (values) => {
      signIn({
        variables: {
          input: {
            username: values.username,
            password: values.password,
          },
        },
      }).then((data) => {
        dispatch(login(data.data.signIn.token));

        if (location.pathname === "/signIn") {
          location.href = "/";
        }
      });
    },
  });

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{ height: "90vh", display: "flex", alignItems: "center" }}
    >
      <Box
        sx={() => {
          return {
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            direction: (props) => `${props.palette.ltr ? "ltr" : "rtl"}`,
          };
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          {t("signInPage.title")}
        </Typography>
        <Box component="form" onSubmit={formik.handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            type="text"
            label={t("signInPage.username")}
            name="username"
            autoFocus
            sx={rtlTextFiled}
            defaultValue={formik.values.username}
            onChange={formik.handleChange}
            error={formik.touched.username && Boolean(formik.errors.username)}
            helperText={formik.touched.username && formik.errors.username}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label={t("signInPage.password")}
            type="password"
            sx={rtlTextFiled}
            defaultValue={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label={t("signInPage.rememberMe")}
            sx={{
              marginRight: 0,
            }}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 1, mb: 2 }}
          >
            {t("signInPage.signInBtn")}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                {t("signInPage.forgot")}
              </Link>
            </Grid>
            <Grid item>
              <Link href="/signUp" variant="body2">
                {t("signInPage.dontHaveAccount")}
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Typography variant="body2" color="text.secondary" align="center">
          {t("signInPage.copyright")}
          {new Date().getFullYear()}.
        </Typography>
      </Box>
    </Container>
  );
};

export default SignIn;
