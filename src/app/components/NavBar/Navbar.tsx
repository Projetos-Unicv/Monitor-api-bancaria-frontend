import { useState } from "react";
import ButtonSplirTypeMobile from "../BotoesGrafico/Mobile/ButtonTypeMobile";
import ButtonSplirDataMobile from "../BotoesGrafico/Mobile/ButtonDateMobile";
import ListaBancoMobile from "../BotoesGrafico/Mobile/ListaBancoMobile";

export const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [tempo, setTempo] = useState("");
  const [tipo, setTipo] = useState("");
  const [bank, setBank] = useState(""); // Estado corrigido
  const [status, setStatus] = useState("");

  const optionsType = [
    { value: "registro", label: "Registro" },
    { value: "consulta", label: "Consulta" },
  ];

  // Corrigindo o uso do estado para banco selecionado
  const handleBankChange = (bankValue: string) => {
    setBank(bankValue); // Agora usamos setBank corretamente
    console.log("Banco selecionado:", bankValue);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between p-4 border-gray-200 bg-[#0353b3]">
      {/* Logo e Título */}
      <a
        href="https://tecnospeed.com.br/"
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src="../../../image/tecnospeed-white.svg"
          width={140}
          height={40}
          alt="Tecnospeed Logo"
        />
        <span className="text-white self-center text-1xl font-medium whitespace-nowrap">
          Monitor Bancário
        </span>
      </a>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-expanded={menuOpen}
      >
        <span className="sr-only">Open main menu</span>
        <svg
          className="w-5 h-5"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 17 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M1 1h15M1 7h15M1 13h15"
          />
        </svg>
      </button>

      {/* Menu Lateral para Mobile */}
      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-blue-600 text-white transform transition-transform z-40 md:hidden ${menuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-blue-400">
          <span className="text-xl font-semibold">Menu</span>
          <button
            onClick={() => setMenuOpen(false)}
            className="text-white hover:text-gray-200"
          >
            <svg
              className="w-6 h-6"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <nav className="mt-4">
          <ul className="space-y-2">
            <li>
              <ListaBancoMobile onChange={handleBankChange} />
            </li>
            <li>
              <ButtonSplirTypeMobile />
            </li>
            <li>
              <ButtonSplirDataMobile />
            </li>
          </ul>
        </nav>
      </aside>

      {/* Overlay para fechar o menu no mobile */}
      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        ></div>
      )}
    </nav>
  );
};
