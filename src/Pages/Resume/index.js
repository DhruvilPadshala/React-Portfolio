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
      subTitle: "University of DVI (1997 - 2001)",
      description:
        "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante .",

      rating: "4.30/5",
    },
    {
      title: "Job Experience",
      subTitle: "BSE In CSE (2004 - 2008)",
      description:
        "Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
      rating: "4.70/5",
    },
  ],
  1: [
    {
      title: "Professional Skills",
      subTitle: "University of DVI (1997 - 2001)",
      description:
        "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
      rating: "4.30/5",
    },
    {
      title: "Professional Experience",
      subTitle: "BSE In CSE (2004 - 2008)",
      description:
        "Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
      rating: "4.70/5",
    },
  ],
  2: [
    {
      title: "Experience",
      subTitle: "University of DVI (1997 - 2001)",
      description:
        "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
      rating: "4.30/5",
    },
    {
      title: "Previous Projects",
      subTitle: "BSE In CSE (2004 - 2008)",
      description:
        "Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
      rating: "4.70/5",
    },
  ],
  3: [
    {
      title: "Interview Tips",
      subTitle: "University of DVI (1997 - 2001)",
      description:
        "The education should be very interactual. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
      rating: "4.30/5",
    },
    {
      title: "Mock Interviews",
      subTitle: "BSE In CSE (2004 - 2008)",
      description:
        "Contrary to popular belief. Ut tincidunt est ac dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet sem in, lobortis mauris hendrerit ante.",
      rating: "4.70/5",
    },
  ],
};
const Resume = () => {
  const [selectedTab, setSelectedTab] = React.useState(0);

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        p: 2,
        backgroundColor: "#f0f2f5",
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        flexDirection: "column",
        width: { xs: "90%", md: "75%" },
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
          fontSize: { xs: "2rem", md: "3rem" },
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
        TabIndicatorProps={{ style: { display: "none" } }} // Remove bottom line indicator
        sx={{
          mb: 2,
          mt: 3,
          flexWrap: "wrap",
          "& .MuiTabs-flexContainer": {
            flexDirection: { xs: "column", md: "row" },
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
          label="Professional Skills"
          sx={{ fontWeight: "bold" }}
          className={`tab ${selectedTab === 1 ? "Mui-selected" : ""}`}
        />
        <Tab
          label="Experience"
          sx={{ fontWeight: "bold" }}
          className={`tab ${selectedTab === 2 ? "Mui-selected" : ""}`}
        />
        <Tab
          label="Interview"
          sx={{ fontWeight: "bold" }}
          className={`tab ${selectedTab === 3 ? "Mui-selected" : ""}`}
        />
      </Tabs>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {contentData[selectedTab].map((item, index) => (
          <Grid item xs={12} md={6} key={index}>
            <Typography sx={{fontSize: { xs: "1.5rem", md: "2rem" }}} gutterBottom fontWeight={"bold"}>
              {item.title}
            </Typography>
            <Card sx={{
                height: { xs: 'auto', md: '280px' },
                width: { xs: 'auto', md: '90%' },
                backgroundColor: "#f0f2f5",
                transition: 'background-color 0.3s, color 0.3s', 
                '&:hover': {
                  backgroundColor: 'blue',
                  color: 'white',
                  '& .MuiTypography-root': {
                    color: 'white',
                  },
                },
              }}>
              <CardContent sx={{ p: 4 }}>
                <Typography sx={{ fontSize: { xs: "1.2rem", md: "1.5rem" } }} fontWeight={"semi-bold"}color={"black"}>{item.subTitle}</Typography>
                <Typography color="textSecondary"mb={4}>{item.subTitle}</Typography>
                <Typography paragraph>{item.description}</Typography>
                <Typography variant="body2" color="textSecondary">
                  {item.rating}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Resume;
