import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { defaultImgHome } from 'services/defaultImg';
import { fetchDetails } from 'services/fetchDetails';
import css from './CastDetails.module.css';
import MoviesWithActor from 'components/MoviesWithActor/MoviesWithActor';
import Loader from 'components/Loader/Loader';


const CastDetails = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [castDetails, setCastDetails] = useState(null);
  const [movieWithActor, setMovieWithActor] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('query');
  const location = useLocation();
  const state = location.state;

  useEffect(() => {
    const actorId = state || query;

    const searchString = `https://api.themoviedb.org/3/person/${actorId}?api_key=e9b50bda4ce56f3b360f447ed6508c77`;
    const searchMovieWithActor = `https://api.themoviedb.org/3/person/${actorId}/movie_credits?api_key=e9b50bda4ce56f3b360f447ed6508c77`;

    fetchDetails(setIsLoading, setCastDetails, setIsError, searchString);
    fetchDetails(
      setIsLoading,
      setMovieWithActor,
      setIsError,
      searchMovieWithActor
    );

    setSearchParams({ query: actorId });
  }, [setSearchParams, state, query]);

  return (
    <section>
      {isLoading && <Loader />}
      {isError && <h4>Server error</h4>}

      {castDetails !== null && (
        <div className={css.wrapperCast}>
          <img
            className={css.imgPoster}
            src={
              castDetails.profile_path
                ? 'https://image.tmdb.org/t/p/w500' + castDetails.profile_path
                : defaultImgHome
            }
            alt="Img Poster for Movie"
          />
          <h2 className={css.title}>Name: {castDetails.name}</h2>
          <p className={css.descriptions}>{castDetails.biography}</p>
          <p className={css.descriptions}>{castDetails.place_of_birth}</p>

          <h2 className={css.title}>Films with this actor</h2>

          <MoviesWithActor movies={movieWithActor} />
        </div>
      )}
    </section>
  );
};

export default CastDetails;
