
import React from 'react';
import { Artist } from '../types';
import ArtistProfileCard from './ArtistProfileCard';

interface ArtistListProps {
  artists: Artist[];
}

const ArtistList: React.FC<ArtistListProps> = ({ artists }) => {
  if (artists.length === 0) {
    return <p className="text-center text-gray-500 text-lg">Nessun artista trovato. Prova un termine di ricerca diverso.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      {artists.map(artist => (
        <ArtistProfileCard key={artist.id} artist={artist} />
      ))}
    </div>
  );
};

export default ArtistList;