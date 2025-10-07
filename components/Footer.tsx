
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white mt-12 border-t">
      <div className="container mx-auto py-8 px-4 md:px-8 text-center text-gray-500">
        <div className="mb-4">
          <a
            href="mailto:curator@example.com?subject=Candidatura Artista Emergente"
            className="text-indigo-600 hover:text-indigo-800 font-semibold transition-colors"
          >
            Candida un Artista
          </a>
        </div>
        <p>&copy; {new Date().getFullYear()} Esploratore di Arte Emergente. Tutti i diritti riservati.</p>
        <p className="text-sm mt-1">Creato per amanti e collezionisti d'arte.</p>
      </div>
    </footer>
  );
};

export default Footer;
