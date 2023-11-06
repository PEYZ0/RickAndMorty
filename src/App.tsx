import "./styles.css";
import { useEffect, useState } from "react";
import Filter from "./components/Filter";
import CardGrid from "./components/CardGrid";
import { Stack } from "@mui/material";

export default function App() {
  const url = "https://rickandmortyapi.com/api/character/";
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(url)
      .then((res) => res.json())
      .then((d) => setData(d.results))
      .catch((error) => console.error("Error fetching data: ", error));
  };

  useEffect(() => {
    fetchData();
    console.log(data);
  }, []);

  return (
    <div className="App" style={{width:"100vw"}}>
      <Stack justifyContent="center" alignItems='center'>
      <Filter />
      <CardGrid data = {data}/>
      </Stack>
    </div>
  );
}
