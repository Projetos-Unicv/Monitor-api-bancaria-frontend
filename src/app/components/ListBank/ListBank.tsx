import { useState, useEffect } from "react";

interface PropsInterface {
  onChange: (value: string) => void;
}

export const IconBank = ({ onChange }: PropsInterface) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  // Lista de bancos
  const banks = [
    { src: "../../../image/Itau_V2.svg", alt: "Itaú", value: "ITAU_V2" },
    {
      src: "../../../image/Itau_Francesa.svg",
      alt: "Itaú Francesa",
      value: "ITAU_FRANCESA",
    },
    {
      src: "../../../image/Sicredi_V2.svg",
      alt: "Sicredi",
      value: "SICREDI_V2",
    },
    {
      src: "../../../image/Sicredi_V3.svg",
      alt: "Sicredi V3",
      value: "SICREDI_V3",
    },
    {
      src: "../../../image/Banco_do_Brasil.svg",
      alt: "Banco do Brasil",
      value: "BANCODOBRASIL_V2",
    },
    { src: "../../../image/Inter.svg", alt: "Banco Inter", value: "INTER" },
    { src: "../../../image/Sicoob_V2.svg", alt: "Sicoob", value: "SICOOB_V2" },
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
    { src: "../../../image/Banrisul.svg", alt: "Banrisul", value: "BANRISUL" },
  ];

  useEffect(() => {
    // Encontrar o índice do item "ITAU_V2" e definir como o index ativo
    const defaultIndex = banks.findIndex((bank) => bank.value === "ITAU_V2");
    setActiveIndex(defaultIndex); // Define o item "ITAU_V2" como selecionado
    onChange(banks[defaultIndex].value); // Passa o valor do banco para o onChange
  }, []);

  const handleIconClick = (index: number, bank: string) => {
    setActiveIndex(index);
    onChange(bank);
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen); // Alterna a visibilidade do dropdown no mobile
  };

  const handleSelectChange = (bank: string) => {
    setIsDropdownOpen(false); // Fecha o dropdown após a seleção
    onChange(bank);
  };

  return (
    <div className="relative">
      {/* Dropdown para telas móveis */}
      <div
        className="sm:hidden w-full p-3 bg-white border border-gray-300 rounded-md cursor-pointer"
        onClick={handleDropdownClick}
      >
        <div className="flex items-center">
          {banks.find((bank) => bank.value === banks[activeIndex ?? 0].value)
            ?.src && (
            <img
              src={
                banks.find(
                  (bank) => bank.value === banks[activeIndex ?? 0].value
                )?.src
              }
              alt={
                banks.find(
                  (bank) => bank.value === banks[activeIndex ?? 0].value
                )?.alt
              }
              className="w-8 h-8 mr-2"
            />
          )}
          <span>
            {
              banks.find((bank) => bank.value === banks[activeIndex ?? 0].value)
                ?.alt
            }
          </span>
        </div>

        {isDropdownOpen && (
          <div className="absolute mt-2 w-full bg-white shadow-lg rounded-lg z-10">
            {banks.map((bank) => (
              <div
                key={bank.value}
                className="flex items-center p-3 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelectChange(bank.value)}
              >
                <img src={bank.src} alt={bank.alt} className="w-8 h-8 mr-2" />
                <span>{bank.alt}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Ícones de bancos para telas grandes (desktop) */}
      <div className="hidden sm:flex sm:flex-wrap justify-start gap-4 p-4">
        {banks.map((bank, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center justify-center p-3 rounded-lg transition-all cursor-pointer shadow-md ${
              activeIndex === index
                ? "bg-blue-100 border-2 border-blue-500 scale-105"
                : "hover:bg-gray-100"
            }`}
            onClick={() => handleIconClick(index, bank.value)}
          >
            <img
              src={bank.src}
              alt={bank.alt}
              className={`w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 transition-transform ${
                activeIndex === index ? "scale-110" : "hover:scale-105"
              }`}
            />
            <p
              className={`mt-2 text-xs sm:text-sm md:text-base font-medium ${
                activeIndex === index ? "text-blue-500" : "text-gray-400"
              }`}
            >
              {bank.alt}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
