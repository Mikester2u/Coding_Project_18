//U22562170

import React, {useState} from 'react';

const RateMovieButton = ({movie}) => { //RateMovieButton component
  const [rating, setRating] = useState(null);
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleRating = (rate) => {
    setRating(rate);
    setConfirmationMessage(`You rated ${movie} ${rate} stars`); //confirmation message
  };

  return (
    <div>
      <h3>Rate{movie}</h3>
      <div>
        {[1, 2, 3, 4, 5].map((star) => ( //ratings
          <button key={star} onClick={() => handleRating(star)}>
            {star}Star{star > 1 ? 's' : ''}
          </button>
        ))}
      </div>
      {confirmationMessage && <p>{confirmationMessage}</p>}
    </div>
  );
};

export default RateMovieButton;