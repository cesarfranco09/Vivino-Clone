import React, { useState } from 'react';

const Rating = ({ rating, onSave, onDelete }) => {
  const [currentRating, setCurrentRating] = useState(ratings ? ratings.rating : 0);
  const [body, setBody] = useState(rating ? rating.body : '');

  const handleRatingChange = (e) => {
    setCurrentRating(parseInt(e.target.value));
  };

  const handleBodyChange = (e) => {
    setBody(e.target.value);
  };

  const handleSave = () => {
    onSave(currentRating, body);
  };

  const handleDelete = () => {
    onDelete();
  };

  return (
    <div>
      <label>
        Rating:
        <input type="number" min="0" max="5" value={currentRating} onChange={handleRatingChange} />
      </label>
      <label>
        Comment:
        <textarea value={body} onChange={handleBodyChange} />
      </label>
      <button onClick={handleSave}>Save</button>
      {rating && <button onClick={handleDelete}>Delete</button>}
    </div>
  );
};

export default Rating;
