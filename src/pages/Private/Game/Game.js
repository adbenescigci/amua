import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Chip from "@mui/material/Chip";
import { gamesList } from "../../../utils/gameList";

const style = () => ({
  box: { flexGrow: 1, padding: "15px" },
});

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
    console.log(game);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const getBlackTeam = () => {
  //   let result;
  //   for (let i = 0; i < selectedGame?.numberOfPlayers / 2; i++) {
  //     result += <p> t </p>;
  //   }
  //   console.log(result);
  //   return result;
  // };

  return (
    <Box sx={style().box}>
      {console.log(selectedGame && Object.values(selectedGame.blackTeam))}
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
            <Grid container spacing={2}>
              <Grid item container direction="column" xs={12} sm={6}>
                black
                {selectedGame &&
                  Object.values(selectedGame.blackTeam).map((el, index) => (
                    <Chip
                      sx={{ width: "100%", borderRadius: 0, mb: "5px" }}
                      key={index}
                      label={el.name}
                    />
                  ))}
              </Grid>
              <Grid item xs={12} sm={6}>
                White
                {selectedGame &&
                  Object.values(selectedGame.whiteTeam).map((el, index) => (
                    <Chip
                      sx={{ width: "100%", borderRadius: 0, mb: "5px" }}
                      key={index}
                      label={el.name}
                    />
                  ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Game;
