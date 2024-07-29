import React from "react";
import "../../../src/App.css";
import { Container, Box, Typography, Grid, Avatar } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "@mui/icons-material";
import profilePic from "../../assets/Home/Dhruvil.jpg";
import AlternatingText from "./index2"; 
const Home = () => {
  return (
    <Container className="rn-slider-area">
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <Box className="thumbnail">
            <img src={profilePic} alt="Profile"style={{width: "100%",borderRadius: "20px"}} />
          </Box>
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Box className="text">
            <Typography variant="h6" className="subtitle">
              WELCOME TO MY WORLD
            </Typography>
            <Typography variant="h2" className="title">
              Hi, I'm <span className="highlight">Dhruvil</span>
            </Typography>
            <Typography variant="h3" className="header-caption">
              a  <AlternatingText />
            </Typography>
            <Typography variant="body1" className="description">
              As a B.Tech student in Computer Engineering, I am passionate about
              web and app development. I have hands-on experience with React,
              React Native, JavaScript and TypeScript, allowing me to build
              robust and user-friendly applications. My goal is to leverage my
              skills to create innovative solutions that enhance user
              experiences and solve real-world problems. I'm always open to
              connecting with like-minded professionals, discussing potential
              opportunities, or simply exchanging ideas.
            </Typography>
          </Box>
          <Box className="socials">
            <Typography variant="body1">FIND WITH ME</Typography>
            <Box className="icons">
              <Avatar>
                <Facebook />
              </Avatar>
              <Avatar>
                <Instagram />
              </Avatar>
              <Avatar>
                <LinkedIn />
              </Avatar>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
