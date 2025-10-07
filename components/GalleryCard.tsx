import React from 'react';
import { ArtGallery } from '../types';

interface GalleryCardProps {
  gallery: ArtGallery;
  onSelect: (gallery: ArtGallery) => void;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ gallery, onSelect }) => {
  const getHostname = (url: string) => {
    try {
      return new URL(url).hostname.replace('www.', '');
    } catch (e) {
      return url;
    }
  };

  return (
    <div
      onClick={() => onSelect(gallery)}
      className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer transform hover:-translate-y-1 transition-all duration-300 ease-in-out group flex flex-col"
      role="button"
      aria-label={`View details for ${gallery.name}`}
    >
      <div className="relative">
        <img
          src={gallery.imageUrl}
          alt={`Cover image for ${gallery.name}`}
          className="w-full h-40 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-xl font-bold text-white tracking-tight drop-shadow-md">{gallery.name}</h3>
          <a
            href={gallery.website}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="text-sm text-indigo-200 hover:text-white hover:underline transition-colors duration-300"
            aria-label={`Visit website for ${gallery.name}`}
          >
            {getHostname(gallery.website)}
          </a>
        </div>
      </div>

      <div className="p-5 flex flex-col flex-grow">
        <p className="text-gray-500 mt-1">{gallery.location}, {gallery.country}</p>
        <p className="text-sm text-gray-600 mt-3 flex-grow">{gallery.description}</p>
      </div>
      <div className="px-5 pb-4 mt-2 border-t pt-4 flex justify-between items-center bg-gray-50">
        <span className="inline-block bg-indigo-100 text-indigo-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">
          {gallery.artists.length} Artisti
        </span>
        <span
          className="text-sm text-indigo-600 group-hover:text-indigo-800 font-semibold transition-colors duration-300"
        >
          Vedi Dettagli &rarr;
        </span>
      </div>
    </div>
  );
};

export default GalleryCard;