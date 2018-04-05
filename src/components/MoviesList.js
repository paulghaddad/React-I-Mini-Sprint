import React from 'react';

const MoviesList = ({movies}) => {
  const movieItems = movies.map((movie, i) => {
    return <li key={i}>{movie}</li>
  });

  return (
    <ul>
      { movieItems }
    </ul>
  )
};

export default MoviesList;
