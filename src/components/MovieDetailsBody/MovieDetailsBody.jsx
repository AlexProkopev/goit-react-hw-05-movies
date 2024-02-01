import React from 'react';
import css from './MovieDetailsBody.module.css';

const MovieDetailsBody = ({ movie: {original_title,overview,poster_path} }) => {
  return (
    <div className={css.movieDetailsContainer}>
      <img
        className={css.imgPoster}
        src={'https://image.tmdb.org/t/p/original/' + poster_path}
        alt="Poster for Movie"
      />
      <h2 className={css.title}>{original_title}</h2>
      <p className={css.description}>{overview}</p>
    </div>
  );
};

export default MovieDetailsBody;
