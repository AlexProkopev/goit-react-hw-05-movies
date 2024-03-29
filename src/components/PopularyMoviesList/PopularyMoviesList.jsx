import MovieDetails from 'pages/MovieDetails/MovieDetails';
import React from 'react';
import { Link, Route, Routes, useLocation } from 'react-router-dom';
import css from './PopularyMoviesList.module.css';
import { defaultImgHome } from 'services/defaultImg';

const {linkContainer,linkPopulary,imgPoster,originalName} = css

const PopularyMoviesList = ({ data }) => {
  const location = useLocation();
  return (
    <>
      {data !== null &&
        data.results.map(({ id, original_title, poster_path }) => {
          return (
            <li key={id} className={linkContainer}>
              <Link
                to={`/movies/${id}`}
                state={{ from: location }}
                className={linkPopulary}
              >
                <img
                  className={imgPoster}
                  src={
                    poster_path
                      ? 'https://image.tmdb.org/t/p/w500' + poster_path
                      : defaultImgHome
                  }
                  alt="Img Poster for Movie"
                />
                <span className={originalName}>{original_title}</span>
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
