import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  IconButton,
} from "@mui/material";
import { LinkedIn, YouTube, Facebook, Instagram } from "@mui/icons-material";
import { Link as ScrollLink, scroller } from "react-scroll";

const Footer = (link) => {
  const [activeLink, setActiveLink] = useState("");

  const linkStyle = {
    color: activeLink === `#${link}` ? "blue" : "#fff",
    textDecoration: "none",
    cursor: "pointer",
  };

  const handleHover = (event) => {
    event.target.style.color = "blue"; 
  };

  const handleLeave = (event) => {
    event.target.style.color = "#fff"; 
  };

  const handleLinkClick = (link) => {
    scroller.scrollTo(link, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
    setActiveLink(`#${link}`);
  };

  return (
    <section id="footer">
      <Box
        sx={{
          backgroundColor: "#000",
          color: "#fff",
          py: 5,
          textAlign: "center",
        }}
      >
        <Container maxWidth={false} sx={{ px: 0 }}>
          <Grid container spacing={4} sx={{ justifyContent: "center" }}>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" color="primary">
                Dhruvil Padshala
              </Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                +91 7016881034
                <br />
                padshaladhruvil5@gmail.com
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6">Services</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                Web Development
                <br />
                UI/UX Design
                <br />
                App Development
                <br />
                Software Development
                <br />
                Social Media Marketing
                <br />
                Ad Promotion
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6">Links</Typography>
              <Typography variant="body2" sx={{ mt: 1 }}>
                <ScrollLink
                  to="home"
                  spy={true}
                  smooth={true}
                  duration={800}
                  style={linkStyle}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                  onClick={() => handleLinkClick("home")}
                >
                  Home
                </ScrollLink>
                <br />
                <ScrollLink
                  to="features"
                  spy={true}
                  smooth={true}
                  duration={800}
                  style={linkStyle}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                  onClick={() => handleLinkClick("features")}
                >
                  Features
                </ScrollLink>
                <br />
                <ScrollLink
                  to="portfolio"
                  spy={true}
                  smooth={true}
                  duration={800}
                  style={linkStyle}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                  onClick={() => handleLinkClick("portfolio")}
                >
                  Portfolio
                </ScrollLink>
                <br />
                <ScrollLink
                  to="resume"
                  spy={true}
                  smooth={true}
                  duration={800}
                  style={linkStyle}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                  onClick={() => handleLinkClick("resume")}
                >
                  Resume
                </ScrollLink>
                <br />
                <ScrollLink
                  to="blog"
                  spy={true}
                  smooth={true}
                  duration={800}
                  style={linkStyle}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                  onClick={() => handleLinkClick("blog")}
                >
                  Blog
                </ScrollLink>
                <br />
                <ScrollLink
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={800}
                  style={linkStyle}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                  onClick={() => handleLinkClick("contact")}
                >
                  Contact
                </ScrollLink>
              </Typography>
            </Grid>
          </Grid>
          <Box sx={{ mt: 5, textAlign: "center" }}>
            <IconButton color="inherit">
              <LinkedIn />
            </IconButton>
            <IconButton color="inherit">
              <Instagram />
            </IconButton>
            <IconButton color="inherit">
              <YouTube />
            </IconButton>
            <IconButton color="inherit">
              <Facebook />
            </IconButton>
          </Box>
          <Typography variant="body2" sx={{ mt: 3, textAlign: "center" }}>
            &copy; All rights reserved.
          </Typography>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 1 }}>
            <MuiLink
              href="#"
              sx={linkStyle}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              Terms of Use
            </MuiLink>
            <MuiLink
              href="#"
              sx={linkStyle}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              Privacy Policy
            </MuiLink>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default Footer;
