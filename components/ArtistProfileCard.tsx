
import React from 'react';
import { Artist } from '../types';

interface ArtistProfileCardProps {
  artist: Artist;
}

const ArtistProfileCard: React.FC<ArtistProfileCardProps> = ({ artist }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col group">
      <img
        src={artist.artworkUrl}
        alt={`Artwork by ${artist.name}`}
        className="w-full h-48 object-cover"
      />
      <div className="p-4 flex flex-col flex-grow">
        <h3 className="text-lg font-bold text-gray-800 tracking-tight">{artist.name}</h3>
        <p className="text-sm text-gray-600 mt-2 flex-grow">{artist.bio}</p>
      </div>
       {artist.artistWebsite && (
        <div className="px-4 pb-4 mt-auto">
           <a
            href={artist.artistWebsite}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="w-full inline-block text-center bg-indigo-50 text-indigo-700 hover:bg-indigo-100 font-semibold text-sm px-4 py-2 rounded-md transition-colors duration-300"
            aria-label={`Visit website for ${artist.name}`}
          >
            Visita il Sito Web
          </a>
        </div>
      )}
    </div>
  );
};

export default ArtistProfileCard;