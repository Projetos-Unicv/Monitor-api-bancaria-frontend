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
  { src: "/image/itau.svg", alt: "Itaú", value: "ITAU_V2" },
  { src: "/image/nubank-3.svg", alt: "Nubank", value: "NUBANK" },
  { src: "/image/sicredi-160.svg", alt: "Sicredi", value: "SICREDI_V2" },
  { src: "/image/banco-do-brasil-3.svg", alt: "Banco do Brasil", value: "BANCODOBRASIL_V2" },
  { src: "/image/banco-inter-logo.svg", alt: "Banco Inter", value: "INTER" },
  { src: "/image/sicoob-vector-logo.svg", alt: "Sicoob", value: "SICOOB_V2" },
  { src: "/image/santander1.svg", alt: "Santander", value: "SANTANDER" },
  { src: "/image/caixa-economica-federal-1.svg", alt: "Caixa Econômica Federal", value: "CAIXA" },
  { src: "/image/banrisul-logo.svg", alt: "Banrisul", value: "BANRISUL" },
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
            style={{ width: 24, height: 24, marginRight: 8 }}
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
              style={{ width: 24, height: 24, marginRight: 8 }}
            />
            {bank.alt}
          </MenuItem>
        ))}
      </Menu>
    </React.Fragment>
  );
};

export default ListaBancoMobile;
