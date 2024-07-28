import React, { useState } from "react";
import {
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  Typography,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import "../../../src/App.css";
import logo from '../../assets/Logo/Dhruvil-modified.png';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      role="presentation"
      sx={{ width: "70%" }}
      display="flex"
      flexDirection="column"
      alignItems="flex-start"
      padding="1rem"
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Typography variant="h6" component="div" className="drawer-logo">
          <img src={logo} alt="Dhruvil" width={50} height={50} />
        </Typography>
      </Box>
      <List>
        <ListItem button>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Features" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Portfolio" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Resume" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Clients" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Pricing" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Blog" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Contact" />
        </ListItem>
      </List>
    </Box>
  );

  return (
    <header className="header">
      <div className="logo-container">
        <div className="logo">
          <img src={logo} alt="Dhruvil" width={50} height={50} />
        </div>
        <div className="logo-text">Dhruvil</div>
      </div>
      <nav className="menu">
        <div className="desktop-menu">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">Features</a></li>
            <li><a href="#services">Portfolio</a></li>
            <li><a href="#contact">Resume</a></li>
            <li><a href="#contact">Clients</a></li>
            <li><a href="#contact">Pricing</a></li>
            <li><a href="#contact">Blog</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="mobile-menu">
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            className="menu-icon"
          >
            <MenuIcon />
          </IconButton>
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            sx={{
              "& .MuiDrawer-paper": {
                width: "70%",
              },
            }}
          >
            {drawerContent}
          </Drawer>
        </div>
      </nav>
    </header>
  );
};

export default Header;
