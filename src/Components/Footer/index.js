import React, { useState } from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  IconButton,
} from "@mui/material";
import { LinkedIn , Facebook, Instagram } from "@mui/icons-material";
import { Link as ScrollLink, scroller } from "react-scroll";

const Footer = (link) => {
  const [activeLink, setActiveLink] = useState("");

  const linkStyle = {
    color: activeLink === `#${link}` ? "blue" : "#aaaeaf",
    textDecoration: "none",
    cursor: "pointer",
  };

  const handleHover = (event) => {
    event.target.style.color = "blue";
  };

  const handleLeave = (event) => {
    event.target.style.color = "#aaaeaf";
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
              <Typography variant="h6" color="#fff">
                Dhruvil Padshala
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, color: "#aaaeaf" }}>
                +91 7016881034
                <br />
                padshaladhruvil5@gmail.com
              </Typography>
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6">Services</Typography>
              <Typography variant="body2" sx={{ mt: 1, color: "#aaaeaf" }}>
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
            <a
              href="https://www.facebook.com/dhruv.pansala?mibextid=ZbWKwL"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton color="inherit">
                <Facebook color="primary" />
              </IconButton>
            </a>
            <a
              href="https://www.instagram.com/_unique_boy_211?igsh=MTJyY2UyaWVhdng5bw=="
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton color="inherit">
                <Instagram color="secondary" />
              </IconButton>
            </a>
            <a
              href="https://www.linkedin.com/in/dhruvil-padshala-032630270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton color="inherit">
                <LinkedIn color="primary" />
              </IconButton>
            </a>
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
