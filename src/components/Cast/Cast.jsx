import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useParams } from 'react-router-dom';
import css from './Cast.module.css';
import Loader from 'components/Loader/Loader';
import { defaultImgHome } from 'services/defaultImg';
import ScrollBtn from 'components/ScrollBtn/ScrollBtn';

const Cast = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  console.log('locationBack: ', location);
  const currentMovies = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=e9b50bda4ce56f3b360f447ed6508c77`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setisLoading(true);
        const response = await axios.get(currentMovies);
        setMovie([...response.data.cast]);
      } catch (error) {
        setIsError(error.mesage);
      } finally {
        setisLoading(false);
      }
    };
    fetchMovies();
  }, [currentMovies]);

  return (
    <>
      <ScrollBtn />
      {isLoading && <Loader />}
      {isError && <h4>Server error</h4>}
      <h2 className={css.titleCast}>Cast</h2>
      <ul className={css.wrapperCast}>
        {movie.map(cast => {
          return (
            <li key={cast.cast_id} className={css.linkContainer}>
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
              <p className={css.titleCastCharacter}>
                Character: {cast.character}
              </p>
            </li>
          );
        })}
      </ul>
      <NavLink className={css.btnHide} to={location.state.from.pathname}>
        Hide
      </NavLink>
    </>
  );
};

export default Cast;
