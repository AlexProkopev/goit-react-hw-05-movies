import React, { useEffect, useState } from 'react';
import css from './Movies.module.css';
import axios from 'axios';
import { Link, useLocation, useSearchParams } from 'react-router-dom';
import Loader from 'components/Loader/Loader';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import FormSearchComponent from 'components/FormSearchComponent/FormSearchComponent';

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
        `Найдено ${response.data.results.length} фильмов по вашему запросу`,
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

    const value = e.currentTarget.elements.search.value;
    setSearchParams({ query: value });

    setValueSearch(value);
    e.currentTarget.reset();
  };

  useEffect(() => {
    if (query !== null) fetchMovies(query);
  }, [valueSearch, query]);



  const moviesMap = movies !== null && movies.map(({ id, title }) => {
    return (
      <div key={id}>
        <Link
          state={{ from: location }}
          to={`/movies/${id}/*`}
          className={css.linkPopulary}
        >
          {title}
        </Link>
      </div>
    );
  }) // Результат поиска фильмов

  return (
    <div>
      <FormSearchComponent submit={submit}/>
      {isLoading && <Loader />}
      {isError && <h4>Ошибка сервера</h4>}
      <div className={css.listPopulary}>
        {movies === null && <h2>Начните поиск</h2>}
        {movies !== null && movies.length === 0 && <h4>Ничего не найдено</h4>}
        {moviesMap}
      </div>
    </div>
  );
};

export default Movies;
