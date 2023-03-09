
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./WineNavMenu.scss"

const WineNavMenu = () => {
  const [focusMenu, setFocusMenu] = useState("");

  return (
    <div className="wine-nav-menu">
      <ul>
        <li className="wines-dropdown">
          <a href="#" onMouseOver={() => setFocusMenu('wine')}>
            <span className="menuLink_icon"><svg viewBox="0 0 20 20"><g><path fill="#1e1e1e"
                                                                                     d="M9.85,17a.48.48,0,0,1-.48-.49V12.89a.48.48,0,0,1,1,0v3.66A.48.48,0,0,1,9.85,17Z"></path><path
                fill="#1e1e1e"
                d="M9.85,13.37a.53.53,0,0,1-.3-.09l-.12-.09A15.3,15.3,0,0,1,6.62,10.9,4.46,4.46,0,0,1,6,7.17c.22-1.22.7-3.35.73-3.44a.48.48,0,0,1,.47-.38h5.4a.48.48,0,0,1,.47.38c0,.09.51,2.22.73,3.44a4.49,4.49,0,0,1-.67,3.74,16,16,0,0,1-2.82,2.29l-.12.08A.5.5,0,0,1,9.85,13.37Zm-2.32-9c-.15.68-.47,2.13-.63,3a3.6,3.6,0,0,0,.47,3,13.89,13.89,0,0,0,2.48,2,13.89,13.89,0,0,0,2.48-2,3.6,3.6,0,0,0,.47-3c-.16-.89-.48-2.34-.63-3Z"></path><path
                fill="#1e1e1e" d="M12.32,17H7.38a.49.49,0,1,1,0-1h4.94a.49.49,0,1,1,0,1Z"></path><path fill="#1e1e1e"
                                                                                                     d="M13.36,9h-7a.49.49,0,0,1,0-1h7a.49.49,0,0,1,0,1Z"></path></g></svg></span>
            Wines <i className="fas fa-chevron-down"></i>
          </a>
          {focusMenu == 'wine' && (
            <div className={'nav-drop-box'} onMouseLeave={() => setFocusMenu('')}>
              <ul className="dropdown-menu">
                <li><a href="/wines?type=wine&value=Red">Red Wines</a></li>
                <li><a href="/wines?type=wine&value=White">White Wines</a></li>
                <li><a href="/wines?type=wine&value=Rose">Rose Wines</a></li>
                <li><a href="/wines?type=wine&value=Sparkling">Sparkling Wines</a></li>
              </ul>
            </div>
          )}
        </li>

        <li className="grapes-dropdown">
          <a href="#" onMouseOver={() => setFocusMenu('grape')}>
            <span className="menuLink_icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                                        aria-hidden="true" data-acsb-hidden="true"
                                                        data-acsb-force-hidden="true"><path fill="#1d1d1d"
                                                                                            d="M9.54,8.37A.51.51,0,0,1,9.07,8,7.14,7.14,0,0,0,5.73,4a.5.5,0,0,1-.15-.69.51.51,0,0,1,.7-.14A8,8,0,0,1,10,7.7a.49.49,0,0,1-.3.64A.47.47,0,0,1,9.54,8.37Z"></path><path
                fill="#1d1d1d"
                d="M7.69,9.46H7.61a.5.5,0,0,1-.42-.57A3.07,3.07,0,0,1,8.26,7,.5.5,0,0,1,9,7a.49.49,0,0,1,0,.7A2.1,2.1,0,0,0,8.18,9,.49.49,0,0,1,7.69,9.46Z"></path><path
                fill="#1d1d1d"
                d="M9.1,14.69a2,2,0,0,1-.27-3.94,1.93,1.93,0,0,1,1.47.38,2,2,0,0,1,.77,1.31,2,2,0,0,1-.38,1.47,2,2,0,0,1-1.31.76A1.32,1.32,0,0,1,9.1,14.69Zm0-3H9a1,1,0,1,0,.27,1.94,1,1,0,0,0,.65-.38,1,1,0,0,0,.19-.72h0a1,1,0,0,0-.38-.64A1,1,0,0,0,9.11,11.73Z"></path><path
                fill="#1d1d1d"
                d="M12,14.28A2,2,0,1,1,14,12h0a2,2,0,0,1-.39,1.47,2,2,0,0,1-1.3.77Zm0-3h-.13a1,1,0,1,0,.27,1.94A1,1,0,0,0,12,11.32Z"></path><path
                fill="#1d1d1d"
                d="M10.22,11.94a2,2,0,0,1-2-1.71A2,2,0,0,1,10,8a2,2,0,0,1,2.23,1.69,2,2,0,0,1-.38,1.47,2,2,0,0,1-1.31.77Zm0-3h-.14a.92.92,0,0,0-.64.38,1,1,0,0,0-.19.73,1,1,0,0,0,1.11.84,1,1,0,0,0,.64-.39.94.94,0,0,0,.19-.72h0A1,1,0,0,0,10.22,9Z"></path><path
                fill="#1d1d1d"
                d="M13.2,11.36a2,2,0,1,1,2-2.26h0a2,2,0,0,1-.38,1.47,2,2,0,0,1-1.31.77Zm0-3h-.14a1,1,0,0,0-.65.39,1,1,0,0,0-.19.72,1,1,0,0,0,.38.65,1,1,0,0,0,1.57-.92A1,1,0,0,0,13.21,8.39Z"></path><path
                fill="#1d1d1d"
                d="M10.93,17.05a1.9,1.9,0,0,1-1.19-.4A1.92,1.92,0,0,1,9,15.34a2,2,0,0,1,1.69-2.23,1.93,1.93,0,0,1,1.47.38,2,2,0,0,1,.77,1.31h0A2,2,0,0,1,11.21,17Zm0-3H10.8A1,1,0,0,0,10,15.21a1,1,0,0,0,1.11.83,1,1,0,0,0,.65-.38,1,1,0,0,0,.19-.72h0a1,1,0,0,0-.38-.64A1,1,0,0,0,10.94,14.09Z"></path><path
                fill="#1d1d1d"
                d="M6.77,12.39a2,2,0,1,1,2-2.26h0a2,2,0,0,1-1.69,2.24Zm0-3H6.64a1,1,0,0,0-.84,1.11,1,1,0,0,0,.38.65,1,1,0,0,0,.73.19,1,1,0,0,0,.84-1.11h0A1,1,0,0,0,6.77,9.42Z"></path><path
                fill="#1d1d1d"
                d="M9.5,6.07A2.74,2.74,0,0,1,8.94,6a.49.49,0,0,1-.4-.43,2.9,2.9,0,0,1,.91-2.41,2.83,2.83,0,0,1,2.47-.69.51.51,0,0,1,.41.44,2.87,2.87,0,0,1-.91,2.4A2.83,2.83,0,0,1,9.5,6.07Zm1.83-2.65a1.86,1.86,0,0,0-1.8,1.65,1.88,1.88,0,0,0,1.21-.48A1.84,1.84,0,0,0,11.33,3.42Z"></path></svg></span>
            Grapes <i className="fas fa-chevron-down"></i>
          </a>
          {focusMenu == 'grape' && (
            <div className={'nav-drop-box'} onMouseLeave={() => setFocusMenu('')}>
              <ul className="dropdown-menu">
                <li><a href="/wines?type=grape&value=Cabernet Sauvignon">Cabernet Sauvignon</a></li>
                <li><a href="/wines?type=grape&value=Pinot Noir">Pinot Noir</a></li>
                <li><a href="/wines?type=grape&value=Chardonnay">Chardonnay</a></li>
              </ul>
            </div>
          )}
        </li>

        <li className="regions-dropdown">
          <a href="#" onMouseOver={() => setFocusMenu('region')}>
            <span className="menuLink_icon" ><svg viewBox="0 0 20 20"><g><path fill="#1d1d1d"
                                                                                     d="M10.21,16.61a.37.37,0,0,1-.31-.15L6.35,12.11a5.33,5.33,0,0,1-1.57-3.8,5.43,5.43,0,0,1,9.27-3.83h0a5.41,5.41,0,0,1,0,7.66l-3.53,4.32A.37.37,0,0,1,10.21,16.61Zm0-12.91a4.61,4.61,0,0,0-3.27,7.87l3.27,4,3.24-4a4.61,4.61,0,0,0,0-6.55h0A4.62,4.62,0,0,0,10.21,3.7Zm0,7.33a2.89,2.89,0,0,1-2.06-.85h0a2.92,2.92,0,0,1,0-4.12,3,3,0,0,1,4.12,0,2.91,2.91,0,0,1-2.06,5Zm0-5a2.11,2.11,0,0,0-1.49,3.6h0a2.15,2.15,0,0,0,3,0A2.11,2.11,0,0,0,10.21,6Z"></path></g></svg></span>
            Regions <i className="fas fa-chevron-down"></i>
          </a>
          {focusMenu == 'region' && (
            <div className={'nav-drop-box'} onMouseLeave={() => setFocusMenu('')}>
              <ul className="dropdown-menu">
                <li><a href="/wines?type=region&value=Napa Valley">Napa Valley</a></li>
                <li><a href="/wines?type=region&value=Bordeaux">Bordeaux</a></li>
                <li><a href="/wines?type=region&value=Tuscany">Tuscany</a></li>
              </ul>
            </div>
          )}
        </li>
      </ul>
    </div>
  );
};

export default WineNavMenu;
