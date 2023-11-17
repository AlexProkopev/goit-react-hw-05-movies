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
import { fetchDetails } from 'services/fetchDetails';
import MovieDetalsComponent from 'components/MovieDetalsComponent/MovieDetalsComponent';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Loader = lazy(() => import('components/Loader/Loader'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  const locationBack = useRef(location.state?.from ?? '/');
  const currentMovies = `https://api.themoviedb.org/3/movie/${movieId}?api_key=e9b50bda4ce56f3b360f447ed6508c77`;
  const defaultImg =
    'https://rgo.ru/upload/content_block/images/9ca8302358b777e143cd6e314058266b/7065323d0aa2e3fa6e8764c4f57f1655.jpg?itok=sawvdjq3';

  useEffect(() => {
    fetchDetails(setisLoading, setMovie, setIsError, currentMovies);
  }, [setMovie, currentMovies]);

  return (
    <div>
      <Link to={locationBack.current} className={css.linkCastRewievs}>
        Go back
      </Link>
      {isLoading && <Loader />}
      {isError && <h4>Ошибка сервера</h4>}
      <div className={css.wrapperMovie}>
        <MovieDetalsComponent movie={movie} defaultImg={defaultImg} />
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
