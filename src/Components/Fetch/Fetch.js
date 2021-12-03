import { React, useState, useEffect } from "react";
import "./Fetch.css";
import axios from "axios";

export default function Fetch() {
  const [data, setData] = useState([]);
  const fetchData = async () => {
    const { data } = await axios.get("https://the-one-api.dev/v2/character", {
        headers: {
            authorization: "Bearer 1uilorUVzSOMf1_gENAe"
        }
    });
    setData(data.docs);
    console.log(data)

  };

  useEffect(() => {
    fetchData();
  }, []);

// add search box at top to search for a specific character
// list all characters, show some basic info for each (in dropdown?), select a character to get all movie quotes for that character

  return (
    <div>
        {data.map((item) => (
            <div key={item.id}>
                <p>{item.name}</p>
                <p>{item.race}</p>
                <hr />
            </div>
        ))}
    </div>
  );
}
