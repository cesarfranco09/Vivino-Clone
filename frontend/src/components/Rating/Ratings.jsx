import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getRatingsByWineId } from './ratingsReducer';
import { createRating, updateRating, deleteRating } from './ratingsReducer';
import Rating from './Rating';

const Ratings = ({ wineId }) => {
  const dispatch = useDispatch();
  const ratings = useSelector((state) => getRatingsByWineId(state, wineId));

  useEffect(() => {
    dispatch(fetchRatings(wineId));
  }, [dispatch, wineId]);

  const handleSaveRating = (rating, body) => {
    if (rating) {
      dispatch(updateRating(rating.id, rating, body));
    } else {
      dispatch(createRating(wineId, rating, body));
    }
  };

  const handleDeleteRating = () => {
    dispatch(deleteRating(rating.id));
  };

  return (
    <div>
      {ratings ? (
        <Rating rating={ratings} onSave={handleSaveRating} onDelete={handleDeleteRating} />
      ) : (
        <Rating onSave={handleSaveRating} />
      )}
    </div>
  );
};

export default Ratings;
