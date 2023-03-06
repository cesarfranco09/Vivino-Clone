import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getWineById } from './winesReducer';

const WineCard = ({ wineId, isInCart, isInWishlist, userRating }) => {
  const dispatch = useDispatch();
  const wine = useSelector(state => getWineById(state, wineId));

  useEffect(() => {
    dispatch(fetchWine(wineId));
  }, [dispatch, wineId]);

  if (!wine) {
    return <div>Loading...</div>;
  }

  return (
    <div className="wine-card">
      <img src={wine.image} alt={wine.name} className="wine-card_image" />
      <div className="wine-card_details">
        <h2 className="wine-card_name">{wine.name}</h2>
        <p className="wine-card_type">{wine.type}</p>
        <p className="wine-card_grape">{wine.grape}</p>
        <p className="wine-card_region">{wine.region}, {wine.country}</p>
        <p className="wine-card_price">${wine.price}</p>
        <p className="wine-card_year">{wine.year}</p>
        <p className="wine-card_winery">{wine.winery}</p>
        <p className="wine-card_boldness">{wine.bold}/10 Boldness</p>
        <p className="wine-card_tannin">{wine.tannic}/10 Tannin</p>
        <p className="wine-card_sweetness">{wine.sweet}/10 Sweetness</p>
        <p className="wine-card_acidity">{wine.acidic}/10 Acidity</p>
        {isInCart && <p className="wine-card_status">In Cart</p>}
        {isInWishlist && <p className="wine-card_status">In Wishlist</p>}
        {userRating && (
          <div className="wine-card_rating">
            <p>Your Rating:</p>
            <span className={`rating-star rating-star-${userRating}`}></span>
          </div>
        )}
      </div>
    </div>
  );
};

export default WineCard;
