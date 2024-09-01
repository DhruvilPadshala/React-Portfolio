import React, { useState, useEffect } from 'react';
import { Fab } from '@mui/material';
import { ArrowUpward } from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import '../../App.css'
const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const theme = useTheme();

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div>
      {isVisible && (
        <Fab
          color="primary"
          onClick={scrollToTop}
          className="scroll-to-top-button" 
          style={{
            position: 'fixed',
            bottom: theme.spacing(2),
            right: theme.spacing(2),
          }}
        >
          <ArrowUpward />
        </Fab>
      )}
    </div>
  );
};

export default ScrollToTop;
