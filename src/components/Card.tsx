import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Chip from "@mui/material/Chip";
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import BlockIcon from '@mui/icons-material/Block';
import QuestionMarkIcon from '@mui/icons-material/QuestionMark';


export default function CardGrid(props:any) {
  const getStatusColor = (status: string) => {
    if (status === "Alive") {
      return "success";
    } else if (status === "Dead") {
      return "error";
    } else {
      return "default";
    }
  };
  const showGender = (gender:string)=>{
    if (gender == "Male"){
      return(<MaleIcon color="primary"/>)
    } else if ( gender == "Female"){
      return(<FemaleIcon color="error"/>)
    } else if(gender == "Genderless"){
      return(<BlockIcon color="disabled"/>)
    } else{
      return(<QuestionMarkIcon/>)
    }
  }

  const statusColor = getStatusColor(props.status);

  return (
    <Card
      sx={{
        width: 300,
        m:1
      }}
    >
      <CardMedia
        sx={{ height: 300, objectFit: "cover" }}
        image={props.image}
        title={props.name}
      />
      <CardContent>
        <Stack>
          
          <h2>{showGender(props.gender)} {props.name}</h2>
          <Stack direction="row" spacing={1} justifyContent="center">
            <Chip color={ statusColor } label={props.status} />
            <Chip color="secondary" label={props.species} />
          </Stack>
        </Stack>
      </CardContent>
    </Card>
  );
}
