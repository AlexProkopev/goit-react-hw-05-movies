import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import css from "./FilmsByGenreItem.module.css"
import { defaultImgHome } from 'services/defaultImg';

const FilmsByGenreItem = ({films}) => {
    const location = useLocation()
  return (
    <> {films !== null &&
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
        })}</>
  )
}

export default FilmsByGenreItem