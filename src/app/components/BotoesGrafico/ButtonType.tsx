import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { theme } from "../../shared/mui-Theme/mui-theme"; // Certifique-se de que o caminho está correto
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
        onChange={handleChange}
        aria-label="Platform"
        sx={{}}
      >
        {options.map((option) => (
          <ToggleButton
            key={option.value}
            value={option.value}
            sx={{
              color: "white",

              "&:hover": {
                color: "black",
                backgroundColor: "transparent", // Cor de fundo no hover padrão
              },

              border: `3px solid ${theme.palette.primary.main}`, // Borda do botão

              "&.Mui-selected": {
                backgroundColor: theme.palette.primary.light, // Cor ao selecionar
                color: theme.palette.secondary.contrastText, // Cor do texto ao selecionar
                borderColor: "white",

                "&:hover": {
                  backgroundColor: theme.palette.primary.light, // Manter cor de fundo ao passar o mouse quando selecionado
                  color: theme.palette.secondary.contrastText,
                },
              },
              width: "150px", // Largura fixa
              height: "50px", // Altura fixa
              fontSize: "16px", // Tamanho da fonte
            }}
          >
            {option.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </ThemeProvider>
  );
};
