import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  let navigate = useNavigate();
  const auth = useAuth();

  const signout = () => {
    auth.signout();
    navigate("/");
  };

  return <Box sx={{ minHeight: "70px" }}>Header</Box>;
};

export default Header;
