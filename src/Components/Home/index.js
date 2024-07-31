import React, { useState, useEffect } from "react";
import { Container, Box, Typography, Grid, Avatar } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InIcon from "@mui/icons-material/InsertPhoto"; // Replace with the correct icon
import SketchIcon from "@mui/icons-material/InsertPhoto"; // Replace with the correct icon
import FigmaIcon from "@mui/icons-material/InsertPhoto"; // Replace with the correct icon
import profilePic from "../../assets/Home/Dhruvil.jpg";

const Home = () => {
  return (
    <Container className="rn-slider-area" sx={{ p: 4 }}>
      <Grid container spacing={6} alignItems="center">
        <Grid item xs={12} md={6} order={{ xs: 2, md: 1 }}>
          <Box
            className="text"
            sx={{ textAlign: { xs: "left", md: "left" }}}
          >
            <Typography variant="body1">Welcome to my world</Typography>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: { xs: "left", md: "flex-start" },
                p: 2,
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "2rem", sm: "2rem", md: "3rem" },
                  fontWeight: "bold",
                  textAlign: { xs: "left", md: "left" },
                  color: "black",
                }}
              >
                Hi, I'm
                <Typography
                  variant="h4"
                  component="span"
                  sx={{
                    color: "red",
                    ml: 1,
                    fontWeight: "bold",
                    fontSize: { xs: "2rem", sm: "2rem", md: "3rem" },
                  }}
                >
                  Dhruvil
                </Typography>
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
                  fontWeight: "bold",
                  textAlign: { xs: "left", md: "left" },
                  color: "red",
                  mt: 1,
                }}
              >
                a
                <Typography
                  variant="h4"
                  component="span"
                  sx={{
                    color: "black",
                    fontSize: { xs: "1.5rem", sm: "2rem", md: "3rem" },
                    ml: 1,
                  }}
                >
                  <AlternatingText />
                </Typography>
              </Typography>
            </Box>
            <Typography
              variant="body1"
              className="description"
              sx={{
                mt: 2,
                fontSize: { xs: "0.875rem", sm: "1rem", md: "1.125rem" },
                textAlign: { xs: "left", md: "left" },
                px: { xs: 3, sm: 4, md: 0 },
                lineHeight: { xs: "1.5", sm: "1.75", md: "2" },
              }}
            >
              As a B.Tech student in Computer Engineering, I am passionate about
              web and app development. I have hands-on experience with React,
              React Native, JavaScript and TypeScript, allowing me to build
              robust and user-friendly applications. I'm always open to
              connecting with like-minded professionals, discussing potential
              opportunities, or simply exchanging ideas.
            </Typography>
          </Box>
          <SocialsSection />
        </Grid>
        <Grid item xs={12} md={6} order={{ xs: 1, md: 2 }}>
          <Box className="thumbnail">
            <img
              src={profilePic}
              alt="Profile"
              style={{ width: "100%", borderRadius: "20px" }}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

const AlternatingText = () => {
  const words = ["Developer.", "Professional coder", "Programmer."];
  const [visibleIndex, setVisibleIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setVisibleIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 5000); // Change the interval time as needed

    return () => clearInterval(intervalId);
  }, [words.length]);

  return (
    <div className="cd-words-wrapper" style={{ fontWeight: "normal" }}>
      {words.map((word, index) => (
        <b
          key={index}
          className={index === visibleIndex ? "is-visible" : "is-hidden"}
        >
          {word}
        </b>
      ))}
    </div>
  );
};

const SocialsSection = () => {
  return (
    <Box className="index" sx={{ p: 4, backgroundColor: "white" }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box className="socials" textAlign="center">
            <Typography variant="body1">FIND WITH ME</Typography>
            <Box
              className="icons"
              display="flex"
              justifyContent="center"
              mt={2}
            >
              <Avatar sx={{ m: 1, bgcolor: "#ffffff" }}>
                <FacebookIcon color="primary" />
              </Avatar>
              <Avatar sx={{ m: 1, bgcolor: "#ffffff" }}>
                <InstagramIcon color="secondary" />
              </Avatar>
              <Avatar sx={{ m: 1, bgcolor: "#ffffff" }}>
                <LinkedInIcon color="primary" />
              </Avatar>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="skills" textAlign="center">
            <Typography variant="body1">BEST SKILL ON</Typography>
            <Box
              className="icons"
              display="flex"
              justifyContent="center"
              mt={2}
            >
              <Avatar sx={{ m: 1, bgcolor: "#ffffff" }}>
                <InIcon sx={{ color: "#E1306C" }} />
              </Avatar>
              <Avatar sx={{ m: 1, bgcolor: "#ffffff" }}>
                <SketchIcon sx={{ color: "#FDB300" }} />
              </Avatar>
              <Avatar sx={{ m: 1, bgcolor: "#ffffff" }}>
                <FigmaIcon sx={{ color: "#F24E1E" }} />
              </Avatar>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Home;
