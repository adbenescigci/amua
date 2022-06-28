import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import BoxWrapper from "./common/BoxWrapper/BoxWrapper";

const App = () => {
  return (
    <BoxWrapper>
      <Box sx={{ backgroundColor: "white", minHeight: "calc(100vh + 500px)" }}>
        <Box
          sx={{
            minHeight: "70px",
            borderTop: 4,
            borderColor: "#A2DA4A",
          }}
        >
          Header
        </Box>
        <Box
          sx={{
            minHeight: "calc(100vh + 400px)",
            backgroundColor: "#eeeeee",
          }}
        >
          <Outlet />
        </Box>
        <Box sx={{ minHeight: "45px", backgroundColor: "black" }}>
          Copyright
        </Box>
      </Box>
    </BoxWrapper>
  );
};

export default App;
