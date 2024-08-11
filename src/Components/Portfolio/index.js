import React from "react";
import {
  Grid,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import Portfolio1 from "../../assets/Portfolio/portfolio.jpg";
import Portfolio2 from "../../assets/Portfolio/portfolio2.jpg";
import Portfolio3 from "../../assets/Portfolio/portfolio3.jpg";
import Portfolio4 from "../../assets/Portfolio/portfolio4.jpg";
import Portfolio5 from "../../assets/Portfolio/portfolio5.jpg";
import Portfolio6 from "../../assets/Portfolio/portfolio6.jpg";

const portfolioItems = [
  {
    title: "The services provide for design",
    category: "Development",
    image: Portfolio1,
  },
  {
    title: "Mobile app landing design & app maintain",
    category: "Application",
    image: Portfolio2,
  },
  {
    title: "Logo design creativity & Application",
    category: "Photoshop",
    image: Portfolio3,
  },
  {
    title: "The services provide for design",
    category: "Development",
    image: Portfolio5,
  },
  {
    title: "Mobile app landing design & app maintain",
    category: "Application",
    image: Portfolio6,
  },
  {
    title: "Logo design creativity & Application",
    category: "Photoshop",
    image: Portfolio4,
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
          padding: 2,
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          width: { xs: "85%", md: "75%" },
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
                  maxWidth: 400,
                  height: "100%",
                  borderRadius: 5,
                  backgroundColor: "#f0f2f5",
                  transition:
                    "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                  "&:hover": {
                    transform: "scale(1.05)",
                    boxShadow: 3,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="250"
                  image={item.image}
                  alt={item.title}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: "center" }}>
                  <Typography variant="body2" color="blue" component="p">
                    {item.category.toUpperCase()}
                  </Typography>
                  <Typography variant="h5" component="h3">
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
