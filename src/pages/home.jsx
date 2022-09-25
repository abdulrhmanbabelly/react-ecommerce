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
import { useEffect } from "react";
import { useState } from "react";
import { homeStyles } from "../styles";

let Header = () => {
  let { t } = useTranslation();
  let [height, setHeight] = useState(10);

  useEffect(() => {
    if (document.getElementsByClassName("MuiToolbar-root")[0]) {
      setHeight(
        window.innerHeight -
          document.getElementsByClassName("MuiToolbar-root")[0].clientHeight
      );
    }

    window.addEventListener("resize", () => {
      setHeight(
        window.innerHeight -
          document.getElementsByClassName("MuiToolbar-root")[0].clientHeight
      );
    });

    return window.removeEventListener("resize", () => {
      setHeight(
        window.innerHeight -
          document.getElementsByClassName("MuiToolbar-root")[0].clientHeight
      );
    });
  });

  return (
    <Grid item xs={12} sx={homeStyles.header(height)}>
      <Box className="welcome">
        <Box component="h4">{t("header.buyWhatever")}</Box>
        <Box component="h1">{t("header.get")}</Box>
        <Button variant="contained" className="readMore">
          {t("header.readMore")}
        </Button>
      </Box>
      <IconButton
        className="downward"
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
    <Grid item xs={12} container sx={homeStyles.info}>
      <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
        <Box
          component="img"
          src="https://images.pexels.com/photos/953864/pexels-photo-953864.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1500"
        />
      </Grid>
      <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }} className="info">
        <Box component="h1">{t("home.aboutUs.h1")}</Box>
        <Box component="h4">{t("home.aboutUs.h4")} </Box>
        <br />
        <Typography> {t("home.aboutUs.loremIpsum")}</Typography>
        <Button variant="contained">{t("home.aboutUs.btn")}</Button>
      </Grid>
    </Grid>
  );
};
let CreateAcoount = () => {
  let { t } = useTranslation();
  return (
    <Grid item xs={12} container sx={homeStyles.info}>
      <Grid item xs={12} md={6} className="info">
        <Box component="h1">{t("home.createAccount.h1")}</Box>
        <Box component="h4">{t("home.createAccount.h4")}</Box>
        <br />
        <Typography>{t("home.createAccount.loremIpsum")}</Typography>
        <Button variant="contained" color="warning">
          {t("home.createAccount.btn")}{" "}
        </Button>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box
          component="img"
          src="https://images.pexels.com/photos/2460436/pexels-photo-2460436.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"
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
      sx={homeStyles.plans}
    >
      <Box component="h1">{t("home.plans.h1")}</Box>
      <Grid container spacing={3} className="plans">
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader title={t("home.plans.freemuim.h5")} />
            <CardMedia>
              <Telegram className="planIcon" />
            </CardMedia>
            <Box className="price">
              <Box component="span">{t("home.plans.freemuim.price")}</Box>
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
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader title={t("home.plans.plus.h5")} />
            <Flight className="planIcon rotated" />
            <Box className="price">
              <Box component="span">{t("home.plans.plus.price")}</Box>
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
              <Button variant="contained">{t("home.plans.buy")}</Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} md={4}>
          <Card>
            <CardHeader title={t("home.plans.premium.h5")} />
            <Rocket className="planIcon rotated" />
            <Box className="price">
              <Box component="span">{t("home.plans.premium.price")}</Box>
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
              <Button variant="contained">{t("home.plans.buy")}</Button>
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
