import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import GameList from "./GameList";

const style = () => ({
  box: { flexGrow: 1, paddingLeft: "15px" },
  boxGame: {
    minWidth: 275,
    "& > *": {
      fontSize: "14px",
    },
    paddingLeft: [0, "30px"],
  },
  gridText: {
    maxHeight: "75px",
    display: { xs: "none", md: "none", lg: "grid" },
    "*": {
      fontSize: "13px",
      fontWeight: 400,
      color: "#212121",
    },
  },
});

const textArray = [
  "Games are recommended based on your preferences. You can change your preferences from the default by using the filters under the Recommended Games section.",
  "You can customize your recommended games by sport, location and time of day.",
  "Please send any feedback about PickupHub to help@pickuphub.net",
];

const Dashboard = () => {
  return (
    <Box sx={style().box}>
      <Grid container spacing={1} sx={{ paddingTop: "15px" }}>
        <Grid item container sx={style().gridText} rowSpacing={1} xs={3}>
          {textArray.map((el, index) => (
            <Grid key={index} item>
              <Typography>{el}</Typography>
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} md={12} lg={9}>
          <Box sx={style().box}>
            <GameList />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
