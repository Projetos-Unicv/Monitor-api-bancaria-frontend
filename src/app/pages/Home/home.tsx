import { Footer } from "../../components/Footer/footer";
import { NavBar } from "../../components/NavBar/Navbar";
import { IconBank } from "../../components/ListBank/ListBank";
import { TesteGrafico } from "../../components/Dashboard/Dashboard";
import { Options } from "../../components/OptionsType/OptionsType";
import BasicSelect from "../../components/OptionsDate/OptionsDate";
import { FindStatusByLast } from "../../shared/service/FindStatus";
import { useEffect, useState } from "react";
import { Record } from "../../shared/interfaces/Record-Interface";
import api from "../../api/api";

const Conteudo = () => {
  const [Records, setRecords] = useState<Record[]>([]); // Inicializado como array vazio
  const [tempo, setTempo] = useState("");
  const [tipo, setTipo] = useState("");
  const [bank, setBank] = useState(""); // Corrigido para setBank
  const [status, setStatus] = useState("");
  const optionsType = [
    { value: "registro", label: "Registro" },
    { value: "consulta", label: "Consulta" },
  ];

  const GetRecord = async (
    type: string,
    bank: string,
    filter: string
  ): Promise<void> => {
    try {
      console.log(type);
      console.log(bank);
      console.log(filter);
      const response = await api.get(`${type}/${bank}?filter=${tempo}`);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tempo, tipo, bank]);

  // Se você quiser observar mudanças em Records
  useEffect(() => {
    const fetchStatus = async () => {
      if (Records.length > 0) {
        // Verifica se há registros
        try {
          const status = await FindStatusByLast(Records); // Usando await corretamente
          setStatus(status);
        } catch (error) {
          console.error("Erro ao buscar status:", error);
        }
      }
    };

    fetchStatus(); // Chama a função assíncrona
  }, [Records]);

  return (
    <main className="bg-azul-medio flex flex-row ">
      <div className="bg-azul-medio flex items-center justify-center">
        <IconBank onChange={setBank} />
      </div>
      <div className="flex flex-col">
        <div className="flex flex-row">
          <Options options={optionsType} onChange={setTipo} />
          <BasicSelect onChange={setTempo} />{" "}
        </div>
        <TesteGrafico data={Records} />
      </div>
      {/* Passando setTempo corretamente */}

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
