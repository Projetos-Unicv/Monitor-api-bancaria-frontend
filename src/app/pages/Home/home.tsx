// import React, { PureComponent } from "react";
import { Footer } from "../../components/Footer/footer";
import { NavBar } from "../../components/NavBar/Navbar";
import { IconBank } from "../../components/ListBank/ListBank";
import { TesteGrafico } from "../../components/dashboard/Dashboard";

const Conteudo = () => {
  return (
    <main className="bg-black shadow dark:bg-gray-000 flex m-4">
      <div className="flex-initial w-60">
        <IconBank />
      </div>
      <div>
        <h1 className="bg-white">
          Aqui deve ficar os filtro do tipo de consulta, dias, e se está ativo
          conforme está informado no prototipo figma
        </h1>
      </div>
      <div className="bg-white">
        <TesteGrafico />
      </div>
    </main>
  );
};

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Conteudo />
      <Footer />
    </div>
  );
};
