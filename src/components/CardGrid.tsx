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
  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        {/* <Stack
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
        </Stack> */}
        <Stack>
          <Pagination count={42} />
        </Stack>
      </ThemeProvider>
    </>
  );
}

export default CardGrid;
