import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Record } from "../../shared/interfaces/Record-Interface";

interface Iprops {
  data: Record[];
}

export const TesteGrafico = ({ data }: Iprops) => {
  console.log(data);
  const yTicks = ["Normal", "Lenta", "MuitoLenta", "Timeout", "Erro"];
  return (
    // <ResponsiveContainer width="100%" height="100%">
    <LineChart width={1250} height={640} data={data}>
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
        type="category" // Eixo Y categórico
        dataKey="responseStatus" // A chave dos dados categóricos
        tickFormatter={(value) => {
          return value; // Formata os ticks do eixo Y como os valores de texto originais
        }}
      />
      <Tooltip />
    </LineChart>
    // </ResponsiveContainer>
  );
};
