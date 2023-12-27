import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';
import Notiflix from 'notiflix';
import Loader from 'components/Loader/Loader';
import { defaultImgHome } from 'services/defaultImg';
import ScrollBtn from 'components/ScrollBtn/ScrollBtn';

const Reviews = () => {
  const { movieId } = useParams();
  const [rewievs, setRewievs] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  
  const currentMovies = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&api_key=e9b50bda4ce56f3b360f447ed6508c77`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setisLoading(true);
        const response = await axios.get(currentMovies);
        setRewievs(response.data.results);
      } catch (error) {
        setIsError(error.mesage);
        Notiflix.Notify.Failure('Operation failed', {
          timeout: 2000,
        });
      } finally {
        setisLoading(false);
      }
    };
    fetchMovies();
  }, [currentMovies]);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <h4>Server error</h4>}
      <ScrollBtn />
      {rewievs.length > 0 ? (
        <h2 className={css.title}>Rewievs</h2>
      ) : (
        <h2 className={css.title}>There are no reviews yet</h2>
      )}
      <ul className={css.wrapperRewievs}>
        {rewievs.map(rewiev => {
          const numberId = Math.floor(Math.random() * 1000000000);
          return (
            <li className={css.wrapperCard} key={numberId}>
              <div className={css.wrapperUser}>
                <img
                  className={css.imgRewievs}
                  src={
                    rewiev.author_details.avatar_path
                      ? `https://image.tmdb.org/t/p/w500/${rewiev.author_details.avatar_path}`
                      : defaultImgHome
                  }
                  alt=""
                />
                <p className={css.titleName}> {rewiev.author}:</p>
              </div>
              <p className={css.content}>{rewiev.content} </p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Reviews;
