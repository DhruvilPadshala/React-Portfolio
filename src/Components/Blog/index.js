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
    title:
      " web developers and designers are constantly in search of new sources of knowledge and inspiration. Here is a list of the top ten blogs of 2024 that every professional in the field of web development should regularly visit.",
    category: "Web Devlopment",
    image:
      // "https://www.cssoftsolutions.com/wp-content/uploads/2024/01/Best-Web-Development.jpg",
      // "https://admin.12grids.com/uploads/blogs/original_cover_images/Webp//14_Web_Development_Trends_12Grids.webp",
      "https://atlasiko.com/assets/blog/website-design.jpg",
  },
  {
    id: 2,
    title:
      "Mastering mobile app development in 2024 demands a structured approach, from ideation to deployment. Adapting to evolving tools, trends, and consumer expectations ensures your app stands out and delivers value.",
    category: "App Development",
    image:
      "https://buildfire.com/wp-content/uploads/2024/02/social-app-scaled.jpg",
  },
  {
    id: 3,
    title:
      "All-in-one platform for marketing, sales, and customer service. Features automation and detailed reporting. Supports project management and organization. Versatile for personal and team use.",
    category: "Software Development",
    image:
      "https://acropolium.com/img/articles/saas-application-development-2022/img01.jpg",
  },
];

const Blog = () => {
  return (
    <section id="blog">
      <Box
        sx={{
          flexGrow: 1,
          p: { xs: 1, md: 3 },
          backgroundColor: "#f0f2f5",
          justifyContent: "center",
          alignItems: "center",
          width: { xs: "100%", md: "75%" },
          margin: "0 auto",
          mt: { xs: 3, md: 3 },
          padding: 2,
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
          Blog
        </Typography>
        <Grid container spacing={3} justifyContent="center">
          {blogs.map((blog) => (
            <Grid item xs={12} sm={6} md={4} key={blog.id}>
              <Card
                sx={{
                  borderRadius: "20px",
                  boxShadow: 3,
                  alignItems: "center",
                  backgroundColor: "#f0f2f5",
                }}
              >
                <CardMedia
                  component="img"
                  image={blog.image}
                  alt={blog.title}
                  sx={{
                    width: "100%",
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
                    sx={{
                      fontWeight: "bold",
                      fontSize: {
                        xs: "0.8rem", // font size for mobile devices
                        sm: "1rem", // font size for small screens
                      },
                    }}
                  >
                    {blog.category.toUpperCase()}
                  </Typography>
                  <Typography
                    variant="h6"
                    sx={{
                      fontWeight: "bold",
                      fontSize: {
                        xs: "1.2rem", // font size for mobile devices
                        sm: "1.25rem", // font size for small screens
                      },
                    }}
                  >
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
