import React, { useEffect, useState } from "react";
import Filter from "./components/Filter";
import CardGrid from "./components/CardGrid";
import { Stack } from "@mui/material";

interface Character {
  id: number;
  name: string;
  // Weitere Eigenschaften hier
}

interface CharacterResponse {
  info: {
    count: number;
    pages: number;
  };
  results: Character[];
}

export default function App() {
  const baseUrl = "https://rickandmortyapi.com/api/character/";
  const [data, setData] = useState<Character[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [initialFetchComplete, setInitialFetchComplete] = useState(false);
  const [name, setName] = useState<String>(" ");

    const fetchData = (page: number) => {
      fetch(`${baseUrl}?name=${name}&page=${page}`)
        .then((res) => res.json() as Promise<CharacterResponse>)
        .then((d) => {
          if (!initialFetchComplete) {
            setInitialFetchComplete(true);
            return;
          }
          // Überprüfen, ob die Daten bereits in "data" vorhanden sind
          const newData = d.results.filter((result) => {
            return !data.some((existingData) => existingData.id === result.id);
          });
          setData((prevData) => [...prevData, ...newData]);
          setTotalPages(d.info.pages);
          if (currentPage < d.info.pages) {
            setCurrentPage(currentPage + 1);
          }
        })
        .catch((error) => console.error("Error fetching data: ", error));
    };
    const fetchDataOveride = (page: number) => {
      fetch(`${baseUrl}?name=${name}&page=${page}`)
        .then((res) => res.json() as Promise<CharacterResponse>)
        .then((d) => {
          if (!initialFetchComplete) {
            setInitialFetchComplete(true);
            return;
          }
    
          setData(d.results); // Direktes Überschreiben von data mit den neuen Daten
          setTotalPages(d.info.pages);
    
          if (currentPage < d.info.pages) {
            setCurrentPage(currentPage + 1);
          }
        })
        .catch((error) => console.error("Error fetching data: ", error));
    };
    
  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage, data, initialFetchComplete, name]);

  return (
    <div className="App" style={{ width: "100vw" }}>
      <Stack justifyContent="center" alignItems="center">
        <Filter name={name} setName={setName}  setCurrentPage={setCurrentPage} fetchData={fetchDataOveride}/>
        <CardGrid data={data} />
      </Stack>
    </div>
  );
}
