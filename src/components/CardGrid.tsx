import { CssBaseline, Stack } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Card from "./Card";
import Pagination from "@mui/material/Pagination";

function CardGrid(props: any) {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const handleChange = (event:React.ChangeEvent<unknown>, value:number)=> {
    props.setCurrentPage(value)
  }
  return (
    <>
      <ThemeProvider theme={darkTheme}>
      <Stack m={2}>
          <Pagination count={props.totalPages}  page={props.currentPage} onChange={handleChange} />
        </Stack>
        <CssBaseline />
        {<Stack
          direction="row"
          flexWrap="wrap"
          alignContent="center"
          justifyContent="center"
          width="80%"
        >
          {props.data.map((character: any) => (
            <Card
              key={character.id}
              image={character.image}
              name={character.name}
              status={character.status}
              species={character.species}
            />
          ))}
        </Stack>}
      </ThemeProvider>
    </>
  );
}

export default CardGrid;
