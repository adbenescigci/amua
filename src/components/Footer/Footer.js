import React from "react";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Box
      sx={{
        minHeight: "45px",
        backgroundColor: "#212121",
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "center",
        "*": {
          fontSize: "12px",
          color: "#e0e0e0 !important",
          textDecoration: "none",
        },
        "& > :not(style) + :not(style)": {
          ml: 2,
        },
      }}
    >
      <Link to="/how-it-works">How It Works</Link>
      <Link to="/faqs">FAQs</Link>
      <Link to="/privacy-policy">Privacy Policy</Link>
      <Link to="/terms-of-use">Terms of Use</Link>
      <Link to="/help">Help</Link>
    </Box>
  );
};

export default Footer;
