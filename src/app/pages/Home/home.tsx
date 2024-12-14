import { Footer } from "../../components/Footer/footer";
import { NavBar } from "../../components/NavBar/Navbar";
import { IconBank } from "../../components/ListBank/ListBank";
import { Grafico } from "../../components/Dashboard/Dashboard";
import { Options } from "../../components/BotoesGrafico/Desktop/ButtonType";
import BasicSelect from "../../components/BotoesGrafico/Desktop/ButtonDate";
// import { FindStatusByLast } from "../../shared/service/FindStatus";
import { useEffect, useState } from "react";
import { Record } from "../../shared/interfaces/Record-Interface";
import api from "../../api/api";
import Tabela from "../../components/TableError/Table";
import Advertising from "../../components/Advertising/Advertising";

const Main = () => {
  const [Records, setRecords] = useState<Record[]>([]);
  const [recordsErrors, setRecordErrors] = useState<Record[]>([]);
  const [tempo, setTempo] = useState("DAY");
  const [tipo, setTipo] = useState("registro");
  const [bank, setBank] = useState("ITAU_V2");
  // const [status, setStatus] = useState("");
  const optionsType = [
    { value: "registro", label: "Registro" },
    { value: "consulta", label: "Consulta" },
  ];

  const GetRecord = async (type: string, bank: string, tempo: string) => {
    try {
      const response = await api.get(`${type}/${bank}?filter=${tempo}`);
      setRecords(response.data);
    } catch (err) {
      console.error("Ops! houve um erro: " + err);
    }
  };

  const GetErroRecord = async (type: string, bank: string, tempo: string) => {
    try {
      const response = await api.get(
        `${type}/${bank}?filter=${tempo}&status=${"inativo"}`
      );
      setRecordErrors(response.data);
    } catch (err) {
      console.error("Ops! houve um erro: " + err);
    }
  };

  useEffect(() => {
    if (tempo && tipo && bank) {
      GetRecord(tipo, bank, tempo);
      GetErroRecord(tipo, bank, tempo);
    }
  }, [tempo, tipo, bank]);

  // useEffect(() => {
  //   const fetchStatus = async () => {
  //     if (Records.length > 0) {
  //       try {
  //         const status = await FindStatusByLast(Records);
  //         setStatus(status);
  //       } catch (error) {
  //         console.error("Erro ao buscar status:", error);
  //       }
  //     }
  //   };

  //   fetchStatus();
  // }, [Records]);

  return (
    <main className="min-h-screen bg-[#1b213b] flex flex-col md:p-2">
      {/* Container do Banco */}
      <div className="bg-[#262d47] p-2 mb-3">
        <div className="flex justify-center">
          <IconBank onChange={setBank} />
        </div>
      </div>

      {/* Conteúdo Principal */}
      <div className="bg-[#262d47] flex flex-col w-full p-4 flex-1">
        {/* Filtros e Status */}
        <div className="flex flex-col md:flex-row pl-[1em] md:pl-[4em] justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-row justify-around w-full md:w-auto">
            <Options options={optionsType} onChange={setTipo} />
          </div>
          <div className="pr-36">
            <p className="text-xl font-semibold text-white tracking-wide shadow-md">
              {bank}
            </p>
          </div>
          <div className="w-full md:w-auto pr-3">
            <BasicSelect onChange={setTempo} />
          </div>
        </div>

        {/* Gráfico */}
        <div className="flex-1 mt-1">
          <div className="h-[50%] w-full ">
            <Grafico data={Records} />
          </div>
        </div>
      </div>
      <div className="bg-[#262d47] p-4 mt-4 rounded-lg shadow-lg">
        <Advertising />
      </div>
      {/* Tabela */}
      <div className="bg-[#262d47] p-4 mt-4 rounded-lg shadow-lg">
        <Tabela data={recordsErrors} bank={bank} />
      </div>
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
