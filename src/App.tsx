import { useEffect, useState } from "react";
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
  const [filter,setFilter] = useState({
    name:' ',
    status:'',
    species:' ',
    gender:' '
  })
  const [name, setName] = useState<String>(" ");
  const [status,setStatus]=useState<String>(" ")

  const fetchData = (page: number) => {
    fetch(`${baseUrl}?name=${filter.name}&status=${filter.status}&species=${filter.species}&gender=${filter.gender}&page=${page}`)
      .then((res) => res.json() as Promise<CharacterResponse>)
      .then((d) => {
        setData(d.results);
        setTotalPages(d.info.pages);
      })
      .catch((error) => console.error("Error fetching data: ", error));
  };

  useEffect(() => {
    if (currentPage <= totalPages) {
      fetchData(currentPage);
    }
  }, [currentPage, name]);

  return (
    <div className="App" style={{ width: "100vw" }}>
      <Stack justifyContent="center" alignItems="center">
        <Filter fetchData={fetchData} setName={setName} setCurrentPage={setCurrentPage} filter={filter} setFilter={setFilter}/>
        <CardGrid
          data={data}
          setCurrentPage={setCurrentPage}
          currentPage={currentPage}
          totalPages={totalPages}
        />
      </Stack>
    </div>
  );
}
