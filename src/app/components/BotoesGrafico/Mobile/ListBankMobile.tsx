// IconBankMobile Component
import { useEffect, useMemo, useState } from "react";
import { checkErrorbank } from "../../../shared/service/checkErrorbankService";
import ItauV2 from "../../../../../public/image/Itau_V2.svg";
import ItauFrancesa from "../../../../../public/image/Itau_Francesa.svg";
import SicrediV2 from "../../../../../public/image/Sicredi_V2.svg";
import SicrediV3 from "../../../../../public/image/Sicredi_V3.svg";
import BancoBrasil from "../../../../../public/image/Banco_do_Brasil.svg";
import Inter from "../../../../../public/image/Inter.svg";
import SicoobV2 from "../../../../../public/image/Sicoob_V2.svg";
import Santander from "../../../../../public/image/Santander_V2.svg";
import Caixa from "../../../../../public/image/Caixa.svg";
import Banrisul from "../../../../../public/image/Banrisul.svg";

interface PropsInterface {
  onChange: (value: string) => void;
}

export const IconBankMobile = ({ onChange }: PropsInterface) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [bankStatuses, setBankStatuses] = useState<{ [key: string]: string }>(
    {}
  );

  const banks = useMemo(
    () => [
      { src: ItauV2, alt: "Itaú", value: "ITAU_V2" },
      { src: ItauFrancesa, alt: "Itaú Francesa", value: "ITAU_FRANCESA" },
      { src: SicrediV2, alt: "Sicredi", value: "SICREDI_V2" },
      { src: SicrediV3, alt: "Sicredi V3", value: "SICREDI_V3" },
      { src: BancoBrasil, alt: "Banco do Brasil", value: "BANCODOBRASIL_V2" },
      { src: Inter, alt: "Banco Inter", value: "INTER" },
      { src: SicoobV2, alt: "Sicoob", value: "SICOOB_V2" },
      { src: Santander, alt: "Santander", value: "SANTANDER" },
      { src: Caixa, alt: "Caixa Econômica", value: "CAIXA" },
      { src: Banrisul, alt: "Banrisul", value: "BANRISUL" },
    ],
    []
  );

  const checkAllBanksStatus = async () => {
    const statusUpdates = await Promise.all(
      banks.map(async (bank) => {
        try {
          const status = await checkErrorbank(bank.value);
          return { [bank.value]: status };
        } catch (err) {
          console.error(
            `Erro ao verificar status do banco ${bank.value}:`,
            err
          );
          return { [bank.value]: "Erro" };
        }
      })
    );
    setBankStatuses(Object.assign({}, ...statusUpdates));
  };

  useEffect(() => {
    // Só executa se nenhum banco tiver sido selecionado (activeIndex === null)
    if (activeIndex === null) {
      const defaultIndex = banks.findIndex((bank) => bank.value === "ITAU_V2");

      if (defaultIndex !== -1) {
        setActiveIndex(defaultIndex);
        onChange(banks[defaultIndex].value);
      }
    }

    checkAllBanksStatus(); // Atualiza o status de todos os bancos

    const intervalId = setInterval(() => {
      checkAllBanksStatus();
    }, 300000); // Atualiza a cada 5 minutos

    return () => clearInterval(intervalId); // Limpa o intervalo ao desmontar o componente
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [banks, activeIndex, onChange]);

  const handleIconClick = (index: number, bank: string) => {
    setActiveIndex(index); // Atualiza o índice do banco ativo
    onChange(bank); // Chama a função onChange com o valor do banco
  };
  return (
    <div className="space-y-2 max-h-[500px] overflow-y-auto">
      {banks.map((bank, index) => (
        <div
          key={index}
          className={`relative flex items-center space-x-4 p-4 cursor-pointer ${
            activeIndex === index
              ? "bg-blue-100 border-2 border-blue-500"
              : "hover:bg-gray-100"
          }`}
          onClick={() => handleIconClick(index, bank.value)}
        >
          <img
            src={bank.src}
            alt={bank.alt}
            className="w-10 h-10 rounded-full"
          />
          <span
            className={`text-lg font-medium ${
              activeIndex === index ? "text-blue-500" : "text-white"
            }`}
          >
            {bank.alt}
          </span>
          <span
            className={`text-xs ml-auto ${
              bankStatuses[bank.value] === "Online"
                ? "text-green-500"
                : "text-red-500"
            }`}
          >
            {bankStatuses[bank.value] || "Verificando..."}
          </span>
        </div>
      ))}
    </div>
  );
};
