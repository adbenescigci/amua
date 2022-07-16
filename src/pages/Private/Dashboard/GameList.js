import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";

import { gamesList } from "../../../utils/moc";
import { iconList } from "../../../utils/iconList";

const style = () => ({
  card: {
    marginTop: "10px",
    marginRight: "10px",
    minWidth: "300px",
  },
  iconSport: {
    width: "80px",
    bgcolor: "#A2DA4A",
    color: "white",
    textAlign: "center",
    "*": { paddingTop: "7px" },
  },
  date: {
    width: "60px",
    display: ["none", "grid"],
  },
  price: {
    color: "#A2DA4A",
    fontSize: "20px",
    width: "70px",
    padding: "10px",
  },
  middleLine: {
    height: "75px",
    alignItems: "center",
    paddingLeft: "10px",
    "*": {
      textAlign: ["start", "start", "center"],
    },
  },
});

const GameList = () => {
  return (
    <>
      {gamesList.map((el, index) => (
        <Card sx={style().card} key={index}>
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
                  <Grid item sx={style().iconSport}>
                    {iconList[el.game_icon]}
                  </Grid>

                  <Grid item sx={style().date}>
                    {el.date}
                  </Grid>

                  <Grid
                    item
                    sx={{ minWidth: "90px" }}
                    container
                    direction="column"
                    xs="auto"
                  >
                    <Typography sx={{ color: "#A2DA4A", fontSize: "17px" }}>
                      {el.title}
                    </Typography>
                    <Typography sx={{ fontSize: "13px" }}>
                      {el.subTitle}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item xs={3} align="end" sx={style().price}>
                  $ {el.price}
                </Grid>
              </Grid>
              <Grid item container sx={style().middleLine}>
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
    </>
  );
};

export default GameList;
