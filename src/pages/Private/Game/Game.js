import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import Avatar from "@mui/material/Avatar";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import { gamesList } from "../../../utils/gameList";

const style = (el) => ({
  box: { flexGrow: 1, padding: "15px" },
  chip: {
    width: "100%",
    borderRadius: 0,
    height: "65px",
    mb: "15px ! important",
    justifyContent: "start",
    fontSize: "15px",
    color: !el && "#bdbdbd",
    borderStyle: !el && "dotted",

    "&:hover": !el && {
      fontSize: "40px ! important",
    },
  },
  avatar: {
    margin: "20px ! important",
    width: "40px ! important",
    height: "40px ! important",
    fontSize: "15px ! important",
    bgcolor: `${!el && "transparent ! important"}`,
  },
});

//For using team list, we play with Number in JS
// eslint-disable-next-line no-extend-native
Number.prototype[Symbol.iterator] = function* () {
  for (let i = 1; i <= this; i++) {
    yield i;
  }
};

const Game = () => {
  const [selectedGame, setGame] = useState();
  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const id = params.id;
    const game = gamesList.filter((el) => el.id === Number(id))[0];

    if (!game) {
      //first fetch from database then
      console.log("no such game");
      navigate("../hub", { replace: true });
    }

    setGame(game);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getTeamMembers = (team) => {
    let number = selectedGame.numberOfPlayers;

    return [...number].map((el, index) => (
      <Chip
        sx={style(team[el]).chip}
        key={index}
        label={team[el] ? team[el].name : "Player"}
        variant="outlined"
        avatar={
          <Avatar sx={style(team[el]).avatar}>
            {team[el] ? (
              team[el].name.charAt(0)
            ) : (
              <LocalGroceryStoreIcon
                sx={{ color: "#bdbdbd" }}
                fontSize="medium"
              />
            )}
          </Avatar>
        }
      />
    ));
  };

  return (
    <Box sx={style().box}>
      <Grid
        container
        sx={{
          flexDirection: ["column", "row"],
        }}
        spacing={1}
        alignItems="center"
      >
        <Grid
          item
          container
          sx={{ display: ["none", "grid"], width: "100%" }}
          rowSpacing={1}
          xs={3}
        >
          {selectedGame?.id} {selectedGame?.title}
        </Grid>
        <Grid item container xs={9}>
          <Grid container item align="center">
            <Grid item xs={12}>
              Game
            </Grid>
            <Grid
              item
              sx={{ display: ["grid", "none"] }}
              rowSpacing={1}
              xs={12}
            >
              {selectedGame?.id} {selectedGame?.title}
            </Grid>
            {selectedGame && (
              <Grid container spacing={5}>
                <Grid item container direction="column" xs={12} sm={6}>
                  Black
                  {getTeamMembers(selectedGame.blackTeam)}
                </Grid>
                <Grid item xs={12} sm={6}>
                  White
                  {getTeamMembers(selectedGame.whiteTeam)}
                </Grid>
              </Grid>
            )}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Game;
