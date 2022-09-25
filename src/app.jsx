import { Route, Routes, useLocation } from "react-router-dom";
import React from "react";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import {
  createTheme,
  ThemeProvider,
  experimental_sx as sx,
} from "@mui/material/styles";
import Box from "@mui/material/Box";
import { AdminRouter, ClientRouter } from "./routers";
import { useDispatch, useSelector } from "react-redux";
import { useMemo } from "react";
import { adminDashboardStyles, rtlTextFiled } from "./styles";
import { useEffect } from "react";
import { setLeftToRight } from "./store/features/leftToRight/leftToRight";
import { useTranslation } from "react-i18next";
import { AdminNavigationBar, Footer, NavigationBar } from "./components";
let App = () => {
  let location = useLocation();
  let darkMode = useSelector((state) => state.darkMode.on);
  let ltr = useSelector((state) => state.leftToRight.ltr);
  let { i18n } = useTranslation();
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLeftToRight({ ltr: i18n.language === "ar" ? false : true }));
  });

  let colors = {
    pink: "#D61C4E",
    purple: "#D61C4E",
    blue: "#1CD6CE",
    grey: "#293462",
  };
  let theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      ltr: ltr,
      colors: colors,
      boxShadow: darkMode
        ? ".1vw .1vw 1vw .1vw #000"
        : ".1vw .1vw 1vw .1vw #ccc",
    },
    components: {
      MuiAppBar: {
        styleOverrides: {
          root: sx({
            backgroundImage: (props) =>
              `linear-gradient(-90deg, ${props.palette.colors.blue}, ${props.palette.colors.grey}) !important`,
            color: "#fff",
            zIndex: 10000,
            direction: (props) => (props.palette.ltr ? "ltr" : "rtl"),
          }),
        },
      },
      MuiToolbar: {
        styleOverrides: {
          root: sx((theme) => {
            if (theme.palette.ltr) return { paddingRight: 0 };
            else
              return {
                paddingRight: 0,
                paddingLeft: 0,
              };
          }),
        },
      },
      MuiTextField: {
        styleOverrides: {
          root: sx(rtlTextFiled),
        },
      },
      MuiSelect: {
        styleOverrides: {
          root: sx(rtlTextFiled),
        },
      },
      MuiCard: {
        styleOverrides: {
          root: sx({
            boxShadow: (props) =>
              props.palette.mode === "light"
                ? ".1vw .1vw 1vw .1vw #ccc"
                : ".1vw .1vw 1vw .1vw #000",
          }),
        },
      },
    },
  });

  let clientNavbar = useMemo(() => <NavigationBar />, [location.pathname]);
  let adminNavbar = useMemo(() => <AdminNavigationBar />, [location.pathname]);
  let footer = useMemo(() => <Footer />, [location.pathname]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {location.pathname.indexOf("adminDashboard") === -1
        ? clientNavbar
        : adminNavbar}
      <Grid
        container
        sx={{
          direction: (props) => (props.palette.ltr ? "ltr" : "rtl"),
          fontFamily: (props) =>
            props.palette.ltr ? " Poppins, sans-serif" : "Cairo, sans-serif",
        }}
      >
        <Routes>
          {location.pathname.indexOf("adminDashboard") > -1 && (
            <Route
              path="/adminDashboard/*"
              element={
                <Box style={{ padding: "1vw" }} sx={adminDashboardStyles}>
                  <AdminRouter />
                </Box>
              }
            />
          )}
          <Route
            path="*"
            element={
              <>
                <ClientRouter />
                {footer}
              </>
            }
          />
        </Routes>
      </Grid>
    </ThemeProvider>
  );
};

export default App;
