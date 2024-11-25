export const Footer = () => {
  return (
    <footer className="bg-[#0353b3] text-white py-6">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
        <a
          href="https://tecnospeed.com.br"
          className="flex items-center"
          aria-label="Ir para o site da Tecnospeed"
        >
          <img
            src="../../../image/tecnospeed-white.svg"
            width={180}
            height={51}
            alt="Tecnospeed Logo"
            className="h-auto"
          />
        </a>

        <span className="text-center text-sm sm:text-right font-medium">
          2024 © Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
};
