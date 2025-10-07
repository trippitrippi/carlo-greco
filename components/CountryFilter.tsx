
import React from 'react';

interface CountryFilterProps {
  countries: string[];
  selectedCountry: string;
  onSelectCountry: (country: string) => void;
}

const CountryFilter: React.FC<CountryFilterProps> = ({ countries, selectedCountry, onSelectCountry }) => {
  return (
    <div>
      <label htmlFor="country-filter" className="block text-sm font-medium text-gray-700 mb-2">
        Filtra per Paese
      </label>
      <select
        id="country-filter"
        name="country-filter"
        value={selectedCountry}
        onChange={(e) => onSelectCountry(e.target.value)}
        className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md shadow-sm"
      >
        {countries.map(country => (
          <option key={country} value={country}>
            {country === 'All' ? 'Tutti i Paesi' : country}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CountryFilter;
