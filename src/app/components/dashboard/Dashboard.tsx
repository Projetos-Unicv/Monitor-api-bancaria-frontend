// import React, { PureComponent } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";
import { Footer } from "../Footer/footer";
import { NavBar } from "../NavBar/Navbar";
import { IconBank } from "../ListBank/ListBank";
const data = [
  {
    name: "Page A",
    uv: 0,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Page B",
    uv: 100,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Page C",
    uv: 200,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Page D",
    uv: 100,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Page E",
    uv: 300,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Page F",
    uv: 0,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Page G",
    uv: 1000,
    pv: 4300,
    amt: 2100,
  },
];

const TesteGrafico = () => {
  return (
    <LineChart width={800} height={640} data={data}>
      <Line type="monotone" dataKey="uv" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

const Conteudo = () => {
  return (
    <main className="bg-white shadow dark:bg-gray-000 flex m-4">
      <div className="flex-initial w-60">
        <IconBank />
      </div>
      <div className="bg-white">
        <TesteGrafico />
      </div>
    </main>
  );
};

export const Dashboard = () => {
  return (
    <div>
      <NavBar />
      <Conteudo />
      <Footer />
    </div>
  );
};
