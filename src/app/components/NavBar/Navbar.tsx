// NavBar Component
import { useState } from "react";
import { IconBankMobile } from "../BotoesGrafico/Mobile/ListBankMobile";

interface PropsInterface {
  onChange: (value: string) => void;
}

export const NavBar = ({ onChange }: PropsInterface) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleBankChange = (bankValue: string) => {
    onChange(bankValue); // Propaga o valor do banco selecionado
    console.log("Banco selecionado:", bankValue);
  };

  return (
    <nav className="flex flex-wrap items-center justify-between p-2 border-gray-200 bg-[#1b213b]">
      <a
        href="https://tecnospeed.com.br/"
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src="../../../image/tecnospeed-white.svg"
          width={200}
          height={60}
          alt="Tecnospeed Logo"
        />
      </a>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        type="button"
        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        aria-expanded={menuOpen}
      >
        <span className="sr-only">Open main bancos</span>
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

      <aside
        className={`fixed top-0 left-0 h-full w-64 bg-[#1b213b] text-white transform transition-transform z-40 md:hidden ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-blue-400">
          <span className="text-xl font-semibold">Bancos</span>
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
              <IconBankMobile onChange={handleBankChange} />
            </li>
          </ul>
        </nav>
      </aside>

      {menuOpen && (
        <div
          onClick={() => setMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-50 z-30 md:hidden"
        ></div>
      )}
    </nav>
  );
};
