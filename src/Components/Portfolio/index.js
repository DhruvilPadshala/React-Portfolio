import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import Portfolio1 from "../../assets/Portfolio/portfolio.png";
import App from "../../assets/Portfolio/gate-pass-modified.png";
import admin from "../../assets/Portfolio/admin.png";
import GatePassProjectDetails from "../gate-pass";

const portfolioItems = [
  {
    title: "Portfolio web development",
    category: " web Development",
    image: Portfolio1,
    onclick: () => <GatePassProjectDetails />,
  },
  {
    title: "Mobile app landing design & maintain",
    category: "App Development",
    image: App,
    onclick: () => <GatePassProjectDetails />,
  },
  {
    title: "Gate pass management system",
    category: "Admin panel",
    image: admin,
    onclick: () => <GatePassProjectDetails />,
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <Box
        sx={{
          backgroundColor: "#f0f2f5",
          flexGrow: 1,
          mt: { xs: 3, md: 3 },
          padding: { xs: 1, md: 2 },
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", md: "75%" },
          margin: "0 auto",
        }}
      >
        <Typography
          variant="h2"
          component="h2"
          fontWeight={"bold"}
          gutterBottom
          align="center"
          sx={{
            fontSize: { xs: "2.5rem", md: "4rem" },
            textAlign: "center",
          }}
        >
          My Portfolio
        </Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
          {portfolioItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                sx={{
                  maxWidth: "100%",
                  height: "100%",
                  padding: 2.5,
                  borderRadius: 5,
                  backgroundColor: "#f0f2f5",
                }}
              >
                <CardMedia
                  component="img"
                  image={item.image}
                  alt={item.title}
                  // onClick={item.onclick}
                  sx={{
                    borderRadius: 5,
                    height: { xs: "70%", md: "80%" },
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                  <Typography
                    variant="body2"
                    color="blue"
                    component="p"
                    sx={{ mb: 1 }}
                  >
                    {item.category.toUpperCase()}
                  </Typography>
                  <Typography
                    variant="h5"
                    component="h5"
                    sx={{
                      fontSize: {
                        xs: "1.2rem", // font size for mobile devices
                        sm: "1.25rem", // font size for small screens
                      },
                    }}
                  >
                    {item.title}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default Portfolio;
