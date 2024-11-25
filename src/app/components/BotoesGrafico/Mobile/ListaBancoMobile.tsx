import React, { useState, useRef } from "react";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import ButtonGroup from "@mui/material/ButtonGroup";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

interface PropsInterface {
  onChange: (value: string) => void;
}

const banks = [
  { src: "../../../image/Itau_V2.svg", alt: "Itaú", value: "ITAU_V2" },
  {
    src: "../../../image/Itau_Francesa.svg",
    alt: "Nubank",
    value: "ITAU_FRANCESA",
  },
  {
    src: "../../../image/Sicredi_V2.svg",
    alt: "Sicredi",
    value: "SICREDI_V2",
  },
  {
    src: "../../../image/Banco_do_Brasil.svg",
    alt: "Banco do Brasil",
    value: "BANCODOBRASIL_V2",
  },
  {
    src: "../../../image/Inter.svg",
    alt: "Banco Inter",
    value: "INTER",
  },
  {
    src: "../../../image/Sicoob_V2.svg",
    alt: "Sicoob",
    value: "SICOOB_V2",
  },
  {
    src: "../../../image/Santander_V2.svg",
    alt: "Santander",
    value: "SANTANDER",
  },
  {
    src: "../../../image/Caixa.svg",
    alt: "Caixa Econômica Federal",
    value: "CAIXA",
  },
  {
    src: "../../../image/Banrisul.svg",
    alt: "Banrisul",
    value: "BANRISUL",
  },
];

const ListaBancoMobile = ({ onChange }: PropsInterface) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleMenuItemClick = (
    event: React.MouseEvent<HTMLElement>,
    index: number
  ) => {
    setSelectedIndex(index);
    setOpen(false);
    onChange(banks[index].value);
  };

  return (
    <React.Fragment>
      <ButtonGroup
        ref={anchorRef}
        color="success"
        aria-label="split button"
        variant="outlined"
        style={{ display: "flex", alignItems: "center" }}
      >
        <Button
          onClick={() =>
            console.log("Selecionado:", banks[selectedIndex].alt)
          }
          style={{
            display: "flex",
            alignItems: "center",
            textTransform: "none",
            padding: "8px",
          }}
        >
          <img
            src={banks[selectedIndex].src}
            alt={banks[selectedIndex].alt}
            style={{ width: 44, height: 44, marginRight: 8 }}
          />
          {banks[selectedIndex].alt}
        </Button>
        <IconButton
          aria-controls={open ? "split-button-menu" : undefined}
          aria-expanded={open ? "true" : undefined}
          aria-label="select bank"
          aria-haspopup="menu"
          onClick={() => setOpen(!open)}
        >
          <ArrowDropDownIcon />
        </IconButton>
      </ButtonGroup>

      <Menu
        open={open}
        onClose={() => setOpen(false)}
        anchorEl={anchorRef.current}
      >
        {banks.map((bank, index) => (
          <MenuItem
            key={bank.value}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}
          >
            <img
              src={bank.src}
              alt={bank.alt}
              style={{ width: 44, height: 44, marginRight: 8 }}
            />
            {bank.alt}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
};

export default ListaBancoMobile;
