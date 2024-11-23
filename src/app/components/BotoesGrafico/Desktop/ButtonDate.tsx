import * as React from "react";
import { theme } from "../../../shared/mui-Theme/mui-theme";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ThemeProvider } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface BasicSelectProps {
  onChange: (value: string) => void; // Define a prop para passar a função de mudança
}

export default function BasicSelect({ onChange }: BasicSelectProps) {
  const [data, setData] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    const newValue = event.target.value as string;
    setData(newValue);
    onChange(newValue); // Chama a função passada como prop
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minWidth: 120,
          maxWidth: 120,
        }}
      >
        <FormControl fullWidth variant="outlined">
          <InputLabel
            id="demo-simple-select-label"
            sx={{
              color: "yellowgreen",
              "&.Mui-focused": {
                color: "yellowgreen", // Cor do label ao focar
              },
            }}
          >
            Últimos(a)
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={data}
            label="data"
            onChange={handleChange}
            IconComponent={ArrowDropDownIcon}
            sx={{
              color: "yellowgreen",
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "yellowgreen", // Borda padrão
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "yellowgreen", // Borda ao passar o mouse
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "yellowgreen", // Borda ao focar
              },
              "&.Mui-focused": {
                color: "yellowgreen", // Texto ao focar
              },
            }}
          >
            <MenuItem value={"DAY"}>1 Dia</MenuItem>
            <MenuItem value={"WEEK"}>7 Dias</MenuItem>
            <MenuItem value={"MOUTH"}>30 Dias</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
}
