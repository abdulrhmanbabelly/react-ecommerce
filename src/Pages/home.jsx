import React from "react";
import Grid from "@mui/material/Grid";
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  List,
  ListItem,
  ListItemIcon,
  Typography,
} from "@mui/material";
import {
  ArrowDownward,
  Check,
  CurrencyExchange,
  Flight,
  Map,
  People,
  Rocket,
  Telegram,
} from "@mui/icons-material";
import { useTranslation } from "react-i18next";

let Header = () => {
  let { t } = useTranslation();
  return (
    <Grid
      item
      xs={12}
      sx={{
        zIndex: 1,
        backgroundImage: (theme) =>
          `linear-gradient(-90deg, ${theme.palette.colors.blue}, ${theme.palette.colors.grey}) !important`,
        height: "90vh",
        color: "#fff",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "30%",
          left: (props) => (props.palette.ltr ? "5%" : "none"),
          right: (props) => (props.palette.ltr ? "none" : "5%"),
          zIndex: 100000,
          padding: "2vw",
        }}
      >
        <Box component="h4" sx={{ fontWeight: 100 }}>
          {t("header.buyWhatever")}
        </Box>
        <Box component="h1" sx={{ fontWeight: 800 }}>
          {t("header.get")}
        </Box>
        <Button
          variant="contained"
          sx={() => {
            return {
              background: (theme) => theme.palette.colors.pink,
              color: "#fff",
              fontWeight: 300,
              width: "30%",
            };
          }}
        >
          {t("header.readMore")}
        </Button>
      </Box>
      <IconButton
        sx={{
          position: "absolute",
          bottom: "1vw",
          left: "50%",
          transform: "translate(-50%)",
          zIndex: 100000,
          color: "#fff",
        }}
        onClick={() => {
          window.scrollTo({
            top: window.innerHeight + 10,
            behavior: "smooth",
          });
        }}
      >
        <ArrowDownward />
      </IconButton>
    </Grid>
  );
};
let AboutUs = () => {
  let { t } = useTranslation();
  return (
    <Grid item xs={12} container>
      <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
        <Box
          component="img"
          src="https://images.pexels.com/photos/953864/pexels-photo-953864.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"
          sx={{
            width: "100%",
            height: "100%",
            boxShadow: (props) => props.palette.boxShadow,
          }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        md={6}
        order={{ xs: 1, md: 2 }}
        sx={{ padding: "2vw" }}
      >
        <Box component="h1">{t("home.aboutUs.h1")}</Box>
        <Box component="h4" sx={{ color: "#666" }}>
          {t("home.aboutUs.h4")}{" "}
        </Box>
        <br />
        <Typography sx={{ color: "#666" }}>
          {" "}
          {t("home.aboutUs.loremIpsum")}
        </Typography>
        <Button variant="contained" sx={{ marginTop: 2 }}>
          {t("home.aboutUs.btn")}
        </Button>
      </Grid>
    </Grid>
  );
};
let CreateAcoount = () => {
  let { t } = useTranslation();
  return (
    <Grid item xs={12} container>
      <Grid item xs={12} md={6} sx={{ padding: "2vw" }}>
        <Box component="h1"> {t("home.createAccount.h1")}</Box>
        <Box component="h4" sx={{ color: "#666" }}>
          {t("home.createAccount.h4")}{" "}
        </Box>
        <br />
        <Typography sx={{ color: "#666" }}>
          {" "}
          {t("home.createAccount.loremIpsum")}{" "}
        </Typography>
        <Button variant="contained" color="warning" sx={{ marginTop: 2 }}>
          {t("home.createAccount.btn")}{" "}
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          src="https://images.pexels.com/photos/2460436/pexels-photo-2460436.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"
          sx={{
            width: "100%",
            height: "100%",
            boxShadow: (props) => props.palette.boxShadow,
          }}
        />
      </Grid>
    </Grid>
  );
};
let Services = () => {
  let { t } = useTranslation();
  return (
    <Grid
      item
      xs={12}
      sx={{
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundImage: (props) =>
          `linear-gradient(-90deg, ${props.palette.colors.blue}, ${props.palette.colors.grey}) !important`,
        h1: {
          textAlign: "center",
          margin: 2,
          color: "#fff",
        },
        ".wrapper": {
          ".single-service": {
            position: "relative",
            background: "#fff",
            transition: ".5s",
            overflow: "hidden",
            textAlign: "center",
            "& p": {
              color: "#444",
              fontSize: "14px !important",
              padding: "1vw",
              marginTop: "0.5vw !important",
              marginBottom: "3vh",
            },
            "& h3": {
              fontSize: "25px",
              textTransform: "uppercase",
              letterSpacing: "1px",
              color: "#262626",
            },
            ".social": {
              width: "60px",
              height: "60px",
              background: "#262626",
              borderRadius: "50%",
              margin: "5% auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            },
            span: {
              position: "absolute",
              top: 0,
              left: "-150%",
              width: "100%",
              height: "100%",
              background: "rgba(0,0,0,0.7)",
              transition: ".7s",
              transform: "skewX(10deg)",
            },
            "&:hover span": {
              left: "150%",
            },
          },
          ".line": {
            width: "150px",
            height: "3px",
            background: "#fff",
            margin: "0 auto 60px",
          },
        },
      }}
      p={3}
      pt={0}
    >
      <h1>{t("home.services.h1")}</h1>
      <Grid container className="wrapper" spacing={3}>
        <Grid item xs={12} md={4}>
          <Box className="single-service">
            {" "}
            <Box className="social">
              <CurrencyExchange
                sx={{ width: "30px", height: "30px", color: "#fff" }}
              />
            </Box>
            <span></span>
            <Box component="h3">{t("home.services.currencyIncome")}</Box>
            <Typography component="p">
              {t("home.services.loremIpsum")}{" "}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className="single-service">
            {" "}
            <Box className="social">
              <Map sx={{ width: "30px", height: "30px", color: "#fff" }} />
            </Box>
            <span></span>
            <Box component="h3">{t("home.services.freeShipping")} </Box>
            <Typography component="p">
              {t("home.services.loremIpsum")}
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={4}>
          <Box className="single-service">
            {" "}
            <Box className="social">
              <People sx={{ width: "30px", height: "30px", color: "#fff" }} />
            </Box>
            <span></span>
            <Box component="h3">{t("home.services.people")}</Box>
            <Typography component="p">
              {t("home.services.loremIpsum")}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};
let Plans = () => {
  let { t } = useTranslation();

  return (
    <Box
      sx={{
        h1: {
          textAlign: "center",
          margin: 2,
        },
      }}
      width="100vw"
      p={3}
      pt={0}
    >
      <Box component="h1">{t("home.plans.h1")}</Box>
      <Grid
        container
        spacing={3}
        justifyContent="space-around"
        p={1}
        pt={0}
        sx={{
          ".MuiCardHeader-title": {
            textAlign: "center",
          },
          ".MuiPaper-root": {
            position: "relative",
          },
          "ul, li": (theme) => {
            return {
              padding: ".3vw",
              [theme.breakpoints.down("md")]: {
                paddingBottom: "1vh",
              },
              [theme.breakpoints.down("sm")]: {
                paddingBottom: "2vh",
              },
            };
          },

          ".MuiCardContent-root": {
            paddingTop: 0,
          },
          ".MuiPaper-root": {
            height: "100%",
          },
          ".MuiButtonBase-root": {
            position: "absolute",
            bottom: "2vh",
            left: "50%",
            transform: "translate(-50%)",
            width: "90%",
          },
          ".MuiCard-root": {
            position: "relative",
            paddingBottom: "3vw",
          },
        }}
      >
        <Grid item xs={10} md={4}>
          <Card
            sx={{
              backgroundColor: "#32C1FF",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%230F67FF' stroke-width='0' stroke-opacity='0.06' %3E%3Ccircle fill='%2324FFE8' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%2300efe3' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%2300e0dd' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%2300d0d5' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%2300c1cd' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%2300b1c4' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%2300a2ba' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%230093af' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%230084a3' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23007696' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23006888' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23005a7b' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23004c6c' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%2300405e' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%2300334f' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23042740' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23041c32' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23021024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              color: "#fff",
            }}
          >
            <CardHeader title={t("home.plans.freemuim.h5")} />
            <CardMedia>
              <Telegram
                sx={{
                  width: "80px",
                  height: "80px",
                  display: "block",
                  margin: "auto",
                }}
              />
            </CardMedia>
            <Box sx={{ textAlign: "center" }}>
              <Box
                component="span"
                sx={{
                  fontFamily:
                    "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                  fontSize: "5vw",
                }}
              >
                {t("home.plans.freemuim.price")}
              </Box>
              {t("home.plans.month")}
            </Box>
            <CardContent>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>{" "}
                  {t("home.plans.freemuim.1")}
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>{" "}
                  {t("home.plans.freemuim.2")}
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>{" "}
                  {t("home.plans.freemuim.3")}
                </ListItem>
              </List>
              <Button variant="contained">{t("home.plans.buy")}</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} md={4}>
          <Card
            sx={{
              backgroundColor: "#32C1FF",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%230F67FF' stroke-width='0' stroke-opacity='0.06' %3E%3Ccircle fill='%2324FFE8' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%2300efe3' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%2300e0dd' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%2300d0d5' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%2300c1cd' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%2300b1c4' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%2300a2ba' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%230093af' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%230084a3' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23007696' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23006888' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23005a7b' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23004c6c' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%2300405e' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%2300334f' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23042740' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23041c32' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23021024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              color: "#fff",
            }}
          >
            <CardHeader title={t("home.plans.plus.h5")} />
            <Flight
              sx={{
                width: "80px",
                height: "80px",
                display: "block",
                margin: "auto",
                transform: "rotate(40deg)",
              }}
            />
            <Box sx={{ textAlign: "center" }}>
              <Box
                component="span"
                sx={{
                  fontFamily:
                    "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                  fontSize: "5vw",
                }}
              >
                {t("home.plans.plus.price")}{" "}
              </Box>
              {t("home.plans.month")}
            </Box>
            <CardContent>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>{" "}
                  {t("home.plans.plus.1")}
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>{" "}
                  {t("home.plans.plus.2")}
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>{" "}
                  {t("home.plans.plus.3")}
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>{" "}
                  {t("home.plans.plus.4")}
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>{" "}
                  {t("home.plans.plus.5")}
                </ListItem>
              </List>
              <Button variant="contained"> {t("home.plans.buy")}</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={10} md={4}>
          <Card
            sx={{
              backgroundColor: "#32C1FF",
              backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%230F67FF' stroke-width='0' stroke-opacity='0.06' %3E%3Ccircle fill='%2324FFE8' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%2300efe3' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%2300e0dd' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%2300d0d5' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%2300c1cd' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%2300b1c4' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%2300a2ba' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%230093af' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%230084a3' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23007696' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23006888' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23005a7b' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%23004c6c' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%2300405e' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%2300334f' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%23042740' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%23041c32' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23021024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E")`,
              backgroundAttachment: "fixed",
              backgroundSize: "cover",
              color: "#fff",
            }}
          >
            <CardHeader title={t("home.plans.premium.h5")} />
            <Rocket
              sx={{
                width: "80px",
                height: "80px",
                display: "block",
                margin: "auto",
                transform: "rotate(40deg)",
              }}
            />
            <Box sx={{ textAlign: "center" }}>
              <Box
                component="span"
                sx={{
                  fontFamily:
                    "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif",
                  fontSize: "5vw",
                }}
              >
                {t("home.plans.premium.price")}
              </Box>
              {t("home.plans.month")}
            </Box>
            <CardContent>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>{" "}
                  {t("home.plans.premium.1")}
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>{" "}
                  {t("home.plans.premium.2")}
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>{" "}
                  {t("home.plans.premium.3")}
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>{" "}
                  {t("home.plans.premium.4")}
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Check />
                  </ListItemIcon>{" "}
                  {t("home.plans.premium.5")}
                </ListItem>
              </List>
              <Button variant="contained"> {t("home.plans.buy")}</Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

let Home = () => {
  return (
    <>
      <Header />
      <AboutUs />
      <CreateAcoount />
      <Services />
      <Plans />
    </>
  );
};

export default Home;
