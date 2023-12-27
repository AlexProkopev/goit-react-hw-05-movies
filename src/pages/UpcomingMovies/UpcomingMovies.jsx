import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { fetchUpcoming } from 'services/fetchUpcoming';
import css from './UpcomingMovies.module.css';
import { defaultImgHome } from 'services/defaultImg';
import Loader from 'components/Loader/Loader';

const UpcomingMovies = () => {

  const [movie, setMovie] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  const currentMovies = `https://api.themoviedb.org/3/movie/upcoming?api_key=e9b50bda4ce56f3b360f447ed6508c77`;


  useEffect(() => {
    fetchUpcoming(setisLoading, setMovie, setIsError, currentMovies);
  }, [currentMovies]);

  


  return (
    <section className={css.sectionUpcoming}>
      {isLoading && <Loader />}
      {isError && <h4>Server Error</h4>}
      <h2 className={css.sectionTitleUpcoming}>Upcoming Movies</h2>
      <ul className={css.listUpcoming}>
        {movie.map(
          ({
            id,
            poster_path,
            original_title,
            overview,
            release_date,
            vote_average,
          }) => {
            return (
              <li key={id} className={css.linkContainer}>
                <Link className={css.link} to={`/upcoming-movies/${id}`}
                state={{ from: location }}
                >
                <img
                  src={
                    poster_path
                      ? `https://image.tmdb.org/t/p/original/${poster_path}`
                      : defaultImgHome
                  }
                  alt={original_title}
                  className={css.imgUpComing}
                />

                <div className={css.contentWrapper}>
                <h3 className={css.titleUpComing}>{original_title}</h3>
                <p className={css.text}>{overview}</p>
                <span className={css.textDate}>{release_date}</span>
                </div>
                </Link>
              </li>
            );
          }
        )}
      </ul>
    </section>
  );
};

export default UpcomingMovies;
