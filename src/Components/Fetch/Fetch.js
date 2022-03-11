import { React, useState, useEffect } from "react";
import "./Fetch.scss";
import axios from "axios";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

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
              <Grid item xs={2} sm={4} md={4} key={item._id}>
                <Card  className="characterCard">
                  <CardActionArea>
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {item.name}
                      </Typography>
                      <Typography variant="body1" color="text.secondary">
                        Race: {item.race}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        Gender: {item.gender}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <Button
                      size="small"
                      color="primary"
                      className="wikiButton"
                      onClick={() => window.open(item.wikiUrl)}
                    >
                      Wiki
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Fetch;
