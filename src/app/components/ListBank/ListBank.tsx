import { useEffect,useState } from "react";

import { FindStatusByLast } from "../../shared/service/FindStatus";
import { Record } from "../../shared/interfaces/Record-Interface";

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

  const [Records] = useState<Record[]>([]); // Inicializado como array vazio
  const [status, setStatus] = useState("");

  // Se você quiser observar mudanças em Records
  useEffect(() => {
    const fetchStatus = async () => {
      if (Records.length > 0) {
        // Verifica se há registros
        try {
          const status = await FindStatusByLast(Records); // Usando await corretamente
          setStatus(status);
        } catch (error) {
          console.error("Erro ao buscar status:", error);
        }
      }
    };

    fetchStatus(); // Chama a função assíncrona
  }, [Records]);

  return (
    <div className="flex flex-col gap-1 p-2 w-30">
      {banks.map((bank, index) => (
        <div
          key={index}
          className={` rounded-sm transition-all flex justify-center items-center ${
            activeIndex === index ? "scale-150" : "hover:opacity-50"
          }`}
          onClick={() => handleIconClick(index, bank.value)}
        >
          <img src={bank.src} alt={bank.alt} height={90} width={90}/>
          <div className="">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
              <p> {status}</p>
              <script>
              </script>
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
