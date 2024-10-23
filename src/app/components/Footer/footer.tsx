export const Footer = () => {
  return (
    <footer className="bg-white shadow dark:bg-gray-900">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://tecnospeed.com.br"
            className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="../../../public/tecnospeed-white.svg"
              className="h-8"
              alt="Tecnospeed Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Link 1
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Link 2
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Link 3
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Link 4
              </a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="#" className="hover:underline">
            Turma do barulho
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};
