import React from "react";
import { Record } from "../../shared/interfaces/Record-Interface";

interface IpropsErro {
  data: Record[]; // Recebendo registros diretamente via props
  bank: string;
}

export const Tabela: React.FC<IpropsErro> = ({ data, bank }) => {
  console.log(bank);
  return (
    <div className="md:pl-[12em]">
      <table className="min-w-full bg-white border border-gray-200 shadow-md rounded-lg overflow-hidden">
        <thead>
          <tr className="dark:bg-gray-900 text-white font-bold">
            <th
              colSpan={4}
              className="px-6 py-3 text-center text-sm font-semibold uppercase tracking-wider"
            >
              Detalhamento de Erros: {bank}
            </th>
          </tr>
          <tr className="bg-indigo-950 text-white">
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              Hora da Consulta
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              Código da Resposta
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              Detalhamento
            </th>
            <th className="px-6 py-3 text-left text-sm font-semibold uppercase tracking-wider">
              Status
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-700">
          {data.length > 0 ? (
            data.map((registro) => (
              <tr
                key={registro.id}
                className="hover:bg-gray-700 transition-colors"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-gray-300">
                  {registro.HoraDaConsulta}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-black bg-gray-100 font-bold">
                  {registro.CodigoDaResposta}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-gray-100">
                  {registro.Detalhamento}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700 bg-gray-100">
                  {registro.StatusDaResposta}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td
                colSpan={4}
                className="px-6 py-4 text-center text-sm text-gray-500 italic"
              >
                Nenhum erro disponível no momento.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Tabela;
