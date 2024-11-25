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
      <div className="overflow-hidden bg-white border border-gray-200 shadow-md rounded-lg">
        <div className="bg-indigo-950 text-white text-center font-bold uppercase py-3">
          Detalhamento de Erros: {bank}
        </div>
        <table className="hidden md:table min-w-full">
          <thead>
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
                  <td className="px-6 py-4 text-sm text-gray-700 bg-gray-300">
                    {registro.HoraDaConsulta}
                  </td>
                  <td className="px-6 py-4 text-sm text-black bg-gray-100 font-bold">
                    {registro.CodigoDaResposta}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 bg-gray-100">
                    {registro.Detalhamento}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700 bg-gray-100">
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
        {/* Mobile layout */}
        <div className="md:hidden divide-y divide-gray-300">
          {data.length > 0 ? (
            data.map((registro) => (
              <div
                key={registro.id}
                className="p-4 bg-gray-50 rounded-lg mb-2 shadow-md"
              >
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-gray-700">
                    Hora da Consulta:
                  </span>
                  <span className="text-gray-500">
                    {registro.HoraDaConsulta}
                  </span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="font-bold text-gray-700">
                    Código da Resposta:
                  </span>
                  <span className="text-black font-bold">
                    {registro.CodigoDaResposta}
                  </span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="font-bold text-gray-700">Detalhamento:</span>
                  <span className="text-gray-500">{registro.Detalhamento}</span>
                </div>
                <div className="flex justify-between text-sm mt-2">
                  <span className="font-bold text-gray-700">Status:</span>
                  <span className="text-gray-500">{registro.StatusDaResposta}</span>
                </div>
              </div>
            ))
          ) : (
            <div className="p-4 text-center text-sm text-gray-500 italic">
              Nenhum erro disponível no momento.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Tabela;
