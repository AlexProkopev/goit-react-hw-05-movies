import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import css from './Cast.module.css';
import Loader from 'components/Loader/Loader';
import { defaultImgHome } from 'services/defaultImg';
import ScrollBtn from 'components/ScrollBtn/ScrollBtn';
import ScrollBtnUp from 'components/ScrollBtnUp/ScrollBtnUp';
import ScrollBtnDown from 'components/ScrollBtnDown/ScrollBtnDown';

const Cast = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const currentMovies = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=e9b50bda4ce56f3b360f447ed6508c77`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setIsLoading(true);
        const response = await axios.get(currentMovies);
        setMovie([...response.data.cast]);
      } catch (error) {
        setIsError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    fetchMovies();
  }, [currentMovies]);

  return (
    <>
      <ScrollBtn />
      {movie.length > 30 && <ScrollBtnDown />}
      {isLoading && <Loader />}
      {isError && <h4>Server error</h4>}

      <h2 className={css.titleCast}>Cast</h2>
      {!movie.length && <h2 className={css.titleCast}>No cast found</h2>}
      <ul className={css.wrapperCast}>
        {movie.map(cast => {
          return (
            <li key={cast.cast_id} className={css.linkContainer}>
              <Link to="/cast-details" state={cast.id} className={css.linkCast}>
                <img
                  className={css.imgCast}
                  src={
                    cast.profile_path
                      ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                      : defaultImgHome
                  }
                  alt={cast.title}
                />
                <h2 className={css.titleCastName}>{cast.name}</h2>
                <p className={css.titleCastCharacter}>{cast.character}</p>
              </Link>
            </li>
          );
        })}
      </ul>
      {movie.length > 30 && <ScrollBtnUp />}
    </>
  );
};

export default Cast;
