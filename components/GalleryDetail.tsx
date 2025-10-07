
import React from 'react';
import { ArtGallery } from '../types';
import ArtistCard from './ArtistCard';

interface GalleryDetailProps {
  gallery: ArtGallery;
  onBack: () => void;
}

const GalleryDetail: React.FC<GalleryDetailProps> = ({ gallery, onBack }) => {
  return (
    <div className="bg-white p-6 md:p-8 rounded-lg shadow-xl animate-fade-in">
      <button
        onClick={onBack}
        className="mb-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        Torna alla Lista
      </button>

      <div className="border-b border-gray-200 pb-5 mb-5">
        <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">{gallery.name}</h2>
        <p className="mt-2 text-lg text-gray-500">{gallery.location}, {gallery.country}</p>
      </div>

      <div className="prose prose-lg max-w-none text-gray-600 mb-8">
        <p>{gallery.description}</p>
        <a href={gallery.website} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:text-indigo-800 font-semibold no-underline">
          Visita il Sito Web &rarr;
        </a>
      </div>

      <div>
        <h3 className="text-2xl font-bold text-gray-800 mb-6">Artisti in Evidenza</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {gallery.artists.map(artist => (
            <ArtistCard key={artist.id} artist={artist} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GalleryDetail;