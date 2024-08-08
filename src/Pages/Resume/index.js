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
        TabIndicatorProps={{ style: { display: 'none' } }} // Remove bottom line indicator
        sx={{
          mb: 2,
          flexWrap: 'wrap',
          '& .MuiTabs-flexContainer': {
            flexDirection: { xs: 'column', md: 'row' },
          },
          '& .MuiTab-root': {
            textAlign: 'center',
          },
        }}      >
        <Tab label="Education" sx={{ fontWeight: "bold" }} className={`tab ${selectedTab === 0 ? 'Mui-selected' : ''}`} />
        <Tab label="Professional Skills" sx={{ fontWeight: "bold" }} className={`tab ${selectedTab === 1 ? 'Mui-selected' : ''}`} />
        <Tab label="Experience" sx={{ fontWeight: "bold" }} className={`tab ${selectedTab === 2 ? 'Mui-selected' : ''}`} />
        <Tab label="Interview" sx={{ fontWeight: "bold" }} className={`tab ${selectedTab === 3 ? 'Mui-selected' : ''}`} />
      </Tabs>

      <Grid container spacing={3} sx={{ mt: 2 }}>
        {selectedTab === 0 && (
          <>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Education Quality
              </Typography>
              <Card className="card">
                <CardContent className="card-content">
                  <Typography variant="h6">
                    Personal Portfolio April Fools
                  </Typography>
                  <Typography color="textSecondary">
                    University of DVI (1997 - 2001)
                  </Typography>
                  <Typography paragraph>
                    The education should be very interactual. Ut tincidunt est ac
                    dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet
                    sem in, lobortis mauris hendrerit ante.
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    4.30/5
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Job Experience
              </Typography>
              <Card className="card">
                <CardContent className="card-content">
                  <Typography variant="h6">Diploma in Web Development</Typography>
                  <Typography color="textSecondary">
                    BSE In CSE (2004 - 2008)
                  </Typography>
                  <Typography paragraph>
                    Contrary to popular belief. Ut tincidunt est ac dolor aliquam
                    sodales. Phasellus sed mauris hendrerit, laoreet sem in,
                    lobortis mauris hendrerit ante.
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    4.70/5
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </>
        )}

        {selectedTab === 1 && (
          <>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Professional Skills
              </Typography>
              <Card className="card">
                <CardContent className="card-content">
                  <Typography variant="h6">
                    Personal Portfolio April Fools
                  </Typography>
                  <Typography color="textSecondary">
                    University of DVI (1997 - 2001)
                  </Typography>
                  <Typography paragraph>
                    The education should be very interactual. Ut tincidunt est ac
                    dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet
                    sem in, lobortis mauris hendrerit ante.
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    4.30/5
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Professional Experience
              </Typography>
              <Card className="card">
                <CardContent className="card-content">
                  <Typography variant="h6">Diploma in Web Development</Typography>
                  <Typography color="textSecondary">
                    BSE In CSE (2004 - 2008)
                  </Typography>
                  <Typography paragraph>
                    Contrary to popular belief. Ut tincidunt est ac dolor aliquam
                    sodales. Phasellus sed mauris hendrerit, laoreet sem in,
                    lobortis mauris hendrerit ante.
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    4.70/5
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </>
        )}

        {selectedTab === 2 && (
          <>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Experience
              </Typography>
              <Card className="card">
                <CardContent className="card-content">
                  <Typography variant="h6">
                    Personal Portfolio April Fools
                  </Typography>
                  <Typography color="textSecondary">
                    University of DVI (1997 - 2001)
                  </Typography>
                  <Typography paragraph>
                    The education should be very interactual. Ut tincidunt est ac
                    dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet
                    sem in, lobortis mauris hendrerit ante.
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    4.30/5
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Previous Projects
              </Typography>
              <Card className="card">
                <CardContent className="card-content">
                  <Typography variant="h6">Diploma in Web Development</Typography>
                  <Typography color="textSecondary">
                    BSE In CSE (2004 - 2008)
                  </Typography>
                  <Typography paragraph>
                    Contrary to popular belief. Ut tincidunt est ac dolor aliquam
                    sodales. Phasellus sed mauris hendrerit, laoreet sem in,
                    lobortis mauris hendrerit ante.
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    4.70/5
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </>
        )}

        {selectedTab === 3 && (
          <>
            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Interview Tips
              </Typography>
              <Card className="card">
                <CardContent className="card-content">
                  <Typography variant="h6">
                    Personal Portfolio April Fools
                  </Typography>
                  <Typography color="textSecondary">
                    University of DVI (1997 - 2001)
                  </Typography>
                  <Typography paragraph>
                    The education should be very interactual. Ut tincidunt est ac
                    dolor aliquam sodales. Phasellus sed mauris hendrerit, laoreet
                    sem in, lobortis mauris hendrerit ante.
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    4.30/5
                  </Typography>
                </CardContent>
              </Card>
            </Grid>

            <Grid item xs={12} md={6}>
              <Typography variant="h5" gutterBottom>
                Mock Interviews
              </Typography>
              <Card className="card">
                <CardContent className="card-content">
                  <Typography variant="h6">Diploma in Web Development</Typography>
                  <Typography color="textSecondary">
                    BSE In CSE (2004 - 2008)
                  </Typography>
                  <Typography paragraph>
                    Contrary to popular belief. Ut tincidunt est ac dolor aliquam
                    sodales. Phasellus sed mauris hendrerit, laoreet sem in,
                    lobortis mauris hendrerit ante.
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    4.70/5
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          </>
        )}
      </Grid>
    </Box>
  );
};

export default Resume;
