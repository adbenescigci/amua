import React from "react";
import Box from "@mui/material/Box";
import { boxWrapperStyles } from "./styles";

const BoxWrapper = ({ children }) => {
  return (
    <Box container justifyContent="center" xs={12} sx={boxWrapperStyles}>
      {children}
    </Box>
  );
};

export default BoxWrapper;
