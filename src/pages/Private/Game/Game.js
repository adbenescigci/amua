import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { gamesList } from "../../../utils/gameList";

const style = () => ({
  box: { flexGrow: 1, paddingLeft: "15px" },
});

const Game = () => {
  const [selectedGame, setGame] = useState();

  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    const id = params.id;
    const game = gamesList.filter((el) => el.id === Number(id))[0];
    if (!game) {
      console.log("no such game");
      navigate("../hub", { replace: true });
    }
    setGame(game);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Box sx={style().box}>
      <Grid container spacing={1}>
        <Grid item container rowSpacing={1} xs={3}>
          details {selectedGame?.id} {selectedGame?.title}
        </Grid>
        <Grid item xs={9}>
          <Box>game</Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Game;
