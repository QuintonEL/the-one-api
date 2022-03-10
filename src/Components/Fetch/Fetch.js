import { React, useState, useEffect } from "react";
import "./Fetch.scss";
import axios from "axios";

import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Fetch = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const fetchData = async () => {
    const { data } = await axios.get("https://the-one-api.dev/v2/character", {
      headers: {
        authorization: "Bearer ENeWeOy81b3sQzzfe9qv",
      },
    });
    setData(data.docs);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const searchFilter = (e) => {
    setInput(e.target.value);
  };

  // list all characters, show some basic info for each (in dropdown?), select a character to get all movie quotes for that character

  return (
    <div>
      <nav className="navbar navbar-light searchBox">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={searchFilter}
        ></input>
      </nav>
      <Box className="cardContainer" sx={{ flexGrow: 1 }}>
        <Grid
          container
          spacing={{ xs: 3, md: 4 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {data
            .filter((item) => {
              if (input === "") {
                return item;
              } else if (
                item.name.toLowerCase().includes(input.toLowerCase())
              ) {
                return item;
              }
            })
            .map((item) => (
              <Grid item xs={2} sm={4} md={4}>
                <Item key={item.id} className="characterCard">
                  <h2>{item.name}</h2>
                  <h5>{item.race}</h5>
                  <h6>{item.gender}</h6>
                </Item>
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Fetch;
