import React, { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Home', to: '/' },
    { text: 'About', to: '/about' },
    { text: 'Services', to: '/services' },
    { text: 'Contact', to: '/contact' },
  ];

  const drawerList = (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        {menuItems.map(({ text, to }) => (
          <ListItem button component={Link} to={to} key={text}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        {/* Left side: menu icon + title */}
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          {/* Hamburger icon: only visible up to 560px */}
          <Box
            sx={{
              display: 'none',
              '@media (max-width:560px)': {
                display: 'block',
              },
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              sx={{ mr: 1 }}
            >
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Title */}
          <Typography variant="h6" noWrap>
            SmartCare
          </Typography>
        </Box>

        {/* Right side: buttons */}
        <Box
          sx={{
            display: 'flex',
            '@media (max-width:560px)': {
              display: 'none',
            },
          }}
        >
          {menuItems.map(({ text, to }) => (
            <Button key={text} color="inherit" component={Link} to={to}>
              {text}
            </Button>
          ))}
        </Box>

        {/* Drawer */}
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          {drawerList}
        </Drawer>
      </Toolbar>
    </AppBar>
  );
}
