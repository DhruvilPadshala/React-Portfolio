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
import logo from "../../assets/Logo/Dhruvil-modified.png";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const toggleDrawer = (open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
  };

  const drawerContent = (
    <Box sx={{ width: "70%", p: 2 }}>
      <Typography variant="h6">
        <img src={logo} alt="Dhruvil" width={50} height={50} />
      </Typography>
      <List>
        {["Home", "Features", "Portfolio", "Resume", "Clients", "Pricing", "Blog", "Contact"].map((text, index) => (
          <ListItem button key={index}>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <header className="header">
        <div className="logo-container">
          <img src={logo} alt="Dhruvil" width={50} height={50} />
          <div className="logo-text">Dhruvil</div>
        </div>
        <nav className="menu">
          <div className="desktop-menu">
            <ul>
              {["Home", "Features", "Portfolio", "Resume", "Clients", "Pricing", "Blog", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={link}
                    className={activeLink === link ? "active" : "inactive"}
                    onClick={() => handleLinkClick(link)}
                  >
                    {link.replace("#", "")}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mobile-menu">
            <IconButton
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon fontSize="large" />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
              {drawerContent}
            </Drawer>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
