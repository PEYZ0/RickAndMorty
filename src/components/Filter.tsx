import { Stack } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import TextField from "@mui/material/TextField";
import { ThemeProvider, createTheme } from "@mui/material/styles";

export default function Filter() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
    },
  });
  const style = {
  width:"25%"
}

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
          <TextField  sx={style} label="Name"></TextField>
          <FormControl sx={style}>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Status"
            >
              <MenuItem value={10}>Alive</MenuItem>
              <MenuItem value={20}>Dead</MenuItem>
              <MenuItem value={30}>Unknown</MenuItem>
            </Select>
          </FormControl>
          <TextField sx={style} label="Species"></TextField>
          <FormControl sx={style}>
            <InputLabel id="demo-simple-select-label">Status</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              label="Gender"
            >
              <MenuItem value={10}>unknown</MenuItem>
              <MenuItem value={20}>Female</MenuItem>
              <MenuItem value={30}>Male</MenuItem>
              <MenuItem value={40}>Genderless</MenuItem>
            </Select>
          </FormControl>
        </Stack>
      </ThemeProvider>
    </>
  );
}
