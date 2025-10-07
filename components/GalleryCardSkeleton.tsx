import React from 'react';

const GalleryCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse" aria-hidden="true">
      <div className="relative h-40 bg-gray-300">
        <div className="absolute bottom-0 left-0 p-4 w-full">
          <div className="h-6 bg-gray-400 rounded w-3/4 mb-2"></div>
          <div className="h-4 bg-gray-400 rounded w-1/2"></div>
        </div>
      </div>
      <div className="p-5">
        <div className="h-4 bg-gray-300 rounded w-1/2 mb-4"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 mt-1"></div>
      </div>
      <div className="px-5 pb-4 border-t pt-4 flex justify-between items-center bg-gray-50">
        <div className="h-6 w-20 bg-gray-300 rounded-full"></div>
        <div className="h-4 w-24 bg-gray-300 rounded"></div>
      </div>
    </div>
  );
};

export default GalleryCardSkeleton;