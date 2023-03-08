
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const WineNavMenu = () => {
  const [showWines, setShowWines] = useState(false);
  const [showGrapes, setShowGrapes] = useState(false);
  const [showRegions, setShowRegions] = useState(false);
  const [showPrices, setShowPrices] = useState(false);


  const handleWinesClick = () => {
    setShowWines(!showWines);
    setShowGrapes(false);
    setShowRegions(false);
    setShowPrices(false);
  };

  const handleGrapesClick = () => {
    setShowGrapes(!showGrapes);
    setShowWines(false);
    setShowRegions(false);
    setShowPrices(false);
  };

  const handleRegionsClick = () => {
    setShowRegions(!showRegions);
    setShowWines(false);
    setShowGrapes(false);
    setShowPrices(false);
  };

  const handlePricesClick = () => {
    setShowPrices(!showPrices);
    setShowWines(false);
    setShowGrapes(false);
    setShowRegions(false);
  };

  return (
    <div className="wine-nav-menu">
      <ul>
        <li className="wines-dropdown">
          <a href="#" onClick={handleWinesClick}>
            Wines <i className="fas fa-chevron-down"></i>
          </a>
          {showWines && (
            <ul className="dropdown-menu">
              <li><Link to="/wines?wine_types=red">Red Wines</Link></li>
              <li><Link to="/wines?wine_types=white">White Wines</Link></li>
              <li><Link to="/wines?wine_types=rose">Rose Wines</Link></li>
              <li><Link to="/wines?wine_types=sparkling">Sparkling Wines</Link></li>
            </ul>
          )}
        </li>
        <li className="grapes-dropdown">
          <a href="#" onClick={handleGrapesClick}>
            Grapes <i className="fas fa-chevron-down"></i>
          </a>
          {showGrapes && (
            <ul className="dropdown-menu">
              <li><Link to="/wines?grape=Cabernet Sauvignon">Cabernet Sauvignon</Link></li>
              <li><Link to="/wines?grape=Pinot Noir">Pinot Noir</Link></li>
              <li><Link to="/wines?grape=Chardonnay">Chardonnay</Link></li>
            </ul>
          )}
        </li>
        <li className="regions-dropdown">
          <a href="#" onClick={handleRegionsClick}>
            Regions <i className="fas fa-chevron-down"></i>
          </a>
          {showRegions && (
            <ul className="dropdown-menu">
              <li><Link to="/wines?region=Napa Valley">Napa Valley</Link></li>
              <li><Link to="/wines?region=Bordeaux">Bordeaux</Link></li>
              <li><Link to="/wines?region=Tuscany">Tuscany</Link></li>
            </ul>
          )}
        </li>
        <li className="prices-dropdown">
          <a href="#" onClick={handlePricesClick}>
            Prices <i className="fas fa-chevron-down"></i>
          </a>
          {showPrices && (
            <ul className="dropdown-menu">
              <li><Link to="/wines?price=under20">Under $20</Link></li>
              <li><Link to="/wines?price=20to40">$20 to $40</Link></li>
              <li><Link to="/wines?price=40to80">$40 to $80</Link></li>
              <li><Link to="/wines?price=over80">Over $80</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};

export default WineNavMenu;
