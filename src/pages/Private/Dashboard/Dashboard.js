import * as React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";

import { gamesList } from "../../../utils/moc";

const Dashboard = () => {
  console.log(gamesList);
  return (
    <Box sx={{ flexGrow: 1, paddingLeft: "15px" }}>
      <Grid container spacing={1} sx={{ paddingTop: "15px" }}>
        <Grid
          item
          container
          sx={{
            maxHeight: "75px",
            display: { xs: "none", md: "none", lg: "grid" },
            "*": {
              fontSize: "13px",
              fontWeight: 400,
              color: "#212121",
            },
          }}
          rowSpacing={1}
          xs={3}
        >
          <Grid item>
            <Typography>
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

        <Grid item xs={12} md={12} lg={9}>
          <Box
            sx={{
              minWidth: 275,
              "& > *": {
                fontSize: "14px",
              },
              paddingLeft: [0, "30px"],
            }}
          >
            {gamesList.map((el, index) => (
              <Card
                sx={{
                  marginTop: "10px",
                  marginRight: "10px",
                  minWidth: "300px",
                }}
                key={index}
              >
                <React.Fragment>
                  <Grid container rowSpacing={1} direction="column">
                    <Grid
                      item
                      container
                      direction="row"
                      justifyContent="space-between"
                      sx={{ bgcolor: "#fafafa", height: "80px" }}
                    >
                      <Grid
                        item
                        container
                        xs={9}
                        direction="row"
                        spacing={2}
                        sx={{ paddingTop: "10px" }}
                      >
                        <Grid
                          item
                          sx={{
                            width: "80px",
                            bgcolor: "#A2DA4A",
                            color: "white",
                            textAlign: "center",
                          }}
                        >
                          <SportsBasketballIcon
                            sx={{ paddingTop: "7px" }}
                            fontSize="large"
                          />
                        </Grid>
                        <Grid
                          item
                          sx={{
                            width: "60px",
                            display: ["none", "grid"],
                          }}
                        >
                          {el.date}
                        </Grid>

                        <Grid
                          item
                          sx={{ minWidth: "90px" }}
                          container
                          direction="column"
                          xs="auto"
                        >
                          <Typography
                            sx={{ color: "#A2DA4A", fontSize: "17px" }}
                          >
                            {el.title}
                          </Typography>
                          <Typography sx={{ fontSize: "13px" }}>
                            {el.subTitle}
                          </Typography>
                        </Grid>
                      </Grid>
                      <Grid
                        item
                        xs={3}
                        align="end"
                        sx={{
                          color: "#A2DA4A",
                          fontSize: "20px",
                          width: "70px",
                          padding: "10px",
                        }}
                      >
                        $ {el.price}
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      container
                      sx={{
                        height: "75px",
                        alignItems: "center",
                        paddingLeft: "10px",
                        "*": {
                          textAlign: ["start", "start", "center"],
                        },
                      }}
                    >
                      <Grid item xs={12} md={5}>
                        {el.date} @ {el.hour} {`(${el.duration} mins)`}
                      </Grid>
                      <Grid item xs={12} md={7}>
                        {el.location}
                      </Grid>
                    </Grid>
                  </Grid>
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
