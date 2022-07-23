import React from "react";
import { useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  let navigate = useNavigate();
  const auth = useAuth();

  const signout = () => {
    auth.signout();
    navigate("/");
  };

  const signin = () => {
    //it should first direct to login page then fill a form then take jwt, ...
    auth.signin("test");
    navigate("/hub");
  };

  const returnHomePage = () => {
    navigate("/hub");
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar sx={{ position: "sticky" }}>
        <Toolbar
          sx={{ bgcolor: "white ! important", justifyContent: "space-between" }}
        >
          <Typography
            variant="h5"
            noWrap
            component="div"
            onClick={returnHomePage}
            sx={{
              flexGrow: 1,
              color: "black",
              cursor: "pointer",
              paddingRight: 1,
              maxWidth: "fit-content",
              fontWeight: "bold",
              "&>span": {
                color: "#A2DA4A",
                fontStyle: "italic",
              },
            }}
          >
            Pickup<span>Hub</span>
          </Typography>
          {auth.user ? (
            <Button onClick={signout} sx={{ color: "green" }}>
              LogOut
            </Button>
          ) : (
            <Button onClick={signin} sx={{ color: "green" }}>
              LogIn
            </Button>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
