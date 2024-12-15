import { Footer } from "../../components/Footer/footer";
import { NavBar } from "../../components/NavBar/Navbar";
import { IconBank } from "../../components/ListBank/ListBank";
import { Grafico } from "../../components/Dashboard/Dashboard";
import { Options } from "../../components/BotoesGrafico/Desktop/ButtonType";
import BasicSelect from "../../components/BotoesGrafico/Desktop/ButtonDate";
import { useEffect, useState } from "react";
import { Record } from "../../shared/interfaces/Record-Interface";
import api from "../../api/api";
import Tabela from "../../components/TableError/Table";
import Advertising from "../../components/Advertising/Advertising";
import { GraficoMobile } from "../../components/Dashboard/DashboardMobile";

const Main = ({
  bank,
  setBank,
}: {
  bank: string;
  setBank: (value: string) => void;
}) => {
  const [Records, setRecords] = useState<Record[]>([]);
  const [recordsErrors, setRecordErrors] = useState<Record[]>([]);
  const [tempo, setTempo] = useState("DAY");
  const [tipo, setTipo] = useState("registro");
  const [loading, setLoading] = useState(false); // Estado de carregamento

  const optionsType = [
    { value: "registro", label: "Registro" },
    { value: "consulta", label: "Consulta" },
  ];

  const GetRecord = async (type: string, bank: string, tempo: string) => {
    setLoading(true);
    try {
      const response = await api.get(`${type}/${bank}?filter=${tempo}`);
      setRecords(response.data);
    } catch (err) {
      console.error("Ops! houve um erro: " + err);
    } finally {
      setLoading(false);
    }
  };

  const GetErroRecord = async (type: string, bank: string, tempo: string) => {
    setLoading(true);
    try {
      const response = await api.get(
        `${type}/${bank}?filter=${tempo}&status=${"inativo"}`
      );
      setRecordErrors(response.data);
    } catch (err) {
      console.error("Ops! houve um erro: " + err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (tempo && tipo && bank) {
      GetRecord(tipo, bank, tempo);
      GetErroRecord(tipo, bank, tempo);
    }
  }, [tempo, tipo, bank]);

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
        <span className="text-white self-center text-3xl mb-4 font-medium whitespace-nowrap block md:text-5xl">
          Monitor Bancário
        </span>
        <p className="text-xl font-semibold mb-4 text-white tracking-wide shadow-md text-center block md:hidden">
          {bank}
        </p>
        {/* Filtros e Status */}
        {/* Filtros Desktop */}
        <div className="hidden w-full md:flex flex-col md:flex-row pl-[4em] justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-row justify-around ">
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

        {/* Filtros Mobile */}
        <div className="block md:hidden flex flex-col pl-[1em] justify-between items-center space-y-4">
          <div className="flex flex-row justify-around w-full">
            <Options options={optionsType} onChange={setTipo} />
          </div>

          <div className="w-full pr-3">
            <BasicSelect onChange={setTempo} />
          </div>
        </div>

        {/* Gráfico Desktop */}
        <div className="hidden md:block flex-1 mt-1 ">
          <div className="h-[100%] w-full">
            <Grafico data={Records} />
          </div>
        </div>
        {/* mobile */}
        <div className="block md:hidden flex-1 mt-1 overflow-x-scroll">
          <div className="h-full w-[1200px]">
            <GraficoMobile data={Records} />
          </div>
        </div>
      </div>
      {/* Publicidade */}
      <div className="bg-[#262d47] p-4 mt-4 rounded-lg shadow-lg">
        <Advertising />
      </div>
      {/* Tabela */}
      <div className="bg-[#262d47] p-4 mt-4 rounded-lg shadow-lg">
        <Tabela data={recordsErrors} bank={bank} />
      </div>
      {/* Indicador de Carregamento */}
      {loading && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="text-white">Carregando...</div>
        </div>
      )}
    </main>
  );
};

export const Home = () => {
  const [bank, setBank] = useState("ITAU_V2"); // Moveu o estado para o componente Home

  return (
    <>
      <NavBar onChange={setBank} /> {/* Agora o NavBar tem acesso ao setBank */}
      <Main bank={bank} setBank={setBank} />
      <Footer />
    </>
  );
};

export default Home;
