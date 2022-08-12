import React, { useState } from 'react';
import { AppBar, CssBaseline, ListItemText, ListItemIcon, ListItemButton, List, ListItem, Box, Divider, Drawer, IconButton, Toolbar } from '@mui/material';
import { Store, PeopleAlt, Category, ShoppingCart, Cloud, ChevronRight, ChevronLeft, Menu } from '@mui/icons-material';
import { styled, useTheme } from '@mui/material/styles';
import { useAdminDashboardStyles } from '../../styles';
import { toggleTheme } from '../../functions';

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
const CustomAppBar = styled(AppBar, {
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

let AdminNavigationBar = (props) => {
  
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
        <CustomAppBar open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ mr: 2, ...(open && { display: 'none' }) }}
          >
            <Menu />
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
        </CustomAppBar>
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
            {theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
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
      <Main open={open} className='adminDashboard' style={{
        marginTop : "64px"
      }}>
          {props.routes}
      </Main>   
    </Box>
  );
}



export default AdminNavigationBar;