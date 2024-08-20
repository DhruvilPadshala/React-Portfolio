import React from "react";
import {
  Box,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

const blogs = [
  {
    id: 1,
    title: "T-shirt design is the part of design",
    category: "Canada",
    timeToRead: "2 min read",
    image:
      "https://cdn.vectorstock.com/i/500p/92/00/emblem-with-eagle-vector-4119200.jpg",
  },
  {
    id: 2,
    title: "The services provide for design",
    category: "Development",
    timeToRead: "2 hour read",
    image:
      "https://cdn.vectorstock.com/i/500p/92/00/emblem-with-eagle-vector-4119200.jpg",
  },
  {
    id: 3,
    title: "Mobile app landing design & app maintain",
    category: "Application",
    timeToRead: "5 min read",
    image:
      "https://cdn.vectorstock.com/i/500p/92/00/emblem-with-eagle-vector-4119200.jpg",
  },
];

const Blog = () => {
  return (
    <section id="blog">
      <Box
        sx={{
          flexGrow: 1,
          height: "100vh",
          p: 3,
          backgroundColor: "#f0f2f5",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "85%", md: "75%" },
          margin: "0 auto",
          mt: { xs: 3, md: 3 },
          padding: 2,
        }}
      >
        <Typography
          variant="h5"
          color="primary"
          align="center"
          sx={{ mb: 5, alignItems: "center" }}
        >
          Visit my blog
        </Typography>
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
          Blog
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {blogs.map((blog) => (
            <Grid item xs={12} sm={6} md={4} key={blog.id}>
              <Card sx={{ borderRadius: "20px", boxShadow: 3,alignItems: "center",backgroundColor: "#f0f2f5" }}>
                <CardMedia
                  component="img"
                  image={blog.image}
                  alt={blog.title}
                  sx={{
                    width: "92%",
                    height: 350,
                    padding: 2.5,
                    borderRadius: 10,
                    transition:
                      "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      transform: "scale(1.05)",
                    },
                  }}
                />
                <CardContent sx={{ p: 2, textAlign: "center" }}>
                  <Typography
                    variant="overline"
                    color="primary"
                    sx={{ fontWeight: "bold" }}
                  >
                    {blog.category.toUpperCase()}
                  </Typography>
                  <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                    {blog.title}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      mt: 1,
                      color: "text.secondary",
                    }}
                  ></Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default Blog;
