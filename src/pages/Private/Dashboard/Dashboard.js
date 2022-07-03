import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";

import { gamesList } from "../../../utils/moc";

const Dashboard = () => {
  console.log(gamesList);
  return (
    <Box sx={{ flexGrow: 1, paddingLeft: "15px" }}>
      <Grid container spacing={1}>
        <Grid item container sx={{ maxHeight: "75px" }} rowSpacing={1} xs={3}>
          <Grid item>
            <Typography variant="subtitle1">
              {" "}
              Games are recommended based on your preferences. You can change
              your preferences from the default by using the filters under the
              Recommended Games section.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              {" "}
              You can customize your recommended games by sport, location and
              time of day.
            </Typography>
          </Grid>
          <Grid item>
            <Typography>
              {" "}
              Please send any feedback about PickupHub to help@pickuphub.net
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={9}>
          <Box sx={{ minWidth: 275 }}>
            {gamesList.map((el, index) => (
              <Card sx={{ marginTop: "10px" }} key={index}>
                <React.Fragment>
                  <CardContent>
                    <Grid container direction="column">
                      <Grid item container justifyContent="space-between">
                        <Grid item container>
                          <SportsBasketballIcon />
                        </Grid>
                        <Grid item>$ {el.price}</Grid>
                      </Grid>
                      <Grid item>b</Grid>
                      <Grid item>c</Grid>
                    </Grid>
                  </CardContent>
                </React.Fragment>
              </Card>
            ))}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
