import React, { useEffect, useState } from 'react';
import css from './Movies.module.css';
import axios from 'axios';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import FormSearchComponent from 'components/FormSearchComponent/FormSearchComponent';
import IconSearch from 'components/IconSearch/IconSearch';
import { defaultImgHome } from 'services/defaultImg';

const Movies = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [movies, setMovies] = useState(null);
  const [valueSearch, setValueSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const query = searchParams.get('query');

  const fetchMovies = async value => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&api_key=e9b50bda4ce56f3b360f447ed6508c77`
      );

      setMovies(response.data.results);
      setIsError(false);
      Notify.success(
        `Found ${response.data.results.length} movies matching your request`,
        {
          timeout: 1000,
        }
      );
    } catch (error) {
      Notify.failure('Qui timide rogat docet negare');
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const submit = e => {
    e.preventDefault();

    const value = e.currentTarget.elements.search.value.trim();

    if (value === '') {
      alert('Cannot be an empty string');
      return;
    }

    setSearchParams({ query: value });
    setValueSearch(value);
    e.currentTarget.reset();
  };

  useEffect(() => {
    if (query !== null) fetchMovies(query);
  }, [valueSearch, query]);

  const moviesMap =
    movies !== null &&
    movies.map(({ id, title, poster_path }) => {
      return (
        <li key={id} className={css.linkContainer}>
          <Link
            state={{ from: location }}
            to={`/movies/${id}/*`}
            className={css.linkPopulary}
          >
            <img
              className={css.imgPoster}
              src={
                poster_path
                  ? 'https://image.tmdb.org/t/p/w500' + poster_path
                  : defaultImgHome
              }
              alt="Img Poster for Movie"
            />
            <span className={css.originalName}>{title}</span>
          </Link>
        </li>
      );
    });

  return (
    <section>
      <FormSearchComponent submit={submit} />
      {isLoading && <Loader />}
      {isError && <h4>Ошибка сервера</h4>}
      <>
        {movies === null && (
          <h2 className={css.startSerchTitle}>
            Start your search <IconSearch />
          </h2>
        )}
        {movies !== null && movies.length === 0 && (
          <h4 className={css.startSerchTitle}>Nothing found</h4>
        )}
        <ul className={css.listPopulary}>{moviesMap}</ul>
      </>
    </section>
  );
};

export default Movies;
