import * as React from "react";
import { theme } from "../../shared/mui-Theme/mui-theme"; // Certifique-se de que o caminho está correto
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { ThemeProvider } from "@mui/material/styles";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown"; // Importação correta do ícone

export default function BasicSelect() {
  const [data, setData] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setData(event.target.value as string);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ minWidth: 120, maxWidth: 120, margin: "20px auto" }}>
        <FormControl fullWidth variant="outlined">
          <InputLabel id="demo-simple-select-label">Últimos(a)</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={data}
            label="data"
            onChange={handleChange}
            IconComponent={ArrowDropDownIcon} // Usando o ícone
            sx={{
              borderRadius: "8px", // Borda arredondada
              boxShadow: 2, // Sombra
              "&:hover": {
                boxShadow: 4, // Sombra ao passar o mouse
              },
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.main, // Cor da borda
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.dark, // Cor da borda quando focado
              },
            }}
          >
            <MenuItem
              value={"DAY"}
              sx={{
                color: theme.palette.secondary.contrastText,
                backgroundColor: theme.palette.primary.main,
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark, // Cor ao passar o mouse
                },
              }}
            >
              24-HRS
            </MenuItem>
            <MenuItem
              value={"WEEK"}
              sx={{
                color: theme.palette.secondary.contrastText,
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              7-DIAS
            </MenuItem>
            <MenuItem
              value={"MONTH"}
              sx={{
                color: theme.palette.secondary.contrastText,
                "&:hover": {
                  backgroundColor: theme.palette.primary.dark,
                },
              }}
            >
              30-DIAS
            </MenuItem>
          </Select>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
}
