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
  return (
    <Box sx={{ backgroundColor: "#000", color: "#fff", py: 5 ,textAlign:"center"}}>
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
              <Link href="#" color="inherit">
                Home
              </Link>
              <br />
              <Link href="#" color="inherit">
                Features
              </Link>
              <br />
              <Link href="#" color="inherit">
                Portfolio
              </Link>
              <br />
              <Link href="#" color="inherit">
                Resume
              </Link>
              <br />
              <Link href="#" color="inherit">
                Blog
              </Link>
              <br />
              <Link href="#" color="inherit">
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
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            Terms of Use
          </Link>
          <Link href="#" color="inherit" sx={{ mx: 1 }}>
            Privacy Policy
          </Link>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
