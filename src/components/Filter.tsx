import { Button, Stack } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";

export default function Filter(props: any) {
  const [filter, setFilter] = useState<any>({
    name: " ",
    status: "",
    species: " ",
    gender: "",
  });
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const style = {
    width: "25%",
  };
  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let id = e.target.id;
    let value = e.target.value;

    setFilter({ ...filter, [id]: value });
  };
  const handleSearch = () => {
    props.setCurrentPage(0);
    props.setName(filter.name);
    props.fetchData(0);
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Stack
          p={1}
          spacing={1}
          direction="row"
          width="50%"
          justifyContent="space-evenly"
        >
          <TextField
            sx={style}
            id="name"
            label="Name"
            onChange={handelChange}
          ></TextField>
          <FormControl sx={style}>
            <InputLabel id="status">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="status"
              label="Status"
              value={filter.status}
            >
              <MenuItem value={""}>None</MenuItem>
              <MenuItem value={10}>Alive</MenuItem>
              <MenuItem value={20}>Dead</MenuItem>
              <MenuItem value={30}>Unknown</MenuItem>
            </Select>
          </FormControl>
          <TextField sx={style} id="species" label="Species"></TextField>
          <FormControl sx={style}>
            <InputLabel id="status">Status</InputLabel>
            <Select id="gender" label="Gender" value={filter.gender}>
              <MenuItem value={""}>None</MenuItem>
              <MenuItem value={11}>unknown</MenuItem>
              <MenuItem value={12}>Female</MenuItem>
              <MenuItem value={13}>Male</MenuItem>
              <MenuItem value={14}>Genderless</MenuItem>
            </Select>
          </FormControl>
          <Button color="info" variant="contained" onClick={handleSearch}>
            {<SearchIcon />}
          </Button>
        </Stack>
      </ThemeProvider>
    </>
  );
}
