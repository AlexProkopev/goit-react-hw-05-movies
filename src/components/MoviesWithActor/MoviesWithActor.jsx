import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import css from './MoviesWithActor.module.css';
import { defaultImgHome } from 'services/defaultImg';

const MoviesWithActor = ({ movies }) => {
  const location = useLocation();

  return (
    <>
      {movies !== null &&
        movies.cast.map(movie => (
          <li key={movie.id} className={css.itemCardMovies}>
            <Link
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              className={css.linkPopulary}
            >
              <img
                className={css.imgCast}
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : defaultImgHome
                }
                alt={movie.title}
              />
              <p className={css.title}>{movie.title}</p>
            </Link>
          </li>
        ))}
    </>
  );
};

export default MoviesWithActor;
