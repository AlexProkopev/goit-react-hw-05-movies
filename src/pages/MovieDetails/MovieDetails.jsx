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
  const location = useLocation();
  const locationBack = useRef(location.state?.from ?? '/');
  const currentMovies = `https://api.themoviedb.org/3/movie/${movieId}?api_key=e9b50bda4ce56f3b360f447ed6508c77`;

console.log(location);
 
  useEffect(() => {
    fetchDetails(setisLoading, setMovie, setIsError, currentMovies);
  }, [setMovie, currentMovies]);



  return (
    <section>
      <Link to={locationBack.current} className={css.goBackBtn}>
        <IconGoBack /> Go back
      </Link>
      {isLoading && <Loader />}
      {isError && <h4>Ошибка сервера</h4>}
      <div className={css.wrapperMovie}>
        <MovieDetalsComponent movie={movie}/>
      </div>
      <div className={css.wrapperLink}>
        <NavLink to="cast" className={css.linkCastRewievs}  state={{ from: location }}>
          Cast
        </NavLink>
        <NavLink to="rewievs" className={css.linkCastRewievs} state={{ from: location }}>
          Rewievs
        </NavLink>
      </div>
      <>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="cast" element={<Cast />} />
            <Route path="rewievs" element={<Reviews  />} />
          </Routes>
        </Suspense>
      </>
    </section>
  );
};

export default MovieDetails;
