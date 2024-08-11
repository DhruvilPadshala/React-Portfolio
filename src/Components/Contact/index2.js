import React from "react";
import { Box, Grid, TextField, Button } from "@mui/material";

const ContactForm = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f0f2f5",
        padding: "2rem",
        borderRadius: 2,
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
        maxWidth: { xs: "100%", md: "52%" },
        height: { xs: "auto", md: "685px" },
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
        <Grid item xs={12}>
          <TextField
            label=" NAME"
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
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="PHONE NUMBER"
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
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="EMAIL"
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
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="SUBJECT"
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
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="YOUR MESSAGE"
            fullWidth
            variant="outlined"
            multiline
            rows={4}
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
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 3,
        }}
      >
        <Button
          variant="contained"
          sx={{
            backgroundColor: "Blue",
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
