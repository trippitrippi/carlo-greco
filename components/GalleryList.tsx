
import React from 'react';
import { ArtGallery } from '../types';
import GalleryCard from './GalleryCard';

interface GalleryListProps {
  galleries: ArtGallery[];
  onSelectGallery: (gallery: ArtGallery) => void;
}

const GalleryList: React.FC<GalleryListProps> = ({ galleries, onSelectGallery }) => {
  if (galleries.length === 0) {
    return <p className="text-center text-gray-500 text-lg">Nessuna galleria trovata. Prova un termine di ricerca diverso.</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {galleries.map(gallery => (
        <GalleryCard key={gallery.id} gallery={gallery} onSelect={onSelectGallery} />
      ))}
    </div>
  );
};

export default GalleryList;