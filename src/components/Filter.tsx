import { Button, Stack } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import SearchIcon from "@mui/icons-material/Search";
import React, { useState } from "react";
import Select, { SelectChangeEvent } from "@mui/material/Select";

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

    props.setFilter({ ...filter, [id]: value });
  };

  const handelChangeStatus = (e: SelectChangeEvent) => {
    let id = "status";
    let value = e.target.value;

    props.setFilter({ ...filter, [id]: value });
  };

  const handelChangeGender = (e: SelectChangeEvent) => {
    let id = "gender";
    let value = e.target.value;

    props.setFilter({ ...filter, [id]: value });
  };

  const handleSearch = () => {
    props.setCurrentPage(0);
    props.fetchData(0);
  };

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Stack
          m={2}
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
              id="status"
              label="Status"
              value={props.filter.status}
              onChange={handelChangeStatus}
            >
              <MenuItem value={""}>None</MenuItem>
              <MenuItem value={"alive"}>Alive</MenuItem>
              <MenuItem value={"dead"}>Dead</MenuItem>
              <MenuItem value={"unknown"}>Unknown</MenuItem>
            </Select>
          </FormControl>

          <TextField
            sx={style}
            id="species"
            label="Species"
            onChange={handelChange}
          ></TextField>

          <FormControl sx={style}>
            <InputLabel id="gender">Gender</InputLabel>
            <Select id="gender" label="Gender" value={props.filter.gender} onChange={handelChangeGender}>
              <MenuItem value={""}>None</MenuItem>
              <MenuItem value={"unknown"}>unknown</MenuItem>
              <MenuItem value={"female"}>Female</MenuItem>
              <MenuItem value={"male"}>Male</MenuItem>
              <MenuItem value={"genderless"}>Genderless</MenuItem>
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
