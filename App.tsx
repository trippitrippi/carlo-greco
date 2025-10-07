
import React, { useState, useMemo, useEffect } from 'react';
import { ArtGallery } from './types';
import { galleries as initialGalleries } from './data';
import Header from './components/Header';
import GalleryList from './components/GalleryList';
import GalleryDetail from './components/GalleryDetail';
import SearchBar from './components/SearchBar';
import Footer from './components/Footer';
import GalleryListSkeleton from './components/GalleryListSkeleton';
import Pagination from './components/Pagination';
import CountryFilter from './components/CountryFilter';

const GALLERIES_PER_PAGE = 12;

function App() {
  const [view, setView] = useState<'list' | 'galleryDetail'>('list');
  const [selectedGallery, setSelectedGallery] = useState<ArtGallery | null>(null);
  
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('All');
  const [galleries, setGalleries] = useState<ArtGallery[]>([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);


  useEffect(() => {
    // Simulate fetching data to show loading indicator
    const timer = setTimeout(() => {
      setGalleries(initialGalleries);
      setLoading(false);
    }, 1500); // Simulate a 1.5s network delay

    return () => clearTimeout(timer);
  }, []);
  
  const countries = useMemo(() => {
    if (loading) return [];
    return ['All', ...Array.from(new Set(initialGalleries.map(g => g.country))).sort()];
  }, [loading]);

  const filteredGalleries = useMemo(() => {
    if (loading) {
      return [];
    }
    
    let result = initialGalleries;

    if (selectedCountry !== 'All') {
      result = result.filter(gallery => gallery.country === selectedCountry);
    }

    if (searchTerm) {
      const lowercasedTerm = searchTerm.toLowerCase();
      result = result.filter(gallery =>
        gallery.name.toLowerCase().includes(lowercasedTerm) ||
        gallery.location.toLowerCase().includes(lowercasedTerm) ||
        gallery.artists.some(artist => artist.name.toLowerCase().includes(lowercasedTerm))
      );
    }
    
    return result;
  }, [searchTerm, loading, selectedCountry]);

  // Reset page to 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, selectedCountry]);

  const totalPages = Math.ceil(filteredGalleries.length / GALLERIES_PER_PAGE);
  const paginatedGalleries = useMemo(() => {
    const startIndex = (currentPage - 1) * GALLERIES_PER_PAGE;
    return filteredGalleries.slice(startIndex, startIndex + GALLERIES_PER_PAGE);
  }, [currentPage, filteredGalleries]);


  const handleSelectGallery = (gallery: ArtGallery) => {
    setSelectedGallery(gallery);
    setView('galleryDetail');
    window.scrollTo(0, 0);
  };

  const handleBackToList = () => {
    setSelectedGallery(null);
    setView('list');
  };
  
  const handleSelectCountry = (country: string) => {
    setSelectedCountry(country);
  }
  
  const handlePageChange = (page: number) => {
    if (page > 0 && page <= totalPages) {
      setCurrentPage(page);
       window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }

  const renderContent = () => {
    switch (view) {
      case 'galleryDetail':
        return <GalleryDetail gallery={selectedGallery!} onBack={handleBackToList} />;
      case 'list':
      default:
        return (
          <>
            <div className="my-8 space-y-6">
              <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} disabled={loading} placeholder="Cerca gallerie, artisti o località..."/>
              {!loading && <CountryFilter countries={countries} selectedCountry={selectedCountry} onSelectCountry={handleSelectCountry} />}
            </div>
            {loading ? (
              <GalleryListSkeleton />
            ) : (
              <>
                <GalleryList galleries={paginatedGalleries} onSelectGallery={handleSelectGallery} />
                {totalPages > 1 && (
                  <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
                )}
              </>
            )}
          </>
        );
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 font-sans">
      <Header />
      <main className="container mx-auto p-4 md:p-8">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
}

export default App;