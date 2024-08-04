import React from "react";
import {
  Container,
  Grid,
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import BusinessIcon from "@mui/icons-material/Business";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import TvIcon from "@mui/icons-material/Tv";
import ChatIcon from "@mui/icons-material/Chat";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
import AppsIcon from "@mui/icons-material/Apps";

const Root = styled(Box)(({ theme }) => ({
  backgroundColor: "#f0f2f5",
  minHeight: "100vh",
  padding: theme.spacing(5),
}));

const SectionTitle = styled(Typography)(({ theme }) => ({
  marginBottom: theme.spacing(3),
  color: "#333",
}));

const CustomCard = styled(Card)(({ theme }) => ({
  display: "flex",
  width:"350px",
  height: "250px",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "flex-start",
  padding: theme.spacing(2),
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  ...(props) =>
    props.title === "App Development" && {
      backgroundColor: "#ff1744", 
      color: "#fff",
    },
}));

const IconWrapper = styled("div")(({ theme }) => ({
  marginBottom: theme.spacing(1),
  color: "#007bff", // Blue color for icons
  fontSize: "3rem",
}));

const services = [
  {
    icon: <BusinessIcon fontSize="large" />,
    title: "Business Strategy",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <PhoneAndroidIcon fontSize="large" />,
    title: "App Development",
    description:
      "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.",
  },
  {
    icon: <TvIcon fontSize="large" />,
    title: "App Development",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <ChatIcon fontSize="large" />,
    title: "Mobile App",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
  {
    icon: <SignalCellularAltIcon fontSize="large" />,
    title: "CEO Marketing",
    description:
      "It uses a dictionary of over 200 Latin words, combined with a handful of model sentence.",
  },
  {
    icon: <AppsIcon fontSize="large" />,
    title: "Personal Portfolio April",
    description:
      "I throw myself down among the tall grass by the stream as I lie close to the earth.",
  },
];

const Features = () => {
  return (
    <Root>
      <Container  >
        <Typography variant="h6"color="primary">Features</Typography>
        <SectionTitle variant="h4" gutterBottom mt={{xs: 2, md: 5}}>
          What I Do
        </SectionTitle>
        <Grid container spacing={4}sx={{mt: {xs: 2, md: 5}}}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
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
