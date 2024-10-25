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
    { src: "../../../public/itau.svg", alt: "Itaú", value: "ITAU_V2" },
    { src: "../../../public/nubank-3.svg", alt: "Nubank", value: "ITAU_V2" },
    {
      src: "../../../public/sicredi-160.svg",
      alt: "Sicredi",
      value: "ITAU_V2",
    },
    {
      src: "../../../public/banco-do-brasil-3.svg",
      alt: "Banco do Brasil",
      value: "ITAU_V2",
    },
    {
      src: "../../../public/banco-inter-logo.svg",
      alt: "Banco Inter",
      value: "ITAU_V2",
    },
    {
      src: "../../../public/sicoob-vector-logo.svg",
      alt: "Sicoob",
      value: "ITAU_V2",
    },
    {
      src: "../../../public/santander1.svg",
      alt: "Santander",
      value: "ITAU_V2",
    },
    {
      src: "../../../public/caixa-economica-federal-1.svg",
      alt: "Caixa Econômica Federal",
      value: "ITAU_V2",
    },
    {
      src: "../../../public/banrisul-logo.svg",
      alt: "Banrisul",
      value: "ITAU_V2",
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
        </div>
      ))}
    </div>
  );
};
