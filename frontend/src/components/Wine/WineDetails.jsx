import React from 'react';
import { useSelector } from 'react-redux';
import { getWineById } from './winesReducer';
import WineCard from './WineCard';

const WineDetails = ({ wineId }) => {
    const wine = useSelector(state => getWineById(state, wineId));
  
    return (
      <div className="wine-details">
        {wine && <WineCard wine={wine} />}
      </div>
    );
};
  
export default WineDetails;
