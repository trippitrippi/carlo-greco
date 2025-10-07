import React from 'react';
import GalleryCardSkeleton from './GalleryCardSkeleton';

const GalleryListSkeleton: React.FC = () => {
  return (
    <div role="status" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      <span className="sr-only">Caricamento gallerie in corso...</span>
      {Array.from({ length: 8 }).map((_, index) => (
        <GalleryCardSkeleton key={index} />
      ))}
    </div>
  );
};

export default GalleryListSkeleton;