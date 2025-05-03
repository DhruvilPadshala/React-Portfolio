import React from "react";
import {
  Tabs,
  Tab,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import "../../../src/App.css";

const contentData = {
  0: [
    {
      title: "Education Quality",
      subTitle: "Silver Oak University",
      subTitle1: "University of dvi (2022 - 2026)",
      description:
        "The education at Silver Oak University is designed to be highly interactive and engaging. With a focus on hands-on learning and real-world applications, the curriculum ensures that students not only gain theoretical knowledge but also practical skills. The program emphasizes a comprehensive approach, integrating various teaching methods to enhance understanding and retention.",
    },
    {
      title: "Job Experience",
      subTitle: "Internship",
      subTitle1: "Quickint Solutions ",
      description:
        "During the internship at Quickint Solutions, I gained valuable experience and practical skills in a dynamic work environment. My responsibilities included hands-on projects, collaboration with team members, and applying theoretical knowledge to real-world scenarios. This experience allowed me to develop problem-solving skills, enhance my technical abilities, and gain insight into the professional world.",
    },
    {
      title: "",
      subTitle: "11 & 12 Science",
      subTitle1: "Science of dvi (2020 - 2022)",
      description:
        " Explore advanced concepts in physics, chemistry, and Mathematics through interactive lessons and practical experiments. This educational journey is designed to deepen your understanding of scientific principles and prepare you for higher education and future careers in science. Engage with hands-on activities and real-world applications to solidify your knowledge and critical thinking skills.",
    },
    {
      title: "",
      subTitle: "Internship",
      subTitle1: "Way to Web",
      description:
        "This course covers fundamental principles such as layout, color theory, typography, and responsive design. Gain practical experience with popular design tools and techniques to build engaging and functional web interfaces. Through interactive lessons and real-world projects, you'll develop the skills needed to craft compelling web experiences that captivate users and achieve your design goals.",
    },
  ],
  1: [
    {
      title: "Design Skill",
      subTitle: "Canva",
      description:
        "Gain hands-on experience with Canva, a powerful design tool for creating visually stunning graphics. This educational experience emphasizes interactive learning, guiding you through Canva's features and techniques. Explore how to design eye-catching visuals, from social media posts to marketing materials. Enhance your design skills with practical exercises and real-world applications, enabling you to craft professional-quality graphics effortlessly.",
    },
    {
      title: "Design Skill",
      subTitle: "Figma",
      description:
        "Master Figma, an advanced design tool renowned for its collaborative capabilities and versatile features. This hands-on learning experience will guide you through Figma’s interface, from creating wireframes and prototypes to designing high-fidelity UI elements. Embrace interactive exercises that focus on real-world applications, enabling you to develop intuitive and user-centric designs. Enhance your design skills and teamwork with Figma’s powerful tools and features.",
    },
  ],
  2: [
    {
      title: "Fontend Skill",
      subTitle: "HTML, CSS, JavaScript",
      subTitle1: " ",
      description:
        "Learn to structure web content effectively with HTML, creating well-organized and accessible web pages Discover how to style and layout your web pages with CSS, from basic formatting to advanced design techniques.Enhance interactivity and dynamic functionality on your sites using JavaScript, including event handling and DOM manipulation.",
    },
    {
      title: "Backend Skill",
      subTitle: "Node.js",
      description:
        "Explore server-side JavaScript with Node.js, a runtime designed for building scalable network applications. Learn the basics of Node.js, including its event-driven architecture and non-blocking I/O. Develop server-side applications, handle asynchronous operations, and integrate with databases. Gain hands-on experience with practical projects to create efficient and high-performance web applications. Enhance your backend skills and leverage Node.js for robust development.",
    },
    {
      title: "",
      subTitle: "React.js",
      subTitle1: " Web Development",
      description:
        "Discover React.js, a powerful JavaScript library for building dynamic and interactive user interfaces. Learn to create and manage reusable components, handle state, and optimize performance. Dive into essential concepts like hooks and context to streamline your development process. Build real-world applications with practical, hands-on projects. Elevate your front-end development skills with React.js’s efficient and responsive design capabilities.",
    },
    {
      title: "",
      subTitle: "Express.js",
      description:
        "Learn Express.js, a minimalist web framework for Node.js that simplifies server-side development. Discover how to create robust APIs and handle routing with ease. Gain hands-on experience managing middleware, handling requests, and connecting to databases. Build scalable and efficient web applications through practical projects. Enhance your backend development skills with Express.js’s straightforward and flexible approach.",
    },
    {
      title: "",
      subTitle: "Next.js",
      subTitle1: " Web Development",
      description:
        "Explore Next.js, a React framework for building server-side rendered and static web applications. Learn to optimize performance with features like automatic code splitting and static site generation. Develop scalable and SEO-friendly applications using its powerful routing and API capabilities. Gain practical experience through hands-on projects, enhancing your full-stack development skills.",
    },
    {
      title: "",
      subTitle: "Database",
      description:
        "Explore MongoDB’s flexible NoSQL structure, MySQL’s reliable relational management, and PostgreSQL’s advanced features for complex queries. Learn to choose the right database for different use cases and optimize data storage and retrieval. Gain hands-on experience with each system through practical projects. Enhance your skills in managing diverse data environments effectively.",
    },
    {
      title: "",
      subTitle: "React-Native",
      subTitle1: " App Development",
      description:
        "Build cross-platform mobile apps with React Native, using JavaScript and React to create native-like experiences. Learn to develop and style components, manage state, and integrate with native modules. Gain practical experience through hands-on projects to deliver high-performance mobile applications. Enhance your skills in creating versatile and responsive apps for both iOS and Android.",
    },
  ],
};
const Resume = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <section id="resume">
      <Box
        sx={{
          flexGrow: 1,
          p: { xs: 1, md: 2 },
          backgroundColor: "#f0f2f5",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          width: { xs: "100%", md: "75%" },
          margin: "0 auto",
          mt: { xs: 3, md: 3 },
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
          My Resume
        </Typography>
        <Tabs
          value={selectedTab}
          onChange={handleTabChange}
          aria-label="resume tabs"
          className="tabs"
          TabIndicatorProps={{ style: { display: "none" } }}
          sx={{
            mb: 2,
            mt: 3,
            justifyContent: "center",
            alignItems: "center",
            width: { xs: "90%", md: "75%" },
            flexWrap: "wrap",
            "& .MuiTabs-flexContainer": {
              flexDirection: { xs: "column", sm: "row", md: "row" },
            },
            "& .MuiTab-root": {
              textAlign: "center",
            },
          }}
        >
          <Tab
            label="Education"
            sx={{ fontWeight: "bold" }}
            className={`tab ${selectedTab === 0 ? "Mui-selected" : ""}`}
          />
          <Tab
            label="Design Skills"
            sx={{ fontWeight: "bold" }}
            className={`tab ${selectedTab === 1 ? "Mui-selected" : ""}`}
          />
          <Tab
            label="Skills"
            sx={{ fontWeight: "bold" }}
            className={`tab ${selectedTab === 2 ? "Mui-selected" : ""}`}
          />
        </Tabs>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {contentData[selectedTab].map((item, index) => (
            <Grid item xs={12} md={6} key={index}>
              <Typography
                sx={{ fontSize: { xs: "1.5rem", md: "2rem" } }}
                gutterBottom
                fontWeight={"bold"}
              >
                {item.title}
              </Typography>
              <Card
                sx={{
                  height: { xs: "auto", md: "85%" },
                  width: { xs: "auto", md: "90%" },
                  backgroundColor: "#f0f2f5",
                  transition: "background-color 0.3s, color 0.3s",
                  "&:hover": {
                    backgroundColor: "blue",
                    color: "white",
                    "& .MuiTypography-root": {
                      color: "white",
                    },
                  },
                }}
              >
                <CardContent sx={{ p: 4, mb: 2 }}>
                  <Typography
                    sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }}
                    fontWeight={"semi-bold"}
                    color={"black"}
                  >
                    {item.subTitle}
                  </Typography>
                  <Typography color="textSecondary" mb={4}>
                    {item.subTitle1}
                  </Typography>
                  <Typography paragraph>{item.description}</Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </section>
  );
};

export default Resume;
