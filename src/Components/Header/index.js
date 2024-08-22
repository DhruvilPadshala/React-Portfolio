import React, { useState, useEffect, useCallback } from "react";
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
import CloseIcon from "@mui/icons-material/Close";
import "../../../src/App.css";
import logo from "../../assets/Logo/Dhruvil-modified.png";
import { Facebook, Instagram, LinkedIn } from "../Home/index4";
import { navLinksdata } from "../../Constant/index";
import { scroller } from "react-scroll";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  const handleLinkClick = (link) => {
    scroller.scrollTo(link, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
    setActiveLink(`#${link}`);
    setDrawerOpen(false);
  };

  const controlHeader = useCallback(() => {
    if (window.scrollY > lastScrollY) {
      setShowHeader(false);
    } else {
      setShowHeader(true);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY]);
  
  useEffect(() => {
    window.addEventListener("scroll", controlHeader);
  
    return () => {
      window.removeEventListener("scroll", controlHeader);
    };
  }, [controlHeader]);
  

  const drawerContent = (
    <Box
      sx={{
        p: 2,
        backgroundColor: "#f0f2f5",
        display: "flex",
        flexDirection: "column",
        height: "100vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Typography variant="h6" sx={{ display: "flex", alignItems: "center" }}>
          <img src={logo} alt="Dhruvil" width={50} height={50} />
        </Typography>
        <IconButton
          onClick={toggleDrawer(false)}
          sx={{ color: "text.primary" }}
        >
          <CloseIcon fontSize="large" />
        </IconButton>
      </Box>
      <List>
        {navLinksdata.map((item) => (
          <ListItem
            button
            key={item._id}
            onClick={() => handleLinkClick(item.link)}
          >
            <ListItemText primary={item.title} />
          </ListItem>
        ))}
      </List>
      <Box
        className="icons"
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{ mt: { xs: 0, md: 2 } }}
      >
        <Facebook sx={{ mx: 1 }} />
        <Instagram sx={{ mx: 1 }} />
        <LinkedIn sx={{ mx: 1 }} />
      </Box>
    </Box>
  );

  return (
    <>
      <header className={`header ${showHeader ? "visible" : "hidden"}`}>
        <div className="logo-container">
          <img src={logo} alt="Dhruvil" width={50} height={50} />
          <div className="logo-text">Dhruvil</div>
        </div>
        <nav className="menu">
          <div className="desktop-menu">
            <ul>
              {navLinksdata.map((item) => (
                <li key={item._id}>
                  <a
                    href={`#${item.link}`}
                    className={
                      activeLink === `#${item.link}` ? "active" : "inactive"
                    }
                    onClick={() => handleLinkClick(item.link)}
                    sx={{
                      "&:hover": {
                        color: "#007bff",
                      },
                    }}
                  >
                    {item.title}
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
              sx={{ mr: 3 }}
            >
              <MenuIcon fontSize="large" />
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
    </>
  );
};

export default Header;
