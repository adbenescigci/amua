import Box from "@mui/material/Box";
import { Link } from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
const Intro = () => {
  return (
    <>
      <Box
        sx={{
          minHeight: "calc(100vh + 500px)",
          display: "flex",
          justifyContent: "start",
          a: {
            fontSize: "12px",
            color: "#e0e0e0 !important",
            textDecoration: "none",
          },
        }}
      >
        <p>Intro</p>
        <Link to="/hub"> Game Hub</Link>
      </Box>
      <Footer />
    </>
  );
};

export default Intro;
