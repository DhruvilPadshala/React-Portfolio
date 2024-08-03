import React from "react";
import { Box, Grid, Typography, Avatar } from "@mui/material";
import { Facebook, Instagram, LinkedIn } from "./index4";
import JS from "../../assets/Home/JS.png";
import TS from "../../assets/Home/TS.png";
import Node from "../../assets/Home/Node.png";

const SocialsSection = () => {
  return (
    <Box className="index" sx={{ p: 4, backgroundColor: "white" }}>
      <Grid container spacing={4} justifyContent="center">
        <Grid item xs={12} md={6}>
          <Box className="socials" textAlign="center">
            <Typography variant="body1">FIND WITH ME</Typography>
            <Box
              className="icons"
              display="flex"
              justifyContent="center"
              mt={2}
            >
              <Facebook />
              <Instagram />
              <LinkedIn />
            </Box>
          </Box>
        </Grid>
        <Grid item xs={12} md={6}>
          <Box className="skill" textAlign="center">
            <Typography variant="body1">BEST SKILL ON </Typography>
            <Box
              className="icons"
              display="flex"
              justifyContent="center"
              mt={2}
            >
              <Avatar
                sx={{
                  m: 1,
                  bgcolor: "#ffffff",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  width: 48,
                  height: 48,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <img src={JS} alt="JavaScript" height={30} width={30} />
              </Avatar>
              <Avatar
                sx={{
                  m: 1,
                  bgcolor: "#ffffff",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  width: 48,
                  height: 48,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <img src={TS} alt="typescript" height={30} width={40} />
              </Avatar>
              <Avatar
                sx={{
                  m: 1,
                  bgcolor: "#ffffff",
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  borderRadius: "8px",
                  width: 48,
                  height: 48,
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                  "&:hover": {
                    transform: "translateY(-5px)",
                    boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)",
                  },
                }}
              >
                <img src={Node} alt="nodejs" height={40} width={40} />
              </Avatar>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
export default SocialsSection;
