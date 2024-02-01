import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { defaultImgHome } from 'services/defaultImg';
import { fetchDetails } from 'services/fetchDetails';
import css from './FilmsByGenre.module.css';
import Loader from 'components/Loader/Loader';
import PaginationBtnBefore from 'components/PaginationBtn/PaginationBtnBefore';
import PaginationBtnNext from 'components/PaginationBtn/PaginationBtnNext';
import ScrollBtnDown from 'components/ScrollBtnDown/ScrollBtnDown';
import ScrollBtnUp from 'components/ScrollBtnUp/ScrollBtnUp';
import { handleChangePageBefore, handleChangePageNext } from 'components/PaginationBtn/changePage';

const FilmsByGenre = ({ idSearch }) => {
  const [films, setFilms] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [page, setPage] = useState(1);
  const location = useLocation();
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
        {films !== null &&
          films.results.map(({ id, poster_path, title }) => {
            return (
              <li key={id} className={css.itemMovieList}>
                <Link
                  to={`/geners/${id}`}
                  state={{ from: location }}
                  className={css.linkMovieGenre}
                >
                  <img
                    width="300"
                    height="300"
                    src={
                      poster_path
                        ? `https://image.tmdb.org/t/p/original/${poster_path}`
                        : defaultImgHome
                    }
                    alt={title}
                    className={css.imgPoster}
                  />
                  <p className={css.titleMovie}>{title}</p>
                </Link>
              </li>
            );
          })}
      </ul>
      <div className={css.wrapperPaginationBtn}>
        {films !== null && films.page !== 1 && (
          <PaginationBtnBefore
            handleChangePageBefore={()=> handleChangePageBefore(setPage)}
          />
        )}
        {films !== null && films.page !== films.total_pages && (
          <PaginationBtnNext handleChangePageNext={()=> handleChangePageNext(setPage)} />
        )}
      </div>
      {!isLoading && <ScrollBtnUp />}
    </>
  );
};

export default FilmsByGenre;
