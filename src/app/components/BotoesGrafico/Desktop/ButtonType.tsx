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
              color: "yellowgreen",

              "&:hover": {
                color: "yellowgreen",
                backgroundColor: "transparent", // Cor de fundo no hover padrão
              },

              border: `3px solid ${"yellowgreen"}`, // Borda do botão

              "&.Mui-selected": {
                backgroundColor: "yellowgreen", // Cor ao selecionar
                color: "white", // Cor do texto ao selecionar
                borderColor: "yellowgreen",

                "&:hover": {
                  backgroundColor: "yellowgreen", // Manter cor de fundo ao passar o mouse quando selecionado
                  color: "white",
                },
              },
<<<<<<< HEAD
              // width: "150px", // Largura fixa
              // height: "50px", // Altura fixa
              // fontSize: "16px", // Tamanho da fonte
              minWidth: 150,
=======
              width: "100px", // Largura fixa
              height: "50px", // Altura fixa
              fontSize: "16px", // Tamanho da fonte
>>>>>>> 3ab3abcd2cc9cbda46c9a559d82a15b8ee2bb099
            }}
          >
            {option.label}
          </ToggleButton>
        ))}
      </ToggleButtonGroup>
    </ThemeProvider>
  );
};
