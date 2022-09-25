import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Store from "@mui/icons-material/Store";
import PeopleAlt from "@mui/icons-material/PeopleAlt";
import Category from "@mui/icons-material/Category";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import ChevronRight from "@mui/icons-material/ChevronRight";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import DarkMode from "@mui/icons-material/DarkMode";
import Translate from "@mui/icons-material/Translate";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { useTranslation } from "react-i18next";
import { adminDashboardStyles } from "../../styles";
import useToggleDarkMode from "../../hooks/useToggleDarkMode";
import { useDispatch } from "react-redux";
import { toggleLeftToRight } from "../../store/features/leftToRight/leftToRight";

const lngs = {
  en: { nativeName: "English" },
  ar: { nativeName: "Arabic" },
};
let AdminNavigationBar = () => {
  let { toggle } = useToggleDarkMode();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  let dispatch = useDispatch();
  let { t, i18n } = useTranslation();
  const theme = useTheme();

  const [lngsAnchorEl, setLngsAnchorEl] = useState(null);
  const isLngsMenuOpen = Boolean(lngsAnchorEl);
  const handleLngsMenuOpen = (event) => {
    setLngsAnchorEl(event.currentTarget);
  };
  const handleLngsMenuClose = () => {
    setLngsAnchorEl(null);
  };

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const lngsMenuId = "primary-lngs-account-menu";
  const renderLngsMenu = (
    <Menu
      anchorEl={lngsAnchorEl}
      open={isLngsMenuOpen}
      onClose={handleLngsMenuClose}
      onClick={handleLngsMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          maxHeight: "100px",
          overflowY: "auto",
          filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
          mt: 1.5,
          "& .MuiAvatar-root": {
            width: 32,
            height: 32,
            ml: -0.5,
            mr: 1,
          },
          "& li a": {
            textDecoration: "none",
          },
        },
      }}
      transformOrigin={{ horizontal: "right", vertical: "top" }}
      anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
    >
      {Object.keys(lngs).map((lng) => (
        <MenuItem
          key={lng}
          style={{
            fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
          }}
          type="submit"
          onClick={() => {
            dispatch(toggleLeftToRight());
            i18n.changeLanguage(lng);
          }}
        >
          {lngs[lng].nativeName}
        </MenuItem>
      ))}
    </Menu>
  );

  const list = (anchor) => (
    <Box
      sx={adminDashboardStyles}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <IconButton onClick={toggleDrawer}>
        {theme.direction === "ltr" ? <ChevronLeft /> : <ChevronRight />}
      </IconButton>
      <Divider />
      <List>
        <ListItem disablePadding>
          <Link
            href="/adminDashboard/products"
            color="inherit"
          >
            <ListItemButton>
              <ListItemIcon>
                <Store />
              </ListItemIcon>
              <Box mr={1} />
              <ListItemText primary={t("adminDashboard.nav.1")} />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link
            href="/adminDashboard/users"
            color="inherit"
          >
            <ListItemButton>
              <ListItemIcon>
                <PeopleAlt />
              </ListItemIcon>
              <Box mr={1} />
              <ListItemText primary={t("adminDashboard.nav.2")} />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link
            href="/adminDashboard/carts"
            color="inherit"
          >
            <ListItemButton>
              <ListItemIcon>
                <ShoppingCart />
              </ListItemIcon>
              <Box mr={1} />
              <ListItemText primary={t("adminDashboard.nav.3")} />
            </ListItemButton>
          </Link>
        </ListItem>
        <ListItem disablePadding>
          <Link
            href="/adminDashboard/categories"
            color="inherit"
          >
            <ListItemButton>
              <ListItemIcon>
                <Category />
              </ListItemIcon>
              <Box mr={1} />
              <ListItemText primary={t("adminDashboard.nav.4")} />
            </ListItemButton>
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div>
      {(i18n.language == "ar" ? ["right"] : ["left"]).map((anchor) => (
        <Box
          sx={{
            flexGrow: 1,
            direction: (props) => `${props.palette.ltr ? "ltr" : "rtl"}`,
          }}
          key={anchor}
        >
          <AppBar position="static" sx={{}}>
            <Toolbar>
              <React.Fragment>
                <IconButton
                  onClick={toggleDrawer(anchor, true)}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Drawer
                  anchor={anchor}
                  open={state[anchor]}
                  onClose={toggleDrawer(anchor, false)}
                >
                  {list(anchor)}
                </Drawer>
              </React.Fragment>
              <IconButton
                size="large"
                color="inherit"
                onClick={() => {
                  toggle();
                }}
              >
                <DarkMode />
              </IconButton>
              <IconButton
                size="large"
                aria-controls={lngsMenuId}
                aria-haspopup="true"
                onClick={handleLngsMenuOpen}
                color="inherit"
              >
                <Translate />
              </IconButton>
              {renderLngsMenu}
              <Typography sx={{ marginRight: "1vw", marginLeft: ".5vw" }}>
                {t("adminDashboard.title")}
              </Typography>
            </Toolbar>
          </AppBar>
        </Box>
      ))}
    </div>
  );
};

export default AdminNavigationBar;
