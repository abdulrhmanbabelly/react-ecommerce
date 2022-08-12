import React, { useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, InputBase, Badge, MenuItem, Menu } from '@mui/material';
import { styled, alpha } from '@mui/material/styles';
import { AccountCircle, Search, Cloud, ShoppingCart, Store, MoreVert } from '@mui/icons-material';
import { useHeaderStyles } from '../../styles';
import { toggleTheme } from '../../functions';

const SearchInput = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

let NavigationBar = (props) => {

    let { setDarkMode, darkMode } = props.mode;
    let classes = useHeaderStyles();
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        id={menuId}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={isMenuOpen}
        onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}><a href="/editAccount">account</a></MenuItem>
            <MenuItem onClick={handleMenuClose}><a href="/signIn">Sign-in</a></MenuItem>
            <MenuItem onClick={handleMenuClose}><a href="/signUp">Sign-up</a></MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
        anchorEl={mobileMoreAnchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        className={classes.header}
        id={mobileMenuId}
        keepMounted
        transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        open={isMobileMenuOpen}
        onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <IconButton size="large" color="inherit">
                    <Badge color="error">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <a href="/carts">Carts</a>
            </MenuItem> 
            <MenuItem>
                <IconButton
                size="large"
                color="inherit"
                >
                    <Store />
                </IconButton>
                <a href="/store">store</a>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                Profile
            </MenuItem>
            <MenuItem onClick={() => {
                    toggleTheme(darkMode, setDarkMode);
                }}>
                <IconButton 
                size="large"
                aria-label="account of current user"
                aria-controls="primary-search-account-menu"
                aria-haspopup="true"
                color="inherit"
                >
                    <Cloud />
                </IconButton>
                Dark mode
            </MenuItem>
        </Menu>
    );

    return (
        <Box sx={{ flexGrow: 1 }} className={classes.header}>
        <AppBar position="static">
            <Toolbar>
            <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ display: { xs: 'none', sm: 'block' } }}
            >
               <a href="/">E-commerce</a>
            </Typography>
            <SearchInput>
                <SearchIconWrapper>
                <Search />
                </SearchIconWrapper>
                <StyledInputBase
                placeholder="Search…"
                inputProps={{ 'aria-label': 'search' }}
                />
            </SearchInput>
            <Box sx={{ flexGrow: 2 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                <IconButton 
                size="large"
                color="inherit"
                onClick={() => {
                    toggleTheme(darkMode, setDarkMode);
                }}>
                    <Cloud />
                </IconButton>
                <IconButton size="large" color="inherit">
                <Badge color="error">
                    <a href="/carts"><ShoppingCart /></a>    
                </Badge>
                </IconButton>
                <IconButton
                size="large"
                >
                    <a href="/store"><Store /></a>    
                </IconButton>
                <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                onClick={handleProfileMenuOpen}
                color="inherit"
                >
                    <AccountCircle />   
                </IconButton>
            </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
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
        </Box>
    );
}




export default NavigationBar;