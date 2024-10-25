import { Footer } from "../../components/Footer/footer";
import { NavBar } from "../../components/NavBar/Navbar";
import { IconBank } from "../../components/ListBank/ListBank";
import { TesteGrafico } from "../../components/Dashboard/Dashboard";
import { Options } from "../../components/OptionsType/OptionsType";
import BasicSelect from "../../components/OptionsDate/OptionsDate";

const Conteudo = () => {
  const optionsType = [
    { value: "registro", label: "Registro" },
    { value: "consulta", label: "Consulta" },
  ];
  return (
    <main className="bg-azul-medio shadow dark:bg-gray-000 flex-col p-10">
      <div>
        <Options options={optionsType} />
        <BasicSelect />
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

export default Home;
