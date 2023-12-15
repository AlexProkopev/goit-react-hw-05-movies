import MovieDetails from 'pages/MovieDetails/MovieDetails';
import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import css from './PopularyMoviesList.module.css';

const PopularyMoviesList = ({ data }) => {
  const location = useLocation();
  const defaultImgHome =
    'https://rgo.ru/upload/content_block/images/9ca8302358b777e143cd6e314058266b/7065323d0aa2e3fa6e8764c4f57f1655.jpg?itok=sawvdjq3';

  return (
    <>
      {data !== null &&
        data.map(({ id, original_title, poster_path }) => {
          console.log(poster_path);
          return (
            <li key={id} className={css.linkContainer}>
              <Link
                to={`/movies/${id}`}
                state={{ from: location }}
                className={css.linkPopulary}
              >
                <img
                  className={css.imgPoster}
                  src={
                    poster_path
                      ? 'https://image.tmdb.org/t/p/w500' + poster_path
                      : defaultImgHome
                  }
                  alt=""
                />
                <span className={css.originalName}>{original_title}</span>
              </Link>
            </li>
          );
        })}
      <Routes>
        <Route path="movieDetails" element={<MovieDetails />} />
      </Routes>
    </>
  );
};

export default PopularyMoviesList;
