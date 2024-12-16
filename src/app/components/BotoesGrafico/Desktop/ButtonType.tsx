import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { theme } from "../../../shared/mui-Theme/mui-theme"; // Certifique-se de que o caminho está correto
import { ThemeProvider } from "@mui/material/styles";
import { Box } from "@mui/material";

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
      <Box
        sx={{
          width: "100%", // Ocupa o máximo de largura
        }}
      >
        <ToggleButtonGroup
          color="primary"
          value={alignment}
          exclusive
          size="small"
          onChange={handleChange}
          aria-label="Platform"
          sx={{
            width: "100%", // Ocupa a largura total do contêiner pai
            display: "flex", // Garante que os botões se ajustem
            flexWrap: "nowrap", // Mantém os botões em uma linha
          }}
        >
          {options.map((option) => (
            <ToggleButton
              key={option.value}
              value={option.value}
              sx={{
                flex: 1, // Garante que cada botão ocupe a mesma largura
                color: "white",
                "&:hover": {
                  color: "#1b213b",
                  backgroundColor: "white",
                },
                border: `3px solid #1b213b`,
                "&.Mui-selected": {
                  backgroundColor: "#1b213b",
                  color: "white",
                  borderColor: "#1b213b",
                  "&:hover": {
                    backgroundColor: "#1b213b",
                    color: "white",
                  },
                },
              }}
            >
              {option.label}
            </ToggleButton>
          ))}
        </ToggleButtonGroup>
      </Box>
    </ThemeProvider>
  );
};
