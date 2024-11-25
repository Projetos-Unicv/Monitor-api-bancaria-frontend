import React from "react";

const Advertising: React.FC = () => {
  return (
    <div className="w-full bg-blue-500 p-4 text-white text-center rounded-lg shadow-md">
      <h2 className="text-xl font-bold">Anúncio Especial!</h2>
      <p className="mt-2">
        Confira nossas ofertas imperdíveis de Black Friday!
      </p>
      <button className="mt-4 bg-yellow-500 text-black px-6 py-2 rounded-lg hover:bg-yellow-400 transition">
        Saiba Mais
      </button>
    </div>
  );
};

export default Advertising;
