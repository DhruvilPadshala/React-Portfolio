import React, { useState, useEffect } from 'react';
import Avatar from '@mui/material/Avatar';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Facebook = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [iconColor, setIconColor] = useState('primary');

  useEffect(() => {
    if (isHovered) {
      setIconColor('none');
    } else {
      setIconColor('primary');
    }
  }, [isHovered]);

  return (
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
  );
};

const Instagram = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [iconColor, setIconColor] = useState('secondary');
  
    useEffect(() => {
      if (isHovered) {
        setIconColor('none');
      } else {
        setIconColor('secondary');
      }
    }, [isHovered]);
  
    return (
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
    );
  };
  
  const LinkedIn = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [iconColor, setIconColor] = useState('primary');
  
    useEffect(() => {
      if (isHovered) {
        setIconColor('none');
      } else {
        setIconColor('primary');
      }
    }, [isHovered]);
  
    return (
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
    );
  };
  
  export { Facebook, Instagram, LinkedIn };