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
import NotificationsIcon from "@mui/icons-material/Notifications";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import SecurityIcon from "@mui/icons-material/Security";
import GitHubIcon from "@mui/icons-material/GitHub";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import HomeIcon from "@mui/icons-material/Home";
import PersonIcon from "@mui/icons-material/Person";
import SettingsIcon from "@mui/icons-material/Settings";
import ReportProblemIcon from "@mui/icons-material/ReportProblem";
import BuildIcon from "@mui/icons-material/Build";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DashboardIcon from "@mui/icons-material/Dashboard";
import { Link } from "react-router-dom";
import Footer from "../Footer";
import admin from "../../assets/Portfolio/gate-pass.png";
import Login from "../../assets/gate-pass-app/login.jpg";
import Home from "../../assets/gate-pass-app/home.jpg";
import ResidanceVisitors from "../../assets/gate-pass-app/visitorts.jpg";
import Compalint from "../../assets/gate-pass-app/complintsearching.jpg";
import AddCompalint from "../../assets/gate-pass-app/addcompalint.jpg";
import FAQ from "../../assets/gate-pass-app/Faq.jpg";
import Maintenance from "../../assets/gate-pass-app/maintenace.jpg";
import Policy from "../../assets/gate-pass-app/policy.jpg";
import Setting from "../../assets/gate-pass-app/setting.jpg";
import Terms from "../../assets/gate-pass-app/terms.jpg";
import EditPrifile from "../../assets/gate-pass-app/editprifile.png";
import UpdatePass from "../../assets/gate-pass-app/updatepass.png";
import SeacurityHome from "../../assets/gate-pass-app/securityhome.jpg";
import Visitor from "../../assets/gate-pass-app/visitorsearching.jpg";
import Visitoradd from "../../assets/gate-pass-app/visitors.jpg";
import Visitoradd2 from "../../assets/gate-pass-app/visitors2.jpg";
import Security from "../../assets/gate-pass-app/securitysettings.png";
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

const GatePassApp = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    document.title = "Gate Pass Mobile App ";
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
      <Box
        sx={{
          minHeight: "100vh",
          backgroundColor: "#f0f2f5",
          display: "flex",
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
                Gate Pass Mobile Application
              </Typography>
              <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1, mb: 2 }}>
                <Chip
                  label="React Native"
                  sx={{ bgcolor: "blue", color: "white" }}
                />
                <Chip
                  label="React Native Paper"
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
                <Chip label="JWT" sx={{ bgcolor: "blue", color: "white" }} />
              </Box>
              <Typography variant="body1" color="text.secondary" paragraph>
                A cross-platform mobile application built with React Native for
                both Android and iOS devices, designed to streamline gate pass
                management for residential complexes and security personnel. The
                app offers two distinct user interfaces: one for residents to
                manage visitors and maintenance requests, and another for
                security staff to monitor and control access.
              </Typography>
              <Box sx={{ display: "flex", gap: 2, mt: 3 }}>
                <Button
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  href="https://github.com/DhruvilPadshala/Gate-Pass-App"
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
              The Gate Pass Mobile Application is a comprehensive solution that
              brings the power of digital gate pass management to mobile
              devices. Built with React Native, the app provides a seamless
              experience across both Android and iOS platforms, allowing users
              to manage access control from anywhere.
            </Typography>
            <Typography variant="body1" paragraph>
              The application features two distinct user interfaces tailored to
              different user roles:
            </Typography>

            <Grid container spacing={3} sx={{ mt: 2, mb: 4 }}>
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    height: "100%",
                    boxShadow: 3,
                    borderRadius: 2,
                    bgcolor: "#f0f2f5",
                  }}
                >
                  <Box sx={{ p: 2, bgcolor: "blue", color: "white" }}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <HomeIcon sx={{ mr: 1 }} /> Residence Interface
                    </Typography>
                  </Box>
                  <CardContent>
                    <Typography variant="body2" paragraph>
                      Designed for residents to manage their visitors, create
                      maintenance requests, and interact with the community.
                      Residents can pre-approve visitors, track their status,
                      and manage all aspects of their residential experience.
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "bold", mt: 1 }}
                    >
                      Key Sections:
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <HomeIcon fontSize="small" color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Home Dashboard with Nearby Places" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <PersonIcon fontSize="small" color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Visitor Management" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <ReportProblemIcon fontSize="small" color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Complaint Submission & Tracking" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <BuildIcon fontSize="small" color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Maintenance Requests" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <SettingsIcon fontSize="small" color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Profile & Settings Management" />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    height: "100%",
                    boxShadow: 3,
                    borderRadius: 2,
                    bgcolor: "#f0f2f5",
                  }}
                >
                  <Box sx={{ p: 2, bgcolor: "blue", color: "white" }}>
                    <Typography
                      variant="h6"
                      fontWeight="bold"
                      sx={{ display: "flex", alignItems: "center" }}
                    >
                      <SecurityIcon sx={{ mr: 1 }} /> Security Interface
                    </Typography>
                  </Box>
                  <CardContent>
                    <Typography variant="body2" paragraph>
                      Tailored for security personnel to monitor and control
                      access to the premises. Security staff can verify
                      visitors, track entry/exit times, and maintain a secure
                      environment through real-time monitoring and reporting.
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: "bold", mt: 1 }}
                    >
                      Key Sections:
                    </Typography>
                    <List dense>
                      <ListItem>
                        <ListItemIcon>
                          <DashboardIcon fontSize="small" color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Dashboard with Visitor Statistics" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <PersonIcon fontSize="small" color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Visitor Verification & Management" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <AccessTimeIcon fontSize="small" color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Entry/Exit Tracking" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <NotificationsIcon fontSize="small" color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Real-time Alerts & Notifications" />
                      </ListItem>
                      <ListItem>
                        <ListItemIcon>
                          <SettingsIcon fontSize="small" color="primary" />
                        </ListItemIcon>
                        <ListItemText primary="Profile & Settings Management" />
                      </ListItem>
                    </List>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

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
                <ListItemText
                  primary="Mobile-first approach for on-the-go access management"
                  secondary="Allows residents and security personnel to manage access from anywhere, eliminating the need for physical presence at a desk"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon sx={{ color: "green" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Role-specific interfaces that streamline workflows for different user types"
                  secondary="Tailored experiences for residents and security staff with only the relevant features and information"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon sx={{ color: "green" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Real-time communication between residents and security personnel"
                  secondary="Instant notifications and updates ensure everyone stays informed about visitor status and security concerns"
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <CheckIcon sx={{ color: "green" }} />
                </ListItemIcon>
                <ListItemText
                  primary="Comprehensive community management beyond just visitor control"
                  secondary="Integrated maintenance requests, complaints, and community information create a complete residential management solution"
                />
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

            <Typography
              variant="h6"
              fontWeight="bold"
              color="blue"
              sx={{ mt: 3, mb: 2 }}
            >
              Residence User Features
            </Typography>
            <Grid container spacing={3} alignItems="stretch">
              <Grid item xs={12} md={6} sx={{ display: "flex" }}>
                <Card
                  sx={{
                    display: "flex",
                    flex: 1,
                    boxShadow: 2,
                    bgcolor: "#f0f2f5",
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "#f0f2f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <HomeIcon sx={{ fontSize: 40, color: "blue" }} />
                  </Box>
                  <CardContent sx={{ flex: "1 1 auto" }}>
                    <Typography component="div" variant="h6">
                      Home Dashboard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Personalized dashboard showing nearby places, recent
                      visitors, and community updates in a clean, intuitive
                      interface.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6} sx={{ display: "flex" }}>
                <Card
                  sx={{
                    display: "flex",
                    height: "100%",
                    boxShadow: 2,
                    bgcolor: "#f0f2f5",
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "#f0f2f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <PersonIcon sx={{ fontSize: 40, color: "blue" }} />
                  </Box>
                  <CardContent sx={{ flex: "1 1 auto" }}>
                    <Typography component="div" variant="h6">
                      Visitor Management
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Create, track, and manage visitor passes with detailed
                      information and real-time status updates.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    display: "flex",
                    height: "100%",
                    boxShadow: 2,
                    bgcolor: "#f0f2f5",
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "#f0f2f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <ReportProblemIcon sx={{ fontSize: 40, color: "blue" }} />
                  </Box>
                  <CardContent sx={{ flex: "1 1 auto" }}>
                    <Typography component="div" variant="h6">
                      Complaint System
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Submit and track complaints with photo evidence, priority
                      levels, and resolution status tracking.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    display: "flex",
                    height: "100%",
                    boxShadow: 2,
                    bgcolor: "#f0f2f5",
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "#f0f2f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <BuildIcon sx={{ fontSize: 40, color: "blue" }} />
                  </Box>
                  <CardContent sx={{ flex: "1 1 auto" }}>
                    <Typography component="div" variant="h6">
                      Maintenance Requests
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Schedule and manage maintenance requests with priority
                      settings, date selection, and status tracking.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    display: "flex",
                    height: "100%",
                    boxShadow: 2,
                    bgcolor: "#f0f2f5",
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "#f0f2f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <LocationOnIcon sx={{ fontSize: 40, color: "blue" }} />
                  </Box>
                  <CardContent sx={{ flex: "1 1 auto" }}>
                    <Typography component="div" variant="h6">
                      Nearby Places
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Discover and access information about nearby amenities,
                      services, and community facilities.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12} md={6}>
                <Card
                  sx={{
                    display: "flex",
                    height: "100%",
                    boxShadow: 2,
                    bgcolor: "#f0f2f5",
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "#f0f2f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <SettingsIcon sx={{ fontSize: 40, color: "blue" }} />
                  </Box>
                  <CardContent sx={{ flex: "1 1 auto" }}>
                    <Typography component="div" variant="h6">
                      Profile & Settings
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Comprehensive settings including profile management,
                      password updates, terms & conditions, privacy policy,
                      FAQs, and help & support.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>

            <Typography
              variant="h6"
              fontWeight="bold"
              color="blue"
              sx={{ mt: 5, mb: 2 }}
            >
              Security User Features
            </Typography>
            <Grid container spacing={3} alignItems="stretch">
              <Grid item xs={12} md={6} sx={{ display: "flex" }}>
                <Card
                  sx={{
                    display: "flex",
                    flex: 1,
                    boxShadow: 2,
                    bgcolor: "#f0f2f5",
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "#f0f2f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <DashboardIcon sx={{ fontSize: 40, color: "blue" }} />
                  </Box>
                  <CardContent sx={{ flex: "1 1 auto" }}>
                    <Typography component="div" variant="h6">
                      Security Dashboard
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Comprehensive dashboard showing total visitors, today's
                      visitors, and real-time visitor statistics for quick
                      monitoring.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6} sx={{ display: "flex" }}>
                <Card
                  sx={{
                    display: "flex",
                    flex: 1,
                    boxShadow: 2,
                    bgcolor: "#f0f2f5",
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "#f0f2f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <PersonIcon sx={{ fontSize: 40, color: "blue" }} />
                  </Box>
                  <CardContent sx={{ flex: "1 1 auto" }}>
                    <Typography component="div" variant="h6">
                      Visitor Verification
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Tools to verify, approve, and track visitors with detailed
                      information and search functionality.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6} sx={{ display: "flex" }}>
                <Card
                  sx={{
                    display: "flex",
                    flex: 1,
                    boxShadow: 2,
                    bgcolor: "#f0f2f5",
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "#f0f2f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <AccessTimeIcon sx={{ fontSize: 40, color: "blue" }} />
                  </Box>
                  <CardContent sx={{ flex: "1 1 auto" }}>
                    <Typography component="div" variant="h6">
                      Entry/Exit Tracking
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Record and monitor entry and exit times for all visitors
                      with timestamp verification.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6} sx={{ display: "flex" }}>
                <Card
                  sx={{
                    display: "flex",
                    flex: 1,
                    boxShadow: 2,
                    bgcolor: "#f0f2f5",
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "#f0f2f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <NotificationsIcon sx={{ fontSize: 40, color: "blue" }} />
                  </Box>
                  <CardContent sx={{ flex: "1 1 auto" }}>
                    <Typography component="div" variant="h6">
                      Real-time Notifications
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Instant alerts for new visitor requests and
                      security-related events requiring attention.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>

              <Grid item xs={12} md={6} sx={{ display: "flex" }}>
                <Card
                  sx={{
                    display: "flex",
                    flex: 1,
                    boxShadow: 2,
                    bgcolor: "#f0f2f5",
                  }}
                >
                  <Box
                    sx={{
                      p: 2,
                      bgcolor: "#f0f2f5",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                    }}
                  >
                    <SettingsIcon sx={{ fontSize: 40, color: "blue" }} />
                  </Box>
                  <CardContent sx={{ flex: "1 1 auto" }}>
                    <Typography component="div" variant="h6">
                      Profile & Settings
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Security personnel profile management, password updates,
                      and access to terms & conditions, privacy policy, FAQs,
                      and help & support.
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
                  Mobile App (Frontend)
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
                          <strong>React Native</strong> - Cross-platform mobile
                          framework for Android and iOS
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
                          <strong>React Native Paper</strong> - Material Design
                          component library
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
                          <strong>React Navigation</strong> - Navigation library
                          for screen management
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
                          <strong>Async Storage</strong> - Local data
                          persistence
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
                          <strong>Axios</strong> - HTTP client for API requests
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
                          <strong>MongoDB</strong> - Database for storing user
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
                          <strong>JWT</strong> - For secure authentication
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
                          <strong>Socket.io</strong> - For real-time
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
                  Mobile-Specific Features
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
                          <strong>Camera Integration</strong> - For capturing
                          visitor photos and complaint evidence
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
                          <strong>Push Notifications</strong> - For real-time
                          alerts on mobile devices
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
                          <strong>Geolocation</strong> - For nearby places
                          feature
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
                          <strong>QR Code Scanner</strong> - For quick visitor
                          verification
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
                  Security Features
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
                          <strong>Bcrypt</strong> - For password hashing
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
                          <strong>Secure Storage</strong> - For sensitive data
                          on mobile devices
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

            <Box sx={{ mb: 4 }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                color="blue"
                sx={{ mb: 2 }}
              >
                Residence User Interface
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                The Residence interface provides homeowners and tenants with
                tools to manage visitors, submit maintenance requests, file
                complaints, and access community information. Click on any
                screenshot to view in full size.
              </Typography>
              <Grid container spacing={3}>
                {[
                  {
                    title: "Login",
                    img: Login,
                    description:
                      "Secure authentication screen for registered users",
                  },
                  {
                    title: "Home Dashboard",
                    img: Home,
                    description:
                      "Main dashboard with quick access to all features",
                  },
                  {
                    title: "Visitor Management",
                    img: ResidanceVisitors,
                    description: "Create and track visitor passes",
                  },
                  {
                    title: "Complaint Search",
                    img: Compalint,
                    description: "Search and filter submitted complaints",
                  },
                  {
                    title: "Add Complaint",
                    img: AddCompalint,
                    description: "Submit new complaints with details",
                  },
                  {
                    title: "Maintenance Requests",
                    img: Maintenance,
                    description: "Submit and monitor maintenance issues",
                  },
                  {
                    title: "Settings",
                    img: Setting,
                    description: "Manage account settings and preferences",
                  },
                  {
                    title: "Edit Profile",
                    img: EditPrifile,
                    description: "Update personal information",
                  },
                  {
                    title: "Update Password",
                    img: UpdatePass,
                    description: "Change your account password",
                  },
                  {
                    title: "FAQ",
                    img: FAQ,
                    description: "Frequently asked questions and answers",
                  },
                  {
                    title: "Privacy Policy",
                    img: Policy,
                    description: "App privacy policy information",
                  },
                  {
                    title: "Terms & Conditions",
                    img: Terms,
                    description: "Terms of service for the application",
                  },
                ].map(({ title, img, description }, idx) => (
                  <Grid item xs={12} sm={6} md={4} key={idx}>
                    <Card
                      sx={{
                        overflow: "hidden",
                        boxShadow: 3,
                        borderRadius: 2,
                        height: "100%",
                        bgcolor: "#f0f2f5",
                        transition: "transform 0.3s, box-shadow 0.3s",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: 6,
                          cursor: "pointer",
                        },
                      }}
                      onClick={() => handleImageClick(img)}
                    >
                      <Box sx={{ bgcolor: "#f0f2f5", p: 1.5 }}>
                        <Typography variant="subtitle1" fontWeight="medium">
                          {title}
                        </Typography>
                      </Box>
                      <CardContent sx={{ p: 0, position: "relative" }}>
                        <Box
                          component="img"
                          src={img}
                          alt={title}
                          sx={{
                            width: "100%",
                            height: "590px",
                            objectFit: "cover",
                            display: "block",
                          }}
                        />
                        <Box sx={{ p: 1.5 }}>
                          <Typography variant="body2" color="text.secondary">
                            {description}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>

            <Box sx={{ mt: 6 }}>
              <Typography
                variant="h6"
                fontWeight="bold"
                color="blue"
                sx={{ mb: 2 }}
              >
                Security User Interface
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                The Security interface provides security personnel with tools to
                monitor visitors, verify access permissions, and maintain a
                secure environment. Click on any screenshot to view in full
                size.
              </Typography>
              <Grid container spacing={3}>
                {[
                  {
                    title: "Security Dashboard",
                    img: SeacurityHome,
                    description:
                      "Overview of visitor statistics and security metrics",
                  },
                  {
                    title: "Visitor Search",
                    img: Visitor,
                    description: "Search and filter visitor records",
                  },
                  {
                    title: "Add Visitor - Step 1",
                    img: Visitoradd,
                    description: "First step of adding a new visitor",
                  },
                  {
                    title: "Add Visitor - Step 2",
                    img: Visitoradd2,
                    description: "Second step of adding a new visitor",
                  },
                  {
                    title: "Setting ",
                    img: Security,
                    description: "Manage account settings and preferences",
                  },
                ].map(({ title, img, description }, idx) => (
                  <Grid item xs={12} sm={6} md={4} key={idx}>
                    <Card
                      sx={{
                        overflow: "hidden",
                        boxShadow: 3,
                        borderRadius: 2,
                        height: "100%",
                        bgcolor: "#f0f2f5",
                        transition: "transform 0.3s, box-shadow 0.3s",
                        "&:hover": {
                          transform: "translateY(-5px)",
                          boxShadow: 6,
                          cursor: "pointer",
                        },
                      }}
                      onClick={() => handleImageClick(img)}
                    >
                      <Box sx={{ bgcolor: "#f0f2f5", p: 1.5 }}>
                        <Typography variant="subtitle1" fontWeight="medium">
                          {title}
                        </Typography>
                      </Box>
                      <CardContent sx={{ p: 0, position: "relative" }}>
                        <Box
                          component="img"
                          src={img}
                          alt={title}
                          sx={{
                            width: "100%",
                            height: "590px",
                            objectFit: "cover",
                            display: "block",
                          }}
                        />
                        <Box sx={{ p: 1.5 }}>
                          <Typography variant="body2" color="text.secondary">
                            {description}
                          </Typography>
                        </Box>
                      </CardContent>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Box>
          </TabPanel>
        </Container>
      </Box>

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

export default GatePassApp;
