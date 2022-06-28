import { Outlet } from "react-router-dom";
import Box from "@mui/material/Box";
import BoxWrapper from "../../common/BoxWrapper/BoxWrapper";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

const styles = {
  boxContainer: {
    backgroundColor: "white",
    minHeight: "calc(100vh + 500px)",
    borderTop: 4,
    borderColor: "#A2DA4A",
  },
  outlet: {
    minHeight: "calc(100vh + 400px)",
    backgroundColor: "#eeeeee",
  },
};

const BasicPage = () => {
  return (
    <BoxWrapper>
      <Box sx={styles.boxContainer}>
        <Header />
        <Box sx={styles.outlet}>
          <Outlet />
        </Box>
        <Footer />
      </Box>
    </BoxWrapper>
  );
};

export default BasicPage;
