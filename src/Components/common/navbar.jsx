import React, { useState } from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import Link from "@mui/material/Link";
import { styled, alpha } from "@mui/material/styles";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Search from "@mui/icons-material/Search";
import ShoppingCart from "@mui/icons-material/ShoppingCart";
import Store from "@mui/icons-material/Store";
import MoreVert from "@mui/icons-material/MoreVert";
import Settings from "@mui/icons-material/Settings";
import Login from "@mui/icons-material/Login";
import Add from "@mui/icons-material/Add";
import DarkMode from "@mui/icons-material/DarkMode";
import Logout from "@mui/icons-material/Logout";
import Translate from "@mui/icons-material/Translate";
import { headerStyles } from "../../styles";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { logout } from "../../store/features/auth/authSlice";
import { useDispatch } from "react-redux";
import { useToggleDarkMode } from "../../hooks";
import { toggleLeftToRight } from "../../store/features/leftToRight/leftToRight";

const lngs = {
  en: { nativeName: "English" },
  ar: { nativeName: "Arabic" },
};

const SearchInput = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: theme.palette.ltr ? `calc(1em + ${theme.spacing(4)})` : 0,
    paddingRight: theme.palette.ltr ? 0 : `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

let NavigationBar = () => {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation();
  const { toggle } = useToggleDarkMode();

  const [anchorEl, setAnchorEl] = useState(null);
  const [lngsAnchorEl, setLngsAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isLngsMenuOpen = Boolean(lngsAnchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };
  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleLngsMenuOpen = (event) => {
    setLngsAnchorEl(event.currentTarget);
  };
  const handleLngsMenuClose = () => {
    setLngsAnchorEl(null);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={isMenuOpen}
      onClose={handleProfileMenuOpen}
      onClick={handleProfileMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          maxHeight: "200px",
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
      {!isLoggedIn && (
        <MenuItem
          onClick={() => {
            location.href = "/signUp";
          }}
        >
          <ListItemIcon>
            <Add fontSize="small" />
          </ListItemIcon>
          {t("header.signUp")}
        </MenuItem>
      )}
      {!isLoggedIn && (
        <MenuItem
          onClick={() => {
            location.href = "/signIn";
          }}
        >
          <ListItemIcon>
            <Login fontSize="small" />
          </ListItemIcon>
          {t("header.signIn")}
        </MenuItem>
      )}
      {isLoggedIn && (
        <MenuItem
          onClick={() => {
            location.href = "/editAccount";
          }}
        >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          {t("header.settings")}
        </MenuItem>
      )}
      {isLoggedIn && (
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <span
            onClick={() => {
              localStorage.removeItem("token");
              dispatch(logout);
              location.href = "/signIn";
            }}
          >
            {t("header.logout")}
          </span>
        </MenuItem>
      )}
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      id="account-menu"
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
      onClick={handleMobileMenuClose}
      PaperProps={{
        elevation: 0,
        sx: {
          maxHeight: "200px",
          overflowY: "scroll",
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
      <MenuItem
        onClick={() => {
          location.href = "/products";
        }}
      >
        <ListItemIcon>
          <Store />
        </ListItemIcon>
        {t("header.store")}
      </MenuItem>
      <MenuItem
        onClick={() => {
          location.href = "/carts";
        }}
      >
        <ListItemIcon>
          <ShoppingCart />
        </ListItemIcon>
        {t("header.cart")}
      </MenuItem>
      <Divider />
      {!isLoggedIn && (
        <MenuItem
          onClick={() => {
            location.href = "/signUp";
          }}
        >
          <ListItemIcon>
            <Add fontSize="small" />
          </ListItemIcon>
          {t("header.signUp")}
        </MenuItem>
      )}
      {!isLoggedIn && (
        <MenuItem
          onClick={() => {
            location.href = "/signIn";
          }}
        >
          <ListItemIcon>
            <Login fontSize="small" />
          </ListItemIcon>
          {t("header.signIn")}
        </MenuItem>
      )}
      {isLoggedIn && (
        <MenuItem
          onClick={() => {
            location.href = "/editAccount";
          }}
        >
          <ListItemIcon>
            <Settings fontSize="small" />
          </ListItemIcon>
          {t("header.settings")}
        </MenuItem>
      )}
      {isLoggedIn && (
        <MenuItem>
          <ListItemIcon>
            <Logout fontSize="small" />
          </ListItemIcon>
          <span
            onClick={() => {
              localStorage.removeItem("token");
              dispatch(logout);
              location.href = "/signIn";
            }}
          >
            {t("header.logout")}
          </span>
        </MenuItem>
      )}
      <MenuItem
        onClick={() => {
          toggle();
        }}
      >
        <ListItemIcon>
          <DarkMode />
        </ListItemIcon>
        {t("header.darkmode")}
      </MenuItem>
      <Divider />
      {Object.keys(lngs).map((lng) => (
        <MenuItem
          key={lng}
          style={{
            fontWeight: i18n.resolvedLanguage === lng ? "bold" : "normal",
          }}
          type="submit"
          onClick={() => {
            dispatch(toggleLeftToRight);
            i18n.changeLanguage(lng);
          }}
        >
          {lngs[lng].nativeName}
        </MenuItem>
      ))}
    </Menu>
  );

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
            dispatch(toggleLeftToRight);
            i18n.changeLanguage(lng);
          }}
        >
          {lngs[lng].nativeName}
        </MenuItem>
      ))}
    </Menu>
  );

  return (
    <Box sx={headerStyles}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ display: { xs: "none", sm: "block" } }}
          >
            <Link color="inherit" href="/">
              {t("header.logo")}
            </Link>
          </Typography>
          <SearchInput>
            <SearchIconWrapper>
              <Search />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder={t("header.search")}
              inputProps={{ "aria-label": t("header.search") }}
            />
          </SearchInput>
          <Box sx={{ flexGrow: 2 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              color="inherit"
              onClick={() => {
                toggle();
              }}
            >
              <DarkMode />
            </IconButton>
            <Link href="/carts" color="inherit">
              <IconButton size="large" color="inherit">
                <Badge color="error">
                  <ShoppingCart />
                </Badge>
              </IconButton>
            </Link>
            <Link href="/products" color="inherit">
              <IconButton size="large" color="inherit">
                <Badge color="error">
                  <Store />
                </Badge>
              </IconButton>
            </Link>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
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
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MoreVert />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
      {renderLngsMenu}
    </Box>
  );
};

export default NavigationBar;
