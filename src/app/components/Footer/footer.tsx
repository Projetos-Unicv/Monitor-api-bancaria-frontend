export const Footer = () => {
  return (
    <footer className="bg-[#0353b3] flex pb-6 pt-6">
      <div className="flex flex-row justify-around font-visby">
        <a href="https://tecnospeed.com.br" className="">
          <img src="../../../public/image/tecnospeed-white.svg" width={180} height={51} alt="Tecnospeed Logo" />
        </a>
        <span className="block font-medium text-sm text-white sm:text-center">2024 © Todos direitos reservados.</span>
      </div>
    </footer>
  );
};
