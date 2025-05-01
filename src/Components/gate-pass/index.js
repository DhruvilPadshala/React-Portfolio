import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Typography,
  Tabs,
  Tab,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Modal,
  IconButton,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import PeopleIcon from "@mui/icons-material/People";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SecurityIcon from "@mui/icons-material/Security";
import DescriptionIcon from "@mui/icons-material/Description";
import GitHubIcon from "@mui/icons-material/GitHub";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import admin from "../../assets/Portfolio/gate-pass.png";
import Dashboard from "../../assets/gate-pass-web/dashboard.png";
import Login from "../../assets/gate-pass-web/login.png";
import Visitor from "../../assets/gate-pass-web/visitors.png";
import Security from "../../assets/gate-pass-web/security.png";
import Maintenance from "../../assets/gate-pass-web/maintenance.png";
import Complaint from "../../assets/gate-pass-web/compaint.png";
import Near from "../../assets/gate-pass-web/near-place.png";
import Residance from "../../assets/gate-pass-web/residance.png";
import Header from "../Header";
import Footer from "../Footer";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Link } from "react-router-dom";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`project-tab-${index}`}
      aria-labelledby={`project-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ py: 3 }}>{children}</Box>}
    </div>
  );
}

const GatePassDetails = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.title = "Gate Pass Management System | Dhruvil's Portfolio";
    window.scrollTo(0, 0);
  }, []);

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };
  const handleImageClick = (img) => {
    setSelectedImage(img);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <Header />
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#f0f2f5",
          display: "flex",
          mt: 10,
          py: 4,
        }}
      >
        <Container maxWidth="lg">
          <Box sx={{ mb: 3 }}>
            <Link to="/" style={{ textDecoration: "none" }}>
              <Button
                startIcon={<ArrowBackIcon />}
                sx={{
                  color: "blue",
                  "&:hover": {
                    backgroundColor: "transparent",
                    color: "gray",
                  },
                }}
              >
                Back
              </Button>
            </Link>
          </Box>

          <Grid container spacing={4}>
            <Grid
              item
              xs={12}
              md={4}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              <Box
                sx={{
                  bgcolor: "blue",
                  p: 2,
                  borderRadius: "50%",
                  width: 200,
                  height: 200,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <img
                  src={admin}
                  alt="Gate Pass Management Logo"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                  }}
                />
              </Box>
            </Grid>

            <Grid item xs={12} md={8}>
              <Typography
                variant="h3"
                component="h1"
                fontWeight="bold"
                color="blue"
                gutterBottom
              >
                Gate Pass Management System
              </Typography>

              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                <Chip
                  label="Next.js"
                  sx={{ bgcolor: "blue", color: "white" }}
                />
                <Chip
                  label="Tailwind CSS"
                  sx={{ bgcolor: "blue", color: "white" }}
                />
                <Chip
                  label="Shadcn/ui"
                  sx={{ bgcolor: "blue", color: "white" }}
                />
                <Chip
                  label="Node.js"
                  sx={{ bgcolor: "blue", color: "white" }}
                />
                <Chip
                  label="Express.js"
                  sx={{ bgcolor: "blue", color: "white" }}
                />
                <Chip
                  label="MongoDB"
                  sx={{ bgcolor: "blue", color: "white" }}
                />
              </Box>

              <Typography variant="body1" color="text.secondary" paragraph>
                A comprehensive gate pass management solution designed to
                enhance security and streamline visitor management for
                organizations, residential complexes, and educational
                institutions.
              </Typography>

              <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                <Button
                  variant="contained"
                  endIcon={<OpenInNewIcon />}
                  href="https://dhruvil-gate-pass.vercel.app/"
                  target="_blank"
                  sx={{ bgcolor: "blue", "&:hover": { bgcolor: "gray" } }}
                >
                  Live Demo
                </Button>
                <Button
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  href="https://github.com/dhruvilshah884/gate-pass-admin-panel"
                  target="_blank"
                  sx={{
                    color: "blue",
                    borderColor: "blue",
                    "&:hover": { borderColor: "gray" },
                  }}
                >
                  View Source Code
                </Button>
              </Box>
            </Grid>
          </Grid>

          <Box sx={{ mt: 6, mb: 2 }}>
            <Paper sx={{ borderRadius: 2 }}>
              <Tabs
                value={activeTab}
                onChange={handleTabChange}
                variant="scrollable"
                scrollButtons="auto"
                allowScrollButtonsMobile
                sx={{
                  "& .MuiTab-root": {
                    fontWeight: 500,
                    color: "text.secondary",
                    "&.Mui-selected": { color: "blue" },
                    fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
                    minWidth: { xs: "80px", sm: "25%" },
                    padding: { xs: "6px 12px", sm: "12px 16px" },
                  },
                  "& .MuiTabs-indicator": { backgroundColor: "blue" },
                  backgroundColor: "#f0f2f5",
                  borderRadius: 2,
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  maxWidth: "100%",
                  overflow: "visible",
                }}
              >
                <Tab label="Overview" />
                <Tab label="Features" />
                <Tab label="Technology" />
                <Tab label="Screenshots" />
              </Tabs>
            </Paper>
          </Box>

          <TabPanel value={activeTab} index={0}>
            <Typography
              variant="h5"
              fontWeight="bold"
              color="blue"
              gutterBottom
            >
              Project Overview
            </Typography>
            <Typography variant="body1" paragraph>
              The Gate Pass Management System is a secure and efficient solution
              for managing visitor access to premises. It provides role-based
              access control, real-time notifications, and comprehensive
              reporting to ensure maximum security while maintaining a smooth
              visitor experience.
            </Typography>
            <Typography variant="body1" paragraph>
              This project was developed to address the challenges faced by
              organizations in managing visitor access, tracking entry/exit
              times, and maintaining security protocols. The system replaces
              traditional paper-based methods with a digital solution that
              enhances security, improves efficiency, and provides valuable
              insights.
            </Typography>

            <Typography
              variant="h6"
              fontWeight="bold"
              color="blue"
              sx={{ mt: 4, mb: 2 }}
            >
              Key Problems Solved
            </Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon sx={{ color: "green" }} />
                </ListItemIcon>
                <ListItemText primary="Elimination of unauthorized access through robust authentication" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon sx={{ color: "green" }} />
                </ListItemIcon>
                <ListItemText primary="Streamlined visitor registration and approval process" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon sx={{ color: "green" }} />
                </ListItemIcon>
                <ListItemText primary="Real-time monitoring and notifications for security personnel" />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon sx={{ color: "green" }} />
                </ListItemIcon>
                <ListItemText primary="Comprehensive reporting for audit and compliance purposes" />
              </ListItem>
            </List>
          </TabPanel>

          <TabPanel value={activeTab} index={1}>
            <Typography
              variant="h5"
              fontWeight="bold"
              color="blue"
              gutterBottom
            >
              Key Features
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <Card sx={{ display: "flex", height: "100%", boxShadow: 2 }}>
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "#f0f2f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <PeopleIcon sx={{ fontSize: 40, color: "blue" }} />
                  </Box>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h6">
                      Role-Based Access Control
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Different access levels for administrators, security
                      personnel, and visitors with customized permissions.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card sx={{ display: "flex", height: "100%", boxShadow: 2 }}>
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "#f0f2f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <VpnKeyIcon sx={{ fontSize: 40, color: "blue" }} />
                  </Box>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h6">
                      Digital Pass Generation
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Automated generation of secure, QR-coded passes that can
                      be verified at entry points.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card sx={{ display: "flex", height: "100%", boxShadow: 2 }}>
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "#f0f2f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <NotificationsIcon sx={{ fontSize: 40, color: "blue" }} />
                  </Box>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h6">
                      Real-time Notifications
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Instant alerts for new visitor requests, approvals, and
                      entries/exits.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card sx={{ display: "flex", height: "100%", boxShadow: 2 }}>
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "#f0f2f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <AccessTimeIcon sx={{ fontSize: 40, color: "blue" }} />
                  </Box>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h6">
                      Time Tracking
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Automatic recording of entry and exit times for all
                      visitors and personnel.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card sx={{ display: "flex", height: "100%", boxShadow: 2 }}>
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "#f0f2f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <SecurityIcon sx={{ fontSize: 40, color: "blue" }} />
                  </Box>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h6">
                      Security Protocols
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Advanced security measures including identity verification
                      and blacklist checking.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6}>
                <Card sx={{ display: "flex", height: "100%", boxShadow: 2 }}>
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "#f0f2f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <DescriptionIcon sx={{ fontSize: 40, color: "blue" }} />
                  </Box>
                  <CardContent sx={{ flex: "1 0 auto" }}>
                    <Typography component="div" variant="h6">
                      Comprehensive Reporting
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Detailed reports and analytics on visitor traffic, peak
                      hours, and security incidents.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </TabPanel>

          <TabPanel value={activeTab} index={2}>
            <Typography
              variant="h5"
              fontWeight="bold"
              color="blue"
              gutterBottom
            >
              Technology Stack
            </Typography>
            <Grid container spacing={4}>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="blue"
                  gutterBottom
                >
                  Frontend
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: "blue",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography>
                          <strong>React.js</strong> - For building the user
                          interface
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: "blue",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography>
                          <strong>Next.js</strong> - For server-side rendering
                          and routing
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: "blue",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography>
                          <strong>Tailwind CSS</strong> - For styling and
                          responsive design
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: "blue",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography>
                          <strong>Shadcn UI</strong> - For component library
                        </Typography>
                      }
                    />
                  </ListItem>{" "}
                  <ListItem>
                    <ListItemIcon>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: "blue",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography>
                          <strong>React Hook Form</strong> - For form validation
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="blue"
                  gutterBottom
                >
                  Backend
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: "blue",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography>
                          <strong>Node.js</strong> - Server runtime environment
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: "blue",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography>
                          <strong>Express.js</strong> - Web application
                          framework
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: "blue",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography>
                          <strong>MongoDB</strong> -Database for storing user
                          and pass data
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: "blue",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography>
                          <strong>JWT</strong> -For secure authentication
                        </Typography>
                      }
                    />
                  </ListItem>{" "}
                  <ListItem>
                    <ListItemIcon>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: "blue",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography>
                          <strong>Socket.io</strong> -For real-time
                          notifications
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="blue"
                  gutterBottom
                >
                  Security Features{" "}
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: "blue",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography>
                          <strong>Bcrypt</strong> -For password hashing
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: "blue",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography>
                          <strong>HTTPS</strong> - For secure data transmission
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: "blue",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography>
                          <strong>Rate limiting</strong> -To prevent brute force
                          attacks
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: "blue",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography>
                          <strong>Input validation</strong> - To prevent
                          injection attacks
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>{" "}
              <Grid item xs={12} md={6}>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  color="blue"
                  gutterBottom
                >
                  Deployment
                </Typography>
                <List>
                  <ListItem>
                    <ListItemIcon>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: "blue",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography>
                          <strong>Vercel</strong> - For frontend hosting
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: "blue",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography>
                          <strong>MongoDB Atlas</strong> - For database hosting
                        </Typography>
                      }
                    />
                  </ListItem>
                  <ListItem>
                    <ListItemIcon>
                      <Box
                        sx={{
                          width: 8,
                          height: 8,
                          borderRadius: "50%",
                          bgcolor: "blue",
                        }}
                      />
                    </ListItemIcon>
                    <ListItemText
                      primary={
                        <Typography>
                          <strong>CI/CD Pipeline</strong> - For automated
                          testing and deployment
                        </Typography>
                      }
                    />
                  </ListItem>
                </List>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={activeTab} index={3}>
            <Typography
              variant="h5"
              fontWeight="bold"
              color="blue"
              gutterBottom
            >
              Project Screenshots
            </Typography>
            <Grid container spacing={3}>
              {[
                { title: "Login", img: Login },
                { title: "Dashboard", img: Dashboard },
                { title: "Residance", img: Residance },
                { title: "Maintenance", img: Maintenance },
                { title: "Visitor", img: Visitor },
                { title: "Complaint", img: Complaint },
                { title: "Security", img: Security },
                { title: "Near Place", img: Near },
              ].map(({ title, img }, idx) => (
                <Grid item xs={12} md={6} key={idx}>
                  <Card
                    sx={{
                      overflow: "hidden",
                      boxShadow: 3,
                      borderRadius: 5,
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "translateY(-5px)",
                        boxShadow: 6,
                      },
                    }}
                    onClick={() => handleImageClick(img)}
                  >
                    <Box sx={{ bgcolor: "#f0f2f5", p: 1.5 }}>
                      <Typography variant="subtitle1" fontWeight="medium">
                        {title}
                      </Typography>
                    </Box>
                    <CardContent sx={{ p: 0 }}>
                      <Box
                        component="img"
                        src={img}
                        alt={title}
                        sx={{
                          width: "100%",
                          height: "auto",
                          display: "block",
                        }}
                      />
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </TabPanel>
        </Container>
      </Box>{" "}
      <Modal
        open={openModal}
        onClose={handleCloseModal}
        aria-labelledby="image-modal"
        aria-describedby="fullscreen-image-view"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "rgba(0, 0, 0, 0.8)",
        }}
      >
        <Box sx={{ position: "relative", maxWidth: "90vw", maxHeight: "90vh" }}>
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "white",
              bgcolor: "rgba(0, 0, 0, 0.5)",
              "&:hover": {
                bgcolor: "rgba(0, 0, 0, 0.7)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Fullscreen view"
              style={{
                maxWidth: "100%",
                maxHeight: "90vh",
                objectFit: "contain",
                display: "block",
              }}
            />
          )}
        </Box>
      </Modal>
      <Footer />
    </>
  );
};
export default GatePassDetails;
