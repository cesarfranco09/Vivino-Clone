import React, { useState, useEffect } from 'react';
import WineCard from '../Wine/WineCard';

const WineList = ({ wines }) => {
  const [filteredWines, setFilteredWines] = useState(wines);
  const [regionFilter, setRegionFilter] = useState('');

  useEffect(() => {
    if (regionFilter) {
      setFilteredWines(wines.filter(wine => wine.region === regionFilter));
    } else {
      setFilteredWines(wines);
    }
  }, [regionFilter, wines]);

  const handleFilterChange = e => {
    setRegionFilter(e.target.value);
  };

  return (
    <div>
      <div>
        <label htmlFor="region-filter">Filter by Region:</label>
        <select id="region-filter" value={regionFilter} onChange={handleFilterChange}>
          <option value="">All Regions</option>
          <option value="France">France</option>
          <option value="Italy">Italy</option>
          <option value="Spain">Spain</option>
          <option value="USA">USA</option>
          <option value="Argentina">Argentina</option>
          <option value="Germany">Germany</option>
          <option value="Chile">Chile</option>
          <option value="Australia">Australia</option>

        </select>
      </div>
      <div className="wine-list">
        {filteredWines.map(wine => (
          <WineCard key={wine.id} wine={wine} />
        ))}
      </div>
    </div>
  );
};

export default WineList;

