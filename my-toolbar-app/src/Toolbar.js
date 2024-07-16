//U22562170

import React, {useState} from 'react';
import RateMovieButton from './rateMovieButton';

const Toolbar = () => {
  const movies = ['Twister', 'Marvels Avengers', 'The Dark Knight'];
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  const handleMovieChange = (event) => {
    setSelectedMovie(event.target.value);
  };

  return ( //dynamic movie selector
    <div className="toolbar">
      <select onChange={handleMovieChange} value={selectedMovie}>
        {movies.map((movie) => (
          <option key={movie} value={movie}>
            {movie}
          </option>
        ))}
      </select>
      <RateMovieButton movie={selectedMovie} />
    </div>
  );
};

export default Toolbar;