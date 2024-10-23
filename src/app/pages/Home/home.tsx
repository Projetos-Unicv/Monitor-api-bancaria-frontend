// import React, { PureComponent } from "react";
import { Footer } from "../../components/Footer/footer";
import { NavBar } from "../../components/NavBar/Navbar";
import { IconBank } from "../../components/ListBank/ListBank";
import { TesteGrafico } from "../../components/dashboard/Dashboard";

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

export const Home = () => {
  return (
    <div>
      <NavBar />
      <Conteudo />
      <Footer />
    </div>
  );
};
