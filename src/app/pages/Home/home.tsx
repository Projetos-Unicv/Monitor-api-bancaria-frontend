import { Footer } from "../../components/Footer/footer";
import { NavBar } from "../../components/NavBar/Navbar";
import { IconBank } from "../../components/ListBank/ListBank";
import { Grafico } from "../../components/Dashboard/Dashboard";
import { Options } from "../../components/BotoesGrafico/Desktop/ButtonType";
import BasicSelect from "../../components/BotoesGrafico/Desktop/ButtonDate";
import { FindStatusByLast } from "../../shared/service/FindStatus";
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
  const [status, setStatus] = useState("");
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

  useEffect(() => {
    const fetchStatus = async () => {
      if (Records.length > 0) {
        try {
          const status = await FindStatusByLast(Records);
          setStatus(status);
        } catch (error) {
          console.error("Erro ao buscar status:", error);
        }
      }
    };

    fetchStatus();
  }, [Records]);

  return (
    <main className="min-h-screen bg-[#1b213b] flex flex-col md:p-10">
      <div className="bg-[#262d47] p-4 mb-6">
        <div className="flex justify-center">
          <IconBank onChange={setBank} />
        </div>
      </div>

      <div className="bg-[#262d47] flex flex-col w-full p-4">
        <div className="flex flex-col md:flex-row pl-[1em] md:pl-[4em] justify-between items-center space-y-4 md:space-y-0">
          <div className="flex flex-row justify-around w-full md:w-auto">
            <Options options={optionsType} onChange={setTipo} />
          </div>

          {status && (
            <div
              className={`flex flex-col md:flex-row items-center justify-center space-x-3 p-4 rounded-lg shadow-lg transition-all ${
                status === "ativo"
                  ? "bg-green-600 text-white hover:bg-green-700"
                  : "bg-red-600 text-white hover:bg-red-700"
              }`}
            >
              <div className="flex items-center space-x-2">
                {status === "ativo" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
                <p className="font-medium text-lg">
                  {status === "ativo"
                    ? "Disponivel"
                    : status === "inativo"
                    ? "Não disponivel"
                    : "Status desconhecido"}
                </p>
              </div>
            </div>
          )}

          <div className="w-full md:w-auto">
            <BasicSelect onChange={setTempo} />
          </div>
        </div>
        <Grafico data={Records} />
      </div>

      <div className="bg-[#262d47] p-4 mt-6 rounded-lg shadow-lg">
        <Advertising />
      </div>

      <div className="bg-[#262d47] p-4 mt-6 rounded-lg shadow-lg">
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
