// import React, { PureComponent } from "react";
import { Footer } from "../../components/Footer/footer";
import { NavBar } from "../../components/NavBar/Navbar";
import { IconBank } from "../../components/ListBank/ListBank";
import { TesteGrafico } from "../../components/Dashboard/Dashboard";
import { Options } from "../../components/Options/Options";
const Conteudo = () => {
  const optionsType = [
    { value: "registro", label: "Registro" },
    { value: "consulta", label: "Consulta" },
  ];
  return (
    <main className="bg-azul-medio shadow dark:bg-gray-000 flex-colm p-10">
      <div>
        <Options options={optionsType} />
      </div>
      <div className="bg-azul-medio flex items-center justify-center">
        <IconBank />
        <TesteGrafico />
      </div>
    </main>
  );
};

export const Home = () => {
  return (
    <div className="bg-azul-escure">
      <NavBar />
      <Conteudo />
      <Footer />
    </div>
  );
};
