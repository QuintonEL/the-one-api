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

export default function Fetch() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get("https://the-one-api.dev/v2/character", {
      headers: {
        authorization: "Bearer 1uilorUVzSOMf1_gENAe",
      },
    });
    setData(data.docs);
    console.log(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  // add search box at top to search for a specific character
  // list all characters, show some basic info for each (in dropdown?), select a character to get all movie quotes for that character

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid
        container
        spacing={{ xs: 3, md: 4 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        {data.map((item) => (
          <Grid item xs={2} sm={4} md={4} key={item.id}>
            <Item>
              <h2>{item.name}</h2>
              <h3>{item.race}</h3>
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
