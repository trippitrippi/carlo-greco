
import React from 'react';

const ArtistCardSkeleton: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden animate-pulse" aria-hidden="true">
      <div className="h-48 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-5 bg-gray-300 rounded w-3/4 mb-3"></div>
        <div className="h-4 bg-gray-300 rounded w-full"></div>
        <div className="h-4 bg-gray-300 rounded w-5/6 mt-1"></div>
      </div>
      <div className="px-4 pb-4">
        <div className="h-9 bg-gray-200 rounded-md w-full"></div>
      </div>
    </div>
  );
};

export default ArtistCardSkeleton;
