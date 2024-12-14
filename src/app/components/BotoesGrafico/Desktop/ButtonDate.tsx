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
        }}
      >
        <FormControl fullWidth variant="outlined" sx={{ marginTop: "20px" }}>
          <InputLabel
            id="demo-simple-select-label"
            sx={{
              color: "#d3d3d3", // Cor do label
              "&.Mui-focused": {
                color: "#d3d3d3", // Cor do label ao focar
              },
              "&.MuiInputLabel-shrink": {
                color: "#d3d3d3", // Cor do label quando encolhido
                transform: "translate(14px, -6px) scale(0.75)", // Ajuste para evitar sobreposição
              },
            }}
          >
            Periodo
          </InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={data} // O valor de "data" já está sendo passado aqui
            label="Periodo"
            size="small"
            onChange={handleChange}
            IconComponent={ArrowDropDownIcon}
            sx={{
              color: "#d3d3d3", // Cor do texto
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "white", // Cor da borda
              },
              "&:hover .MuiOutlinedInput-notchedOutline": {
                borderColor: "white", // Borda ao passar o mouse
              },
              "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                borderColor: "white", // Borda ao focar
              },
              "&.Mui-focused": {
                color: "white", // Texto ao focar
              },
              minWidth: 150, // Define a largura mínima igual ao ToggleButton
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
