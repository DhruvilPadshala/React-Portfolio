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
    <>
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
              <li>
                <a
                  href="#home"
                  className={activeLink === "#home" ? "active" : "inactive"}
                  onClick={() => handleLinkClick("#home")}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className={activeLink === "#about" ? "active" : "inactive"}
                  onClick={() => handleLinkClick("#about")}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className={activeLink === "#services" ? "active" : "inactive"}
                  onClick={() => handleLinkClick("#services")}
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#resume"
                  className={activeLink === "#resume" ? "active" : "inactive"}
                  onClick={() => handleLinkClick("#resume")}
                >
                  Resume
                </a>
              </li>
              <li>
                <a
                  href="#clients"
                  className={activeLink === "#clients" ? "active" : "inactive"}
                  onClick={() => handleLinkClick("#clients")}
                >
                  Clients
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className={activeLink === "#pricing" ? "active" : "inactive"}
                  onClick={() => handleLinkClick("#pricing")}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#blog"
                  className={activeLink === "#blog" ? "active" : "inactive"}
                  onClick={() => handleLinkClick("#blog")}
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className={activeLink === "#contact" ? "active" : "inactive"}
                  onClick={() => handleLinkClick("#contact")}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className="mobile-menu">
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={toggleDrawer(true)}
              className="menu-icon"
              sx={{ mr: 5 }}
            >
              <MenuIcon fontSize="large"/>
            </IconButton>
            <Drawer
              anchor="left"
              open={drawerOpen}
              onClose={toggleDrawer(false)}
              sx={{
                "& .MuiDrawer-paper": {
                  width: "70%", backgroundcolor: "#f0f2f5"

                },
              }}
            >
              {drawerContent}
            </Drawer>
          </div>
        </nav>
      </header>
      <div className="main-content">
        {/* Your main content goes here */}
      </div>
    </>
  );
};

export default Header;
