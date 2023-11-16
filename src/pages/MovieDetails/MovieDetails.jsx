import axios from 'axios';
import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import {
  Link,
  NavLink,
  Route,
  Routes,
  useLocation,
  useParams,
} from 'react-router-dom';
import css from './MovieDetails.module.css';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Loader = lazy(() => import('components/Loader/Loader'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const location = useLocation();
  // const locationBack = location.state !== null && location.state.from.pathname

  const locationBack = useRef(location.state?.from ?? '/');

  const currentMovies = `https://api.themoviedb.org/3/movie/${movieId}?api_key=e9b50bda4ce56f3b360f447ed6508c77`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setisLoading(true);

        const response = await axios.get(currentMovies);

        setMovie(response.data);
      } catch (error) {
        setIsError(error.mesage);
      } finally {
        setisLoading(false);
      }
    };
    fetchMovies();
  }, [currentMovies]);

  const defaultImg =
  'https://rgo.ru/upload/content_block/images/9ca8302358b777e143cd6e314058266b/7065323d0aa2e3fa6e8764c4f57f1655.jpg?itok=sawvdjq3';


  return (
    <div>
      <Link to={locationBack.current} className={css.linkCastRewievs}>
        Go back
      </Link>

      {isLoading && <Loader />}
      {isError && <h4>Ошибка сервера</h4>}

      <div className={css.wrapperMovie}>
      {/* <img
          className={css.imgPoster}
          src={'https://image.tmdb.org/t/p/w500' + movie.poster_path}
          alt=""
        /> */}

           <img
                className={css.imgPoster}
              src={
                movie.poster_path
                  ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
                  : defaultImg
              }
              alt=""
            />
        <h2 className={css.title}>{movie.original_title}</h2>
        <h2>Description:</h2>
        <p className={css.description}>{movie.overview}</p>
        <h2>Rating:</h2>
        <p className={css.description}>{movie.vote_average}</p>
        <h2>Genre:</h2>
        <p className={css.description}>{movie.length !== 0 && movie.genres.map((el,index)=> <span key={index} className={css.spanMap}>{el.name}.</span> )}</p>
      </div>
      <div className={css.wrapperLink}>
        <NavLink to="cast" className={css.linkCastRewievs}>
          Cast
        </NavLink>
        <NavLink to="rewievs" className={css.linkCastRewievs}>
          Rewievs
        </NavLink>
      </div>

      <div>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="rewievs" element={<Reviews />} />
          </Routes>
        </Suspense>
      </div>
    </div>
  );
};

export default MovieDetails;
