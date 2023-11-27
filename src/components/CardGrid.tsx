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
  const handleChange = (e:React.ChangeEvent<unknown>,value:number)=> {
    if (e){
      props.setCurrentPage(value)
    }
   
  }
  const hasData = (obj:object|undefined|null)=>{
    if (obj!= null ) {
      return Object.keys(obj).length > 0;
    }else{
      return false;
    }
  }
  return (
    <>
    
      <ThemeProvider theme={darkTheme}>
      {hasData(props.data)?
      <>
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
            gender={character.gender}
            status={character.status}
            species={character.species}
          />
        ))}
      </Stack>}
      </> :
      <>
        <h2> Es wurden keine Charackter gefunden</h2>
      </>
      }
      </ThemeProvider>
    </>
  );
}

export default CardGrid;
