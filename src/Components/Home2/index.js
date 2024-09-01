import React, { useEffect } from "react";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { keyframes } from "@mui/system";
import { scroller } from "react-scroll";
import AlternatingText from "../Home/index2";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Home = () => {
  useEffect(() => {
    document.title = "Dhruvil";
  }, []);
  const scrollToSection = (section) => {
    scroller.scrollTo(section, {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };
  return (
    <div id="home">
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0, 0, 0,0.7), rgba(0, 0, 0, 0.5)), url('https://miro.medium.com/v2/resize:fit:1400/1*1JOVEWrC_7dXJyzz0qEOXg.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "100vh",
          color: "white",
          display: "flex",
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          margin: "0 auto",
        }}
      >
        <Container>
          <Grid
            container
            alignItems="center"
            justifyContent="flex-start"
            style={{
              height: "80vh",
              width: "100%",
              textAlign: "left",
              margin: "0 auto",
            }}
          >
            <Grid item xs={12} md={8}>
              <Typography
                variant="h4"
                sx={{
                  color: "white",
                  fontWeight: "bold",
                  fontSize: { xs: "1.6rem", md: "3.2rem" },
                  Width: "100%",
                  lineHeight: 1.4,
                  textShadow: "4px 4px 8px rgba(0, 0, 0, 0.8)",
                  animation: `${fadeIn} 1s ease-out`,
                  marginBottom: { xs: "40px", md: "30px" },
                  textAlign: "left",
                  textTransform: "uppercase",
                  padding: { xs: "0 10px", md: "0" },
                }}
              >
                Hi I'm Dhruvil
                <br />
                a <AlternatingText />
              </Typography>
              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  padding: { xs: "0 10px", md: "0" },
                  fontWeight: "normal",
                  textTransform: "uppercase",
                  fontSize: { xs: "1rem", md: "1.2rem" },
                  maxWidth: "700px",
                  lineHeight: 1.4,
                  textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                  animation: `${fadeIn} 1s ease-out `,
                  marginBottom: { xs: "40px", md: "50px" },
                  textAlign: "left",
                }}
              >
                I specialize in creating efficient, user-friendly applications
                designed to solve real-world problems. With a focus on
                innovation and usability, I transform ideas into impactful
                digital experiences. Let's collaborate to build something truly
                amazing!
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  gap: 2,
                  flexDirection: { xs: "column", sm: "row" },
                }}
              >
                <Button
                  variant="outlined"
                  onClick={() => scrollToSection("contact")}
                  size="medium"
                  sx={{
                    borderRadius: "25px",
                    padding: { xs: "6px 12px", md: "8px 15px" },
                    textAlign: "left",
                    fontWeight: "bold",
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    textTransform: "uppercase",
                    color: "white",
                    animation: `${fadeIn} 1s ease-out `,
                    border: "2px solid white",
                    transition: "color 0.3s, border-color 0.3s",
                    ":hover": {
                      color: "#0056b3",
                      borderColor: "#0056b3",
                    },
                  }}
                >
                  Contact Me
                </Button>
                <Button
                  variant="outlined"
                  onClick={() => scrollToSection("portfolio")}
                  size="medium"
                  sx={{
                    borderRadius: "25px",
                    padding: { xs: "6px 12px", md: "8px 15px" },
                    textAlign: "left",
                    fontWeight: "bold",
                    fontSize: { xs: "1rem", md: "1.2rem" },
                    textTransform: "uppercase",
                    color: "white",
                    animation: `${fadeIn} 1s ease-out `,
                    border: "2px solid white",
                    transition: "color 0.3s, border-color 0.3s",
                    ":hover": {
                      color: "#0056b3",
                      borderColor: "#0056b3",
                    },
                  }}
                >
                  My Portfolio
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Home;
