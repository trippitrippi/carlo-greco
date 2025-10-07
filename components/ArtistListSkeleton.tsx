
import React from 'react';
import ArtistCardSkeleton from './ArtistCardSkeleton';

const ArtistListSkeleton: React.FC = () => {
  return (
    <div role="status" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
      <span className="sr-only">Caricamento artisti in corso...</span>
      {Array.from({ length: 10 }).map((_, index) => (
        <ArtistCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default ArtistListSkeleton;