import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Record } from "../../shared/interfaces/Record-Interface";

interface Iprops {
  data: Record[];
}

export const Grafico = ({ data }: Iprops) => {
  // Define os valores fixos do eixo Y como dummy data
  const dummyData = [
    { responseStatus: "Normal", timeRequest: 0 },
    { responseStatus: "Lenta", timeRequest: 0 },
    { responseStatus: "MuitoLenta", timeRequest: 0 },
    { responseStatus: "Timeout", timeRequest: 0 },
    { responseStatus: "Erro", timeRequest: 0 },
  ];

  // Combine o dummyData com os dados reais
  const combinedData = [...dummyData, ...data];

  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={combinedData}>
        <Line dataKey="responseStatus" stroke="#8884d8" />
        <Line type="monotone" dataKey="timeRequest" stroke="#8884d8" />
        <CartesianGrid stroke="#ccc" />
        <XAxis
          dataKey="dateCreated"
          angle={20}
          tickFormatter={(dateCreated) => {
            return dateCreated.length > 10
              ? `${dateCreated.substring(0, 10)}...`
              : dateCreated;
          }}
        />
        <YAxis
          type="category"
          dataKey="responseStatus" // Use o campo categórico de status
          ticks={["Normal", "Lenta", "MuitoLenta", "Timeout", "Erro"]}
        />
        <Tooltip />
        <Legend />
      </LineChart>
    </ResponsiveContainer>
  );
};
