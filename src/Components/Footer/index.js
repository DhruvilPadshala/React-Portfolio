import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
} from "@mui/material";
import { LinkedIn, YouTube, Facebook, Instagram } from "@mui/icons-material";

const Footer = () => {
  const linkStyle = {
    color: "#fff",
    textDecoration: "none",
  };

  const handleHover = (event) => {
    event.target.style.color = "#ddd"; // Optional: Change color on hover
  };

  const handleLeave = (event) => {
    event.target.style.color = "#fff"; // Reset to original color
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
                <Link
                  href="#"
                  sx={linkStyle}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                >
                  Home
                </Link>
                <br />
                <Link
                  href="#"
                  sx={linkStyle}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                >
                  Features
                </Link>
                <br />
                <Link
                  href="#"
                  sx={linkStyle}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                >
                  Portfolio
                </Link>
                <br />
                <Link
                  href="#"
                  sx={linkStyle}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                >
                  Resume
                </Link>
                <br />
                <Link
                  href="#"
                  sx={linkStyle}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                >
                  Blog
                </Link>
                <br />
                <Link
                  href="#"
                  sx={linkStyle}
                  onMouseEnter={handleHover}
                  onMouseLeave={handleLeave}
                >
                  Contact
                </Link>
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
            <Link
              href="#"
              sx={linkStyle}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              Terms of Use
            </Link>
            <Link
              href="#"
              sx={linkStyle}
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              Privacy Policy
            </Link>
          </Box>
        </Container>
      </Box>
    </section>
  );
};

export default Footer;
