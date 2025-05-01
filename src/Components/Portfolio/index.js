import React from "react";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  Typography,
} from "@mui/material";
import Portfolio1 from "../../assets/Portfolio/portfolio.png";
import App from "../../assets/Portfolio/gate-pass.png";
import admin from "../../assets/Portfolio/admin.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";

const projects = [
  {
    id: 1,
    title: "Developer Portfolio Website",
    description:
      "A sleek and professional personal portfolio website designed to showcase my skills, projects, and services. The site highlights my experience and expertise through a clean and modern design.   It provides a user-friendly interface for visitors to easily navigate through my work.",
    image: Portfolio1,
    tags: [
      "React",
      "Material UI",
      "Tailwind CSS",
      "React Router Dom",
      "Email.JS",
    ],
    demoUrl: "/",
    githubUrl: "https://github.com/DhruvilPadshala/React-Portfolio",
    newPageUrl: "/new-page-1",
  },
  {
    id: 2,
    title: "Mobile App Development",
    description:
      "A user-friendly mobile interface designed to help users manage daily tasks and track productivity.",
    image: App,
    tags: [
      "React-Native",
      "React Native Paper",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    demoUrl: "",
    githubUrl: "https://github.com/DhruvilPadshala/Gate-Pass-App",
  },
  {
    id: 3,
    title: "Gate Pass Management System",
    description:
      "A secure platform that simplifies and monitors gate pass requests within an organization.",
    image: admin,
    tags: [
      "Next.js",
      "Tailwind CSS",
      "Shadcn/ui",
      "Node.js",
      "Express.js",
      "MongoDB",
    ],
    demoUrl: "https://dhruvil-gate-pass.vercel.app/",
    githubUrl: "https://github.com/dhruvilshah884/gate-pass-admin-panel",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio">
      <div>
        <Box sx={{ py: 8, px: 2 }}>
          <Box sx={{ textAlign: "center", mb: 6 }}>
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
            <Typography
              variant="subtitle1"
              color="text.secondary"
              maxWidth="600px"
              mx="auto"
            >
              Explore my recent projects and see how I can help bring your ideas
              to life.
            </Typography>
          </Box>

          <Grid
            container
            spacing={4}
            justifyContent="center"
            sx={{ width: "90%", margin: "0 auto", backgroundColor: "#f0f2f5" }}
          >
            {projects.map((project) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={4}
                key={project.id}
                className="flex justify-center items-center"
              >
                <Card
                  elevation={3}
                  sx={{
                    transition: "transform 0.3s",
                    "&:hover": {
                      transform: "scale(1.02)",
                    },
                    backgroundColor: "#f0f2f5",
                    height: 600,
                    borderRadius: 5,
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
                  }}
                >
                  <CardMedia
                    component="img"
                    height="350"
                    image={project.image}
                    alt={project.title}
                  />
                  <CardContent className="w-[90%] mx-auto">
                    <Typography variant="h6" gutterBottom>
                      {project.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" mb={2}>
                      {project.description}
                    </Typography>
                    <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                      {project.tags.map((tag) => (
                        <Chip
                          key={tag}
                          label={tag}
                          color="primary"
                          variant="outlined"
                        />
                      ))}
                    </Box>
                  </CardContent>
                  <CardActions
                    sx={{
                      justifyContent: "space-between",
                      px: 2,
                      pb: 2,
                    }}
                  >
                    <Button
                      variant="outlined"
                      size="small"
                      startIcon={<GitHubIcon />}
                      href={project.githubUrl}
                      target="_blank"
                    >
                      Code
                    </Button>
                    <Button
                      variant="contained"
                      size="small"
                      endIcon={<OpenInNewIcon />}
                      href={project.demoUrl}
                      target="_blank"
                    >
                      Live Demo
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </section>
  );
}
