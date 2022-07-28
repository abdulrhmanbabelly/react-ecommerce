import React, { useState } from 'react';
import { NavLink } from 'react-bootstrap';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Store, PeopleAlt, Category, ShoppingCart, Cloud } from '@mui/icons-material';
import CssBaseline from '@mui/material/CssBaseline';
import { Divider, Drawer, IconButton, Toolbar } from '@mui/material';
import { styled, useTheme } from '@mui/material/styles';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import AdminRoutes from '../Components/Admin/adminRoutes';
import { useAdminDashboardStyles } from '../styles';
import { toggleTheme } from '../contexts/mode';

const drawerWidth = 180;


const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(({ theme, open }) => ({
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${drawerWidth}px`,
    ...(open && {
      transition: theme.transitions.create('margin', {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      marginLeft: 0,
    }),
  }));

  const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
  })(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: `${drawerWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }));
  
 

let AdminDashboard = (props) => {
  
  let { darkMode, setDarkMode } = props.mode;

  const theme = useTheme();
  const [open, setOpen] = useState(true);
  let classes = useAdminDashboardStyles();
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  window.onresize = () => {
      if (window.innerWidth <= 786) {
        if (!open) return;
        if (open) setOpen(false);
      }
  }

  return (
    <Box sx={{ display: 'flex' }} className={classes.adminDashboard}>
      <CssBaseline />
        <AppBar open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon onClick={handleDrawerOpen} />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            sx={{ mr: 2 }}
            onClick={() => {
              toggleTheme(darkMode, setDarkMode);
          }}>
            <Cloud />
          </IconButton>
        </Toolbar>
        </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <Store />
                    </ListItemIcon>
                    <ListItemText primary={<a href='/adminDashboard/products'>Products</a>} />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <PeopleAlt />
                    </ListItemIcon>
                    <ListItemText primary={<a href='/adminDashboard/users'>users</a>} />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <ShoppingCart />
                    </ListItemIcon>
                    <ListItemText primary={<a href='/adminDashboard/carts'>carts</a>} />
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton>
                    <ListItemIcon>
                        <Category />
                    </ListItemIcon>
                    <ListItemText primary={<a href='/adminDashboard/categories'>categories</a>} />
                </ListItemButton>
            </ListItem>
        </List>
      </Drawer>
      <Main open={open} className='adminDashboard'>
        <AdminRoutes />
      </Main>
    </Box>
  );
}



export default AdminDashboard;