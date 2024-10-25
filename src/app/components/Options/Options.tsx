import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

interface ToggleOption {
  value: string;
  label: string;
}

interface ColorToggleButtonProps {
  options: ToggleOption[];
}

export const Options: React.FC<ColorToggleButtonProps> = ({ options }) => {
  const [alignment, setAlignment] = React.useState(options[0].value);

  const handleChange = (
    _event: React.MouseEvent<HTMLElement>,
    newAlignment: string
  ) => {
    setAlignment(newAlignment);
  };

  return (
    <ToggleButtonGroup
      color="secondary"
      value={alignment}
      exclusive
      onChange={handleChange}
      aria-label="Platform"
      className="bg-white"
    >
      {options.map((option) => (
        <ToggleButton key={option.value} value={option.value}>
          {option.label}
        </ToggleButton>
      ))}
    </ToggleButtonGroup>
  );
};
