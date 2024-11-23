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
  const yTicks = ["Normal", "Lenta", "MuitoLenta", "Timeout", "Erro"];

  return (
    <ResponsiveContainer
      width="100%"
      height="100%"
      aspect={window.innerWidth < 768 ? 1 : 2} // Proporção ajustada para mobile
    >
      <LineChart
        data={data}
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
          type="category"
          dataKey="StatusDaResposta"
          ticks={yTicks} // Mostra os ticks categóricos
          tickFormatter={(value) => value}
          style={{ fontSize: "0.8rem" }} // Texto menor
        />
        <Tooltip
          contentStyle={{
            fontSize: "0.8rem",
            borderRadius: "10px",
          }}
        />
        <Line
          type="monotone"
          dataKey="StatusDaResposta"
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
