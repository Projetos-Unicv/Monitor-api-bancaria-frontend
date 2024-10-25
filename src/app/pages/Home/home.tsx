import { Footer } from "../../components/Footer/footer";
import { NavBar } from "../../components/NavBar/Navbar";
import { IconBank } from "../../components/ListBank/ListBank";
import { TesteGrafico } from "../../components/Dashboard/Dashboard";
import { Options } from "../../components/OptionsType/OptionsType";
import BasicSelect from "../../components/OptionsDate/OptionsDate";
import { useEffect, useState } from "react";
import { Record } from "../../shared/interfaces/Record-Interface";
import api from "../../api/api";

const Conteudo = () => {
  const [Records, setRecords] = useState<Record[]>([]); // Inicializado como array vazio
  const [tempo, setTempo] = useState("");
  const [tipo, setTipo] = useState("");
  const [bank, setBank] = useState(""); // Corrigido para setBank
  const optionsType = [
    { value: "registro", label: "Registro" },
    { value: "consulta", label: "Consulta" },
  ];

  const GetRecord = async (
    type: string,
    bank: string,
    filter: string
  ): Promise<void> => {
    console.log(type);
    console.log(bank);
    console.log(filter);
    try {
      const response = await api.get(
        `${type}/BANCODOBRASIL_V2?filter=${tempo}`
      );
      setRecords(response.data); // Supondo que a resposta contém os dados em 'data'
    } catch (err) {
      console.error("Ops! houve um erro: " + err);
    }
  };

  useEffect(() => {
    if (tempo && tipo && bank) {
      // Condição para evitar chamadas desnecessárias
      GetRecord(tipo, bank, tempo);
    }
  }, [tempo, tipo, bank]);

  // Se você quiser observar mudanças em Records
  useEffect(() => {
    console.log(Records);
  }, [Records]);

  return (
    <main className="bg-azul-medio shadow dark:bg-gray-000 flex-col p-10">
      <div>
        <Options options={optionsType} onChange={setTipo} />
        <BasicSelect onChange={setTempo} />{" "}
        {/* Passando setTempo corretamente */}
      </div>
      <div className="bg-azul-medio flex items-center justify-center">
        <IconBank onChange={setBank} />
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
