import React, { useState } from "react";
import { api } from "../hooks/api/axios";

// interface Props {
//   title: string;
// }

const Home: React.FC = () => {
  const [array, setArray] = useState([]);

  async function teet() {
    await api
      .get("/boletos/registro/BANCODOBRASIL")
      .then((result) => {
        console.log(result.data);
        setArray(result.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
  return (
    <div>
      <h1>Monitor Bancario Boletos</h1>
      <button onClick={teet}>clique Aqui</button>
      {array.map((registro) => {
        console.log(registro);
        return <p>{registro.dateCreated}</p>;
      })}
    </div>
  );
};

export default Home;
