import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { theme } from "../../../shared/mui-Theme/mui-theme"; // Certifique-se de que o caminho está correto
import { ThemeProvider } from "@mui/material/styles";

interface ToggleOption {
  value: string;
  label: string;
}

interface ColorToggleButtonProps {
  options: ToggleOption[];
  onChange: (value: string) => void;
}

export const Options: React.FC<ColorToggleButtonProps> = ({
  options,
  onChange,
}) => {
  const [alignment, setAlignment] = React.useState(options[0].value);

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
    onChange(newAlignment);
  };

  return (
    <ThemeProvider theme={theme}>
      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        size="small"
        onChange={handleChange}
        aria-label="Platform"
        sx={{}}
      >
        {options.map((option) => (
          <ToggleButton
            key={option.value}
            value={option.value}
            sx={{
              color: "white", // Cor do texto em azul escuro

              "&:hover": {
                color: "#1b213b", // Cor do texto mantida no hover
                backgroundColor: "white", // Fundo transparente no hover
              },

              border: `3px solid #1b213b`, // Borda em azul escuro para todos os botões

              "&.Mui-selected": {
                backgroundColor: "#1b213b", // Cor de fundo azul escuro quando selecionado
                color: "white", // Cor do texto quando selecionado
                borderColor: "#1b213b", // Mantém a borda azul escuro quando selecionado

                "&:hover": {
                  backgroundColor: "#1b213b", // Mantém a cor de fundo ao passar o mouse ao selecionar
                  color: "white",
                },
              },
              minWidth: 150,
            }}
          >
            {option.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </ThemeProvider>
  );
};
