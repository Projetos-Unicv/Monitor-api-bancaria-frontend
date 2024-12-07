import { useState, useEffect, useMemo } from "react";

interface PropsInterface {
  onChange: (value: string) => void;
}

export const IconBank = ({ onChange }: PropsInterface) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const banks = useMemo(
    () => [
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
        alt: "Caixa Econômica",
        value: "CAIXA",
      },
      {
        src: "../../../image/Banrisul.svg",
        alt: "Banrisul",
        value: "BANRISUL",
      },
    ],
    []
  );

  // Ao iniciar o componente, definimos o banco padrão como "ITAU_V2"
  useEffect(() => {
    const defaultIndex = banks.findIndex((bank) => bank.value === "ITAU_V2");
    setActiveIndex(defaultIndex);
    onChange(banks[defaultIndex].value);
  }, [banks, onChange]);

  const handleIconClick = (index: number, bank: string) => {
    setActiveIndex(index); // Atualiza o índice ativo
    onChange(bank); // Chama o onChange com o novo banco
  };

  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen); // Alterna o estado do dropdown
  };

  const handleSelectChange = (bank: string) => {
    setIsDropdownOpen(false); // Fecha o dropdown após selecionar
    const index = banks.findIndex((b) => b.value === bank);
    setActiveIndex(index); // Atualiza o índice ativo
    onChange(bank); // Chama o onChange com o novo banco
  };

  const activeBank = banks[activeIndex ?? 0]; // Banco ativo com base no índice

  return (
    <div className="relative">
      {/* Dropdown para telas móveis */}
      <div
        className="sm:hidden w-full p-4 bg-white border border-gray-300 rounded-md cursor-pointer"
        onClick={handleDropdownClick}
      >
        <div className="flex items-center space-x-4">
          {activeBank?.src && (
            <img
              src={activeBank.src}
              alt={activeBank.alt}
              className="w-8 h-8 mr-4" // Imagem maior no mobile
            />
          )}
          <span className="text-lg font-medium">{activeBank?.alt}</span>{" "}
          {/* Aumento do tamanho da fonte */}
        </div>

        {isDropdownOpen && (
          <div className="absolute mt-4 w-full bg-white shadow-lg rounded-lg z-10 max-h-96 overflow-auto">
            {banks.map((bank) => (
              <div
                key={bank.value}
                className="flex items-center p-4 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelectChange(bank.value)}
              >
                <img src={bank.src} alt={bank.alt} className="w-10 h-10 mr-4" />{" "}
                {/* Imagem maior */}
                <span className="text-lg">{bank.alt}</span>{" "}
                {/* Aumento do tamanho da fonte */}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Ícones de bancos para telas grandes (desktop) */}
      <div className="hidden sm:flex sm:flex-wrap justify-start gap-4">
        {banks.map((bank, index) => (
          <div
            key={index}
            className={`w-36 h-36 relative flex flex-col items-center justify-center p-3 rounded-lg transition-all cursor-pointer shadow-md ${activeIndex === index
              ? "bg-blue-100 border-2 border-blue-500 scale-105"
              : "hover:bg-gray-100"
              }`}
            onClick={() => handleIconClick(index, bank.value)}
          >
            <img
              src={bank.src}
              alt={bank.alt}
              className={`w-12 h-12 sm:w-14 sm:h-14 md:w-20 md:h-20 transition-transform ${activeIndex === index ? "scale-110" : "hover:scale-105"
                }`}
            />
            <div className="flex flex-col text-center">
              {/* Nome do banco */}
              <p
                className={`text-sm font-semibold ${activeIndex === index ? "text-blue-500" : "text-gray-400"}`}
              >
                {bank.alt}
              </p>
              <div>
                <p className="text-sm font-medium text-lime-500 leading-none">Ativo</  p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
