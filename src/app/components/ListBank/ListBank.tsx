import { useState } from "react";

interface PropsInterface {
  onChange: (value: string) => void; // Define a prop para passar a função de mudança
}

export const IconBank = ({ onChange }: PropsInterface) => {
  // Estado para controlar o ícone ativo
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Definindo o tipo aqui

  // Função para lidar com a ativação do ícone
  const handleIconClick = (index: number, bank: string) => {
    setActiveIndex(index);
    onChange(bank);
    console.log(bank);
  };

  // Array de imagens dos bancos
  const banks = [
    { src: "../../../image/itau.svg", alt: "Itaú", value: "ITAU_V2" },
    {
      src: "../../../image/nubank-3.svg",
      alt: "Nubank",
      value: "ITAU_FRANCESA",
    },
    {
      src: "../../../image/sicredi-160.svg",
      alt: "Sicredi",
      value: "SICREDI_V2",
    },
    {
      src: "../../../image/banco-do-brasil-3.svg",
      alt: "Banco do Brasil",
      value: "BANCODOBRASIL_V2",
    },
    {
      src: "../../../image/banco-inter-logo.svg",
      alt: "Banco Inter",
      value: "INTER",
    },
    {
      src: "../../../image/sicoob-vector-logo.svg",
      alt: "Sicoob",
      value: "SICOOB_V2",
    },
    {
      src: "../../../image/santander1.svg",
      alt: "Santander",
      value: "SANTANDER",
    },
    {
      src: "../../../image/caixa-economica-federal-1.svg",
      alt: "Caixa Econômica Federal",
      value: "CAIXA",
    },
    {
      src: "../../../image/banrisul-logo.svg",
      alt: "Banrisul",
      value: "BANRISUL",
    },
  ];

  return (
    <div className="flex flex-col gap-4 p-10 w-30">
      {banks.map((bank, index) => (
        <div
          key={index}
          className={`w-12 h-12 rounded-sm transition-all flex justify-center items-center ${
            activeIndex === index ? "scale-150" : "hover:opacity-50"
          }`}
          onClick={() => handleIconClick(index, bank.value)}
        >
          <img src={bank.src} alt={bank.alt} />
          <div className="">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
