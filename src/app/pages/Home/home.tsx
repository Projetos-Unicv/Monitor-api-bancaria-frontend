import { Footer } from "../../components/Footer/footer";
import { NavBar } from "../../components/NavBar/Navbar";
import { IconBank } from "../../components/ListBank/ListBank";
import { Grafico } from "../../components/Dashboard/Dashboard";
import { Options } from "../../components/BotoesGrafico/ButtonType";
import BasicSelect from "../../components/BotoesGrafico/ButtonDate";
import { FindStatusByLast } from "../../shared/service/FindStatus";
import { useEffect, useState } from "react";
import { Record } from "../../shared/interfaces/Record-Interface";
import api from "../../api/api";
import Tabela from "../../components/TableError/Table";

const Main = () => {
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
    <main className="min-h-screen bg-azul-medio flex flex-col p-10">
      <div className="flex flex-row justify-center">
        <div className="bg-azul-medio flex items-center justify-center">
          <IconBank onChange={setBank} />
        </div>
        <div className="flex flex-col w-full">
          <div className="flex flex-row pl-[4em] justify-between items-center">
            <div className="flex flex-row justify-around">
              <Options options={optionsType} onChange={setTipo} />
            </div>
            <div className="mx-auto">
              <p>teste</p>
            </div>
            <div>
            <BasicSelect onChange={setTempo} />{" "}
            </div>
          </div>
          <Grafico data={Records} />
        </div>
      </div>
      <Tabela />
    </main>
  );
};

export const Home = () => {
  return (
    <>
      <NavBar />
      <Main />
      <Footer />
    </>
  );
};

export default Home;
