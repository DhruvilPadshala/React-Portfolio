import React, { useState } from "react";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  const [statusMessage, setStatusMessage] = useState("");
  const [error, setError] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phone);
  };

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    let errorObj = {};

    if (!formData.name) {
      errorObj.name = "Name is required.";
      valid = false;
    }
    if (!validateEmail(formData.email)) {
      errorObj.email = "Please enter a valid email address.";
      valid = false;
    }
    if (!validatePhoneNumber(formData.phone)) {
      errorObj.phone = "Please enter a valid phone number (10 digits).";
      valid = false;
    }
    if (!formData.message) {
      errorObj.message = "Message is required.";
      valid = false;
    }

    setError(errorObj);

    if (!valid) {
      setStatusMessage("Please correct the errors in the form.");
      return;
    }

    emailjs.send(serviceId, templateId, formData, publicKey).then(
      (response) => {
        setStatusMessage("Your message has been sent successfully!");
        setFormData({
          name: "",
          phone: "",
          email: "",
          subject: "",
          message: "",
        });
        setError({});
      },
      (error) => {
        setStatusMessage("Failed to send your message. Please try again.");
      }
    );
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        backgroundColor: "#f0f2f5",
        padding: { xs: 2, md: 4 },
        borderRadius: 2,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        maxWidth: { xs: "100%", md: "58%" },
        height: { xs: "auto", md: "775px" },
        marginTop: "1.5rem",
        flexGrow: 1,
        ml: { xs: 2.5, md: 0 },
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{ height: { xs: "auto", md: "80%" }, marginTop: "1.5rem" }}
      >
        {/* Form Fields with Error Messages */}
        {["name", "phone", "email", "subject", "message"].map((field) => (
          <Grid item xs={12} key={field}>
            <TextField
              label={field.toUpperCase()}
              name={field}
              value={formData[field]}
              onChange={handleChange}
              fullWidth
              variant="outlined"
              InputLabelProps={{
                style: {
                  fontSize: "0.875rem",
                  fontWeight: "bold",
                },
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                },
              }}
              error={!!error[field]}
              helperText={error[field]}
              multiline={field === "message"}
              rows={field === "message" ? 4 : 1}
            />
          </Grid>
        ))}
      </Grid>
      {/* Status Message */}
      {statusMessage && (
        <Typography
          variant="body2"
          sx={{
            mt: 2,
            textAlign: "center",
            color: statusMessage.includes("successfully") ? "green" : "red",
            fontWeight: "bold",
          }}
        >
          {statusMessage}
        </Typography>
      )}
      {/* Submit Button */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 3,
        }}
      >
        <Button
          type="submit"
          variant="contained"
          sx={{
            backgroundColor: "blue",
            color: "#fff",
            padding: "10px 30px",
            width: "100%",
            borderRadius: "50px",
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
            "&:hover": {
              backgroundColor: "#0077b5",
            },
          }}
        >
          SEND MESSAGE
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
