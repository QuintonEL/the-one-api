import React from "react";
import "./Search.scss";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Search = () => {
  return (
    <Box noValidate autoComplete="off" className="searchBox">
      <TextField label="Search for a character" />
    </Box>
  );
};

export default Search;
