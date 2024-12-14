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
  onChange: (value: string) => void; // Define uma função de mudança passada como prop
}

export default function BasicSelect({ onChange }: BasicSelectProps) {
  // Estado inicial configurado para "DAY", que corresponde à opção "1 Dia"
  const [data, setData] = React.useState("DAY");

  const handleChange = (event: SelectChangeEvent) => {
    const newValue = event.target.value as string;
    setData(newValue);
    onChange(newValue); // Chama a função passada como prop para atualizar o valor
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          minWidth: 150,
          width: "100%", // Faz com que o seletor ocupe toda a largura possível
          // maxWidth: 320, // Limita o máximo para não ficar muito grande
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
            Periodo
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={data} // O valor de "data" já está sendo passado aqui
            label="data"
            size="small"
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
            <MenuItem value={"DAY"}>1 Dia</MenuItem> {/* Valor inicial */}
            <MenuItem value={"WEEK"}>7 Dias</MenuItem>
            <MenuItem value={"MOUTH"}>30 Dias</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </ThemeProvider>
  );
}
