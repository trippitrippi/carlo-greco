
import React from 'react';
import { Artist } from '../types';

interface ArtistCardProps {
  artist: Artist;
}

const ArtistCard: React.FC<ArtistCardProps> = ({ artist }) => {
  return (
    <div className="bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
      <img src={artist.artworkUrl} alt={`Artwork by ${artist.name}`} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h4 className="text-lg font-bold text-gray-900">{artist.name}</h4>
        <p className="text-sm text-gray-600 mt-1">{artist.bio}</p>
      </div>
    </div>
  );
};

export default ArtistCard;
