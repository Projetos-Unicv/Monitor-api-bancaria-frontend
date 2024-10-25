import { Footer } from "../../components/Footer/footer";
import { NavBar } from "../../components/NavBar/Navbar";
import { IconBank } from "../../components/ListBank/ListBank";
import { TesteGrafico } from "../../components/Dashboard/Dashboard";
import { Options } from "../../components/OptionsType/OptionsType";
import BasicSelect from "../../components/OptionsDate/OptionsDate";
import { useState } from "react";

const Conteudo = () => {
  const [tempo, setTempo] = useState(""); // Corrigido para 'setTempo'
  const [tipo, setTipo] = useState("");
  const [bank, setbank] = useState("");
  const optionsType = [
    { value: "registro", label: "Registro" },
    { value: "consulta", label: "Consulta" },
  ];

  return (
    <main className="bg-azul-medio shadow dark:bg-gray-000 flex-col p-10">
      <div>
        <Options options={optionsType} onChange={setTipo} />
        <BasicSelect onChange={setTempo} />{" "}
        {/* Passando setTempo corretamente */}
      </div>
      <div className="bg-azul-medio flex items-center justify-center">
        <IconBank onChange={setbank} />
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
