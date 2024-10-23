import { useState } from "react";

export const IconBank = () => {
  // Estado para controlar o ícone ativo
  const [activeIndex, setActiveIndex] = useState<number | null>(null); // Definindo o tipo aqui

  // Função para lidar com a ativação do ícone
  const handleIconClick = (index: number) => {
    setActiveIndex(index);
  };

  // Array de imagens dos bancos
  const banks = [
    { src: "../../../public/itau.svg", alt: "Itaú" },
    { src: "../../../public/nubank-3.svg", alt: "Nubank" },
    { src: "../../../public/sicredi-160.svg", alt: "Sicredi" },
    { src: "../../../public/banco-do-brasil-3.svg", alt: "Banco do Brasil" },
    { src: "../../../public/banco-inter-logo.svg", alt: "Banco Inter" },
    { src: "../../../public/sicoob-vector-logo.svg", alt: "Sicoob" },
    { src: "../../../public/santander1.svg", alt: "Santander" },
    {
      src: "../../../public/caixa-economica-federal-1.svg",
      alt: "Caixa Econômica Federal",
    },
    { src: "../../../public/banrisul-logo.svg", alt: "Banrisul" },
  ];

  return (
    <div className="flex flex-col gap-4 p-10 w-30">
      {banks.map((bank, index) => (
        <div
          key={index}
          className={`w-12 h-12 rounded-sm transition-all flex justify-center items-center ${
            activeIndex === index ? "scale-150" : "hover:opacity-50"
          }`}
          onClick={() => handleIconClick(index)}
        >
          <img src={bank.src} alt={bank.alt} />
        </div>
      ))}
    </div>
  );
};
