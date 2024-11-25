export const NavBar = () => {
  return (
    <nav className="flex flex-wrap items-center justify-between p-4 border-gray-200 bg-[#1b213b]">
      <a
        href="https://tecnospeed.com.br/"
        className="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src="../../../image/tecnospeed-white.svg"
          width={200} // Aumentando a largura
          height={60} // Aumentando a altura
          alt="Tecnospeed Logo"
        />
        <span className="text-white self-center text-1xl font-medium whitespace-nowrap">
          Monitor Bancário
        </span>
      </a>

      {/* Removido o botão para abrir o menu */}
      {/* Removido o menu lateral (aside) */}
    </nav>
  );
};
