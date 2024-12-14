import { useState, useEffect, useMemo } from "react";
import { checkErrorbank } from "../../shared/service/checkErrorbankService";

interface PropsInterface {
  onChange: (value: string) => void;
}

export const IconBank = ({ onChange }: PropsInterface) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [bankStatuses, setBankStatuses] = useState<{ [key: string]: string }>(
    {}
  );

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

  // Função para verificar o status de todos os bancos
  const checkAllBanksStatus = async () => {
    const statusUpdates: { [key: string]: string } = {};

    // Verificando o status de cada banco
    for (const bank of banks) {
      const status = await checkErrorbank(bank.value);
      statusUpdates[bank.value] = status;
    }

    setBankStatuses(statusUpdates); // Atualiza os status dos bancos
    console.log(statusUpdates); // Pode remover esse log se não for necessário
  };

  // Ao iniciar o componente, definimos o banco padrão como "ITAU_V2" e verificamos o status dos bancos
  useEffect(() => {
    const defaultIndex = banks.findIndex((bank) => bank.value === "ITAU_V2");
    setActiveIndex(defaultIndex);
    onChange(banks[defaultIndex].value);

    // Verificar o status de todos os bancos assim que o componente for montado
    checkAllBanksStatus();

    // Configurar a atualização a cada 5 minutos (300000ms)
    const intervalId = setInterval(() => {
      checkAllBanksStatus(); // Verifica o status de todos os bancos a cada 5 minutos
    }, 300000);

    // Limpar o intervalo quando o componente for desmontado
    return () => {
      clearInterval(intervalId);
    };
  }, [banks, onChange]);

  // Lida com a abertura e fechamento do dropdown
  const handleDropdownClick = () => {
    setIsDropdownOpen(!isDropdownOpen); // Alterna o estado do dropdown
  };

  // Atualiza o banco ativo e executa a busca do status
  const handleIconClick = (index: number, bank: string) => {
    setActiveIndex(index); // Atualiza o índice ativo
    onChange(bank); // Chama o onChange com o novo banco
    checkAllBanksStatus(); // Verifica o status após a mudança do banco
  };

  // Atualiza o banco ativo e executa a busca do status ao selecionar um banco
  const handleSelectChange = (bank: string) => {
    setIsDropdownOpen(false); // Fecha o dropdown após selecionar
    const index = banks.findIndex((b) => b.value === bank);
    setActiveIndex(index); // Atualiza o índice ativo
    onChange(bank); // Chama o onChange com o novo banco
    checkAllBanksStatus(); // Verifica o status após a mudança do banco
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
          <span className="text-lg font-medium">{activeBank?.alt}</span>
        </div>

        {isDropdownOpen && (
          <div className="absolute mt-4 w-full bg-white shadow-lg rounded-lg z-10 max-h-96 overflow-auto">
            {banks.map((bank) => (
              <div
                key={bank.value}
                className="flex items-center p-4 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelectChange(bank.value)}
              >
                <img src={bank.src} alt={bank.alt} className="w-10 h-10 mr-4" />
                <span className="text-lg">{bank.alt}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Ícones de bancos para telas grandes (desktop) */}
      <div className="hidden sm:flex sm:flex-wrap justify-start gap-8 p-1">
        {banks.map((bank, index) => (
          <div
            key={index}
            className={`relative flex flex-col items-center justify-center w-24 h-26 p-1 rounded-lg transition-all cursor-pointer shadow-md ${
              activeIndex === index
                ? "bg-blue-100 border-2 border-blue-500 scale-105"
                : "hover:bg-gray-100"
            }`}
            onClick={() => handleIconClick(index, bank.value)}
          >
            <img
              src={bank.src}
              alt={bank.alt}
              className={`w-14 h-14 transition-transform ${
                activeIndex === index ? "scale-110" : "hover:scale-105"
              }`}
            />
            <p
              className={`mt-2 text-[10px] sm:text-xs font-medium text-center truncate ${
                activeIndex === index ? "text-blue-500" : "text-gray-400"
              }`}
            >
              {bank.alt}
            </p>
            {/* Exibe o status do banco (ativo/inativo) */}
            <span
              className={`text-xs mt-1 ${
                bankStatuses[bank.value] === "Online"
                  ? "text-green-500"
                  : "text-red-500"
              }`}
            >
              {bankStatuses[bank.value]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
