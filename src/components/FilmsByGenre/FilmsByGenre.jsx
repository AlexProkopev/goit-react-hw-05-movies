import React, { useEffect, useState } from 'react';
import { fetchDetails } from 'services/fetchDetails';
import css from './FilmsByGenre.module.css';
import Loader from 'components/Loader/Loader';
import PaginationBtnBefore from 'components/PaginationBtn/PaginationBtnBefore';
import PaginationBtnNext from 'components/PaginationBtn/PaginationBtnNext';
import ScrollBtnDown from 'components/ScrollBtnDown/ScrollBtnDown';
import ScrollBtnUp from 'components/ScrollBtnUp/ScrollBtnUp';
import {
  handleChangePageBefore,
  handleChangePageNext,
} from 'components/PaginationBtn/changePage';
import FilmsByGenreItem from './FilmsByGenreItem/FilmsByGenreItem';

const FilmsByGenre = ({ idSearch }) => {
  const [films, setFilms] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);

  const currentStringURI = `https://api.themoviedb.org/3/discover/movie?api_key=e9b50bda4ce56f3b360f447ed6508c77&language=en-US&sort_by=popularity.desc&include_adult=false&page=${page}&with_genres=${idSearch}`;

  useEffect(() => {
    fetchDetails(setIsLoading, setFilms, setIsError, currentStringURI);

    return () => {
      setFilms(null);
    };
  }, [currentStringURI]);

  return (
    <>
      {isError && <p>Error</p>}
      {isLoading && <Loader />}
      <ScrollBtnDown />
      <ul className={css.listGenreMovie}>
        <FilmsByGenreItem films={films} />
      </ul>
      <div className={css.wrapperPaginationBtn}>
        {films !== null && films.page !== 1 && (
          <PaginationBtnBefore
            handleChangePageBefore={() => handleChangePageBefore(setPage)}
          />
        )}
        {films !== null && films.page !== films.total_pages && (
          <PaginationBtnNext
            handleChangePageNext={() => handleChangePageNext(setPage)}
          />
        )}
      </div>
      {!isLoading && <ScrollBtnUp />}
    </>
  );
};

export default FilmsByGenre;
