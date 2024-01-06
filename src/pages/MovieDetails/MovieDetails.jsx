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
import IconGoBack from 'components/IconGoBack/IconGoBack';

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Loader = lazy(() => import('components/Loader/Loader'));

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isReviewsVisible, setIsReviewsVisible] = useState(false);
  const location = useLocation();
  const locationBack = useRef(location.state?.from ?? '/');
  const currentMovies = `https://api.themoviedb.org/3/movie/${movieId}?api_key=e9b50bda4ce56f3b360f447ed6508c77`;

  useEffect(() => {
    fetchDetails(setisLoading, setMovie, setIsError, currentMovies);
    return () => {
      setIsReviewsVisible(false);
      setIsVisible(false);
    };
  }, [setMovie, currentMovies]);

  const toggleCastVisibility = () => {
    setIsReviewsVisible(false);
    setIsVisible(!isVisible);
  };

  const toggleReviewsVisibility = () => {
    setIsReviewsVisible(!isReviewsVisible);
    setIsVisible(false);
  };

  return (
    <section>
      <Link to={locationBack.current} className={css.goBackBtn}>
        <IconGoBack /> Go back
      </Link>
      {isLoading && <Loader />}
      {isError && <h4>Server Error</h4>}
      <div className={css.wrapperMovie}>
        <MovieDetalsComponent movie={movie} />
      </div>
      <div className={css.wrapperLink}>
        <NavLink
          to="cast"
          className={css.linkCastRewievs}
          state={{ from: location }}
          onClick={toggleCastVisibility}
        >
          Cast
        </NavLink>
        <NavLink
          to="rewievs"
          className={css.linkCastRewievs}
          state={{ from: location }}
          onClick={toggleReviewsVisibility}
        >
          Rewievs
        </NavLink>
      </div>
      <>
        <Suspense fallback={<Loader />}>
          <Routes>
            {isVisible && <Route path="cast/*" element={<Cast />} />}
            {isReviewsVisible && <Route path="rewievs" element={<Reviews />} />}
          </Routes>
        </Suspense>
      </>
    </section>
  );
};

export default MovieDetails;
