
import { Stack } from "@mui/material";
import Card from './Card'


function CardGrid(props: any) {
  return (

      <Stack
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
      </Stack>
  );
}

export default CardGrid;
