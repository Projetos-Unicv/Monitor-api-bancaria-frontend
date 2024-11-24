import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { Record } from "../../shared/interfaces/Record-Interface";

interface Iprops {
  data: Record[];
}

export const Grafico = ({ data }: Iprops) => {
  // Mapeamento para transformar os status em níveis numéricos
  const statusLevels: { [key: string]: number } = {
    Normal: 1,
    Lenta: 2,
    MuitoLenta: 3,
    Timeout: 4,
    Erro: 5,
  };

  // Transforma os dados para incluir o nível numérico
  const processedData = data.map((item) => ({
    ...item,
    StatusLevel: statusLevels[item.StatusDaResposta], // Adiciona o nível numérico
  }));

  // Ordem dos ticks no eixo Y
  const yTicks = [1, 2, 3, 4, 5];

  // Mapeia os valores numéricos de volta para os rótulos de texto
  const levelToStatus: globalThis.Record<number, string> = Object.entries(
    statusLevels
  ).reduce(
    (acc, [status, level]) => ({ ...acc, [level]: status }),
    {} as globalThis.Record<number, string>
  );

  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      aspect={window.innerWidth < 768 ? 1 : 2} // Proporção ajustada para mobile
    >
      <LineChart
        data={processedData}
        margin={{
          top: 20,
          right: 30,
          left: 10,
          bottom: 20,
        }}
      >
        <CartesianGrid stroke="#ccc" />
        <XAxis
          dataKey="HoraDaConsulta"
          angle={window.innerWidth < 768 ? 0 : 20} // Ângulo adaptado para mobile
          tickFormatter={(HoraDaConsulta) => {
            return HoraDaConsulta.length > 10
              ? `${HoraDaConsulta.substring(0, 10)}...`
              : HoraDaConsulta;
          }}
          style={{ fontSize: "0.8rem" }} // Texto menor para mobile
        />
        <YAxis
          type="number" // Trata como escala numérica
          dataKey="StatusLevel" // Exibe os níveis numéricos
          ticks={yTicks} // Mostra os ticks numéricos
          tickFormatter={(value) => levelToStatus[value] || value} // Converte o nível numérico para o rótulo do status
          domain={[1, 5]} // Define os limites do eixo Y
          style={{ fontSize: "0.8rem" }} // Texto menor
        />
        <Tooltip
          contentStyle={{
            fontSize: "0.8rem",
            borderRadius: "10px",
          }}
          formatter={(value, name) => {
            if (name === "StatusLevel") {
              const level = value as number; // Garante que o TypeScript sabe que é um número
              return [levelToStatus[level] || value, "Status"];
            }
            return [value, name];
          }}
        />
        <Line
          type="monotone"
          dataKey="StatusLevel"
          stroke="#82ca9d"
          strokeWidth={2}
          dot={{ r: 4 }} // Pontos mais visíveis
          activeDot={{ r: 6 }} // Ponto ativo maior
        />
        <Line
          type="monotone"
          dataKey="TempoDeResposta"
          stroke="#8884d8"
          strokeWidth={2}
          dot={{ r: 4 }}
          activeDot={{ r: 6 }}
        />
      </LineChart>
    </ResponsiveContainer>
  );
};
