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
  AccountBalance,
  ArrowDownward,
  Check,
  CurrencyExchange,
  Flight,
  Map,
  People,
  Rocket,
  Telegram,
} from "@mui/icons-material";

let Header = () => (
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
        left: "5%",
        zIndex: 100000,
        padding: "2vw",
      }}
    >
      <Box component="h4" sx={{ fontWeight: 100 }}>
        You Can Buy whatever you want here!
      </Box>
      <Box component="h1" sx={{ fontSize: "5vw", fontWeight: 100 }}>
        Get up to 30% off New Arrivals
      </Box>
      <Button
        variant="contained"
        sx={(theme) => {
          return {
            background: (theme) => theme.palette.colors.pink,
            color: "#fff",
            fontWeight: 300,
            width: "20%",
            [theme.breakpoints.down("md")]: {
              width: "150px",
            },
          };
        }}
      >
        Read More
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
let AboutUs = () => (
  <Grid item xs={12} container>
    <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
      <Box
        component="img"
        src="https://images.pexels.com/photos/953864/pexels-photo-953864.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"
        sx={{
          width: "100%",
          height: "100%",
          boxShadow: ".1vw .1vw 1vw .1vw #ccc",
        }}
      />
    </Grid>
    <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }} sx={{ padding: "2vw" }}>
      <Box component="h1">About Us</Box>
      <Box component="h4" sx={{ color: "#666" }}>
        Learn More About Our Market
      </Box>
      <br />
      <Typography sx={{ color: "#666" }}>
        {" "}
        Nulla culpa esse consectetur ad esse nulla nisi officia. Excepteur sit
        id est elit qui occaecat fugiat Lorem duis minim. Ut officia esse
        aliquip Lorem occaecat non aute officia quis ea incididunt aliqua
        occaecat elit.
      </Typography>
      <Button variant="contained" sx={{ marginTop: 2 }}>
        Read more
      </Button>
    </Grid>
  </Grid>
);
let CreateAcoount = () => (
  <Grid item xs={12} container>
    <Grid item xs={12} md={6} sx={{ padding: "2vw" }}>
      <Box component="h1">Create Account</Box>
      <Box component="h4" sx={{ color: "#666" }}>
        Sign-Up Now And Start Using Our Products!
      </Box>
      <br />
      <Typography sx={{ color: "#666" }}>
        {" "}
        Voluptate pariatur ut laboris reprehenderit. Ipsum anim nisi qui commodo
        id dolore et pariatur qui mollit. Voluptate pariatur quis reprehenderit
        laborum et.
      </Typography>
      <Button variant="contained" color="warning" sx={{ marginTop: 2 }}>
        Sign-up
      </Button>
    </Grid>
    <Grid item xs={12} md={6}>
      <Box
        component="img"
        src="https://images.pexels.com/photos/2460436/pexels-photo-2460436.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=1000"
        sx={{
          width: "100%",
          height: "100%",
          boxShadow: ".1vw .1vw 1vw .1vw #ccc",
        }}
      />
    </Grid>
  </Grid>
);
let Services = () => (
  <Grid
    item
    xs={12}
    p={2}
    width="100vw"
    sx={{ background: (theme) => theme.palette.colors.grey, color: "#fff" }}
  >
    <Box component="h1" textAlign="center">
      Services
    </Box>
    <Grid container>
      <Grid item xs={12} sm={6} md={3} p={2} textAlign="center">
        <CurrencyExchange sx={{ width: "10vw", height: "10vw" }} />
        <br />
        <Typography>Currncey Income</Typography>
        <Typography>1252</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3} p={2} textAlign="center">
        <AccountBalance sx={{ width: "10vw", height: "10vw" }} />
        <br />
        <Typography>Bank Accounts</Typography>
        <Typography>241,23</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3} p={2} textAlign="center">
        <Map sx={{ width: "10vw", height: "10vw" }} />
        <br />
        <Typography>Maps</Typography>
        <Typography>2321,12</Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3} p={2} textAlign="center">
        <People sx={{ width: "10vw", height: "10vw" }} />
        <br />
        <Typography>Subscribers</Typography>
        <Typography>99,512</Typography>
      </Grid>
    </Grid>
  </Grid>
);
let Plans = () => (
  <>
    <Box component="h1" textAlign="center" width="100vw" sx={{ margin: 2 }}>
      Choose Your Plan
    </Box>
    <Grid
      container
      spacing={5}
      justifyContent="space-around"
      padding="1vw"
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
          <CardHeader title="Freemuim" />
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
              $9.99
            </Box>
            month
          </Box>
          <CardContent>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>{" "}
                10 Free item Every Month
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>{" "}
                3% discount on Every item
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>{" "}
                1 coupon Every Month
              </ListItem>
            </List>
            <Button variant="contained">Buy</Button>
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
          <CardHeader title="Plus+" />
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
              $29.99
            </Box>
            month
          </Box>
          <CardContent>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>{" "}
                30 Free item Every Month
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>{" "}
                10% discount on Every item
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>{" "}
                3 coupon Every Month
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>{" "}
                5 carts
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>{" "}
                +3 Free charts on every Year
              </ListItem>
            </List>
            <Button variant="contained">Buy</Button>
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
          <CardHeader title="Premuim" />
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
              $99.99
            </Box>
            month
          </Box>
          <CardContent>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>{" "}
                100 Free item Every Month
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>{" "}
                20% discount on Every item
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>{" "}
                6 coupon Every Month
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>{" "}
                multiple carts
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Check />
                </ListItemIcon>{" "}
                +10 Free charts on every Year
              </ListItem>
            </List>
            <Button variant="contained">Buy</Button>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  </>
);

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
