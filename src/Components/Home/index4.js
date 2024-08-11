import React, { useState, useEffect } from "react";
import Avatar from "@mui/material/Avatar";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Facebook = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [iconColor, setIconColor] = useState("primary");

  useEffect(() => {
    if (isHovered) {
      setIconColor("none");
    } else {
      setIconColor("primary");
    }
  }, [isHovered]);

  return (
    <a href="https://www.facebook.com/dhruv.pansala?mibextid=ZbWKwL">
      <Avatar
        sx={{
          m: 1,
          bgcolor: "#f0f2f5",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          width: 48,
          height: 48,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)",
            backgroundColor: "blue",
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FacebookIcon color={iconColor} />
      </Avatar>
    </a>
  );
};

const Instagram = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [iconColor, setIconColor] = useState("secondary");

  useEffect(() => {
    if (isHovered) {
      setIconColor("none");
    } else {
      setIconColor("secondary");
    }
  }, [isHovered]);

  return (
    <a href="https://www.instagram.com/_unique_boy_211?igsh=MTJyY2UyaWVhdng5bw==">
      <Avatar
        sx={{
          m: 1,
          bgcolor: "#f0f2f5",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          width: 48,
          height: 48,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)",
            backgroundColor: "blue",
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <InstagramIcon color={iconColor} />
      </Avatar>
    </a>
  );
};

const LinkedIn = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [iconColor, setIconColor] = useState("primary");

  useEffect(() => {
    if (isHovered) {
      setIconColor("none");
    } else {
      setIconColor("primary");
    }
  }, [isHovered]);

  return (
    <a href="https://www.linkedin.com/in/dhruvil-padshala-032630270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
      <Avatar
        sx={{
          m: 1,
          bgcolor: "#f0f2f5",
          boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
          borderRadius: "8px",
          width: 48,
          height: 48,
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-5px)",
            boxShadow: "0px 8px 12px rgba(0, 0, 0, 0.2)",
            backgroundColor: "blue",
          },
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <LinkedInIcon color={iconColor} />
      </Avatar>
    </a>
  );
};

export { Facebook, Instagram, LinkedIn };
