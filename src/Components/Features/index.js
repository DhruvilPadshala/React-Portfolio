import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent as MuiCardContent,
  Typography,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import TvIcon from "@mui/icons-material/Tv";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import CallToActionIcon from "@mui/icons-material/CallToAction";
import WysiwygIcon from "@mui/icons-material/Wysiwyg";

const Root = styled(Box)(({ theme }) => ({
  backgroundColor: "#f0f2f5",
  minHeight: "100vh",
  padding: theme.spacing(5),
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(2),
  },
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  color: "#333",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.5rem",
    textAlign: "center",
  },
}));

const CustomCard = styled(Card)(({ theme, title }) => ({
  display: "flex",
  width: "530px",
  height: "250px",
  backgroundColor: "#f0f2f5",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: theme.spacing(2),
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "translateY(-5px)",
    boxShadow: "0 8px 12px rgba(0, 0, 0, 0.2)",
    backgroundColor: "blue",
    "& .MuiCardContent-root, & .MuiTypography-root, & .MuiSvgIcon-root": {
      color: "white",
    },
    "& .MuiCardContent-root": {
      transform: "scale(1.05)",
    },
  },
  [theme.breakpoints.down("sm")]: {
    height: "auto",
    width: "auto",
    padding: theme.spacing(1),
  },
}));

const IconWrapper = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(1),
  color: "#007bff",
  fontSize: "3rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
  },
}));

const CardContent = styled(MuiCardContent)(({ theme }) => ({
  transition:
    "background-color 0.3s ease, transform 0.3s ease, color 0.3s ease",
}));

const services = [
  {
    icon: <CallToActionIcon fontSize="large" />,
    title: "UI/UX Design",
    description:
      "We craft user-centric designs that elevate your brand and enhance user experience. Partner with us to create intuitive, visually stunning interfaces tailored to your needs.",
  },
  {
    icon: <BusinessIcon fontSize="large" />,
    title: "IT Consulting",
    description:
      "Our team delivers tailored technology strategies and support to drive innovation and efficiency. Let us help you navigate complex IT challenges and achieve your goals seamlessly.",
  },
  {
    icon: <TvIcon fontSize="large" />,
    title: "Web Development",
    description:"Crafting engaging and functional websites with a focus on clean design and responsive functionality. Explore my portfolio to see how I turn innovative ideas into compelling digital experiences.",
  },
  {
    icon: <PhoneAndroidIcon fontSize="large" />,
    title: "App Development",
    description:"We specialize in crafting custom mobile and web applications tailored to your business needs. Our expert team combines cutting-edge technology with user-centric design to deliver seamless, high-performance solutions.",  },
  {
    icon: <WysiwygIcon fontSize="large" />,
    title: "Software Development",
    description:"Our SaaS offerings provide tailored software development to meet your unique needs, from initial design to ongoing support. Enhance efficiency and drive innovation with our expert team.",  },

  {
    icon: <SignalCellularAltIcon fontSize="large" />,
    title: "Social Media Marketing",
    description:"Boost your online presence with our tailored social media strategies. From engaging content to targeted ads, we drive growth and enhance your brand’s reach. Let’s connect and transform your social media into a powerful marketing tool.",  },
];

const Features = () => {
  return (
    <Root>
      <Container
        sx={{
          mt: { xs: 40, md: 0 },
          justifyContent: { xs: "center", md: "flex-start" },
        }}
      >
        <Typography variant="h6" color="primary">
          Features
        </Typography>
        <SectionTitle
          variant="h4"
          gutterBottom
          mt={{ xs: 2, md: 5 }}
          sx={{ textAlign: { xs: "left", md: "left" } }}
        >
          What I Do
        </SectionTitle>
        <Grid container spacing={4} sx={{ mt: { xs: 2, md: 5 } }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} key={index}>
              <CustomCard title={service.title}>
                <IconWrapper>{service.icon}</IconWrapper>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" marginBottom={1}>
                    {service.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    textAlign="left"
                  >
                    {service.description}
                  </Typography>
                </CardContent>
              </CustomCard>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Root>
  );
};

export default Features;
