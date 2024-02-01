import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Cast.module.css';
import Loader from 'components/Loader/Loader';

import ScrollBtnUp from 'components/ScrollBtnUp/ScrollBtnUp';
import ScrollBtnDown from 'components/ScrollBtnDown/ScrollBtnDown';
import { fetchDetails } from 'services/fetchDetails';
import CastListItem from './CastListItem/CastListItem';

const Cast = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const currentMovies = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=e9b50bda4ce56f3b360f447ed6508c77`;

  useEffect(() => {
    fetchDetails(setIsLoading, setMovie, setIsError, currentMovies);
    return () => {
      setMovie(null);
    };
  }, [currentMovies]);

  return (
    <>
      <ScrollBtnDown />
      {isLoading && <Loader />}
      {isError && <h4>Server error</h4>}

      <h2 className={css.titleCast}>Cast</h2>
      {movie === null && <h2 className={css.titleCast}>No cast found</h2>}
      <ul className={css.wrapperCast}>
        <CastListItem movie={movie} />
      </ul>
      <ScrollBtnUp />
    </>
  );
};

export default Cast;
