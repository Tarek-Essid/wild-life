import React from "react";
import "./Footer.css";
import Container from "react-bootstrap/Container";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary">
      {"Copyright © "}
      <Link color="inherit" href="/">
        Wild Life
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const Footer = () => {
  return (
    <div className="my-footer">
      <Box
        component="footer"
        sx={{
          py: 6,
          px: 3,
          mt: "auto",
          backgroundColor: (theme) =>
            theme.palette.mode === "light"
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
        }}>
        <Container maxWidth="lg">
          <Typography variant="body1">
            “The clearest way into the Universe is through a forest wilderness.”
          </Typography>
          <Copyright />
        </Container>
      </Box>
    </div>
  );
};

export default Footer;
