
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 md:px-8 flex justify-center">
        <div className="text-center">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-tight">
            Esploratore di Arte Emergente
          </h1>
          <p className="text-sm text-gray-500">Scopri la nuova generazione di artisti</p>
        </div>
      </div>
    </header>
  );
};

export default Header;