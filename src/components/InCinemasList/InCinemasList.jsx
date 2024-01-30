import React from 'react';
import css from './InCinemasList.module.css';
import { Link, useLocation } from 'react-router-dom';
import { defaultImgHome } from 'services/defaultImg';

const InCinemasList = ({
  id,
  poster_path,
  original_title,
  release_date,
  vote_average,
}) => {
  const location = useLocation();

  return (
    <li key={id} className={css.linkContainer}>
      <Link
        className={css.link}
        to={`/in-cinemas/${id}`}
        state={{ from: location }}
      >
        <img
          src={
            poster_path
              ? `https://image.tmdb.org/t/p/original/${poster_path}`
              : defaultImgHome
          }
          alt={original_title}
          className={css.imgCinemas}
        />
        <div className={css.contentWrapper}>
          <h2 className={css.titleCinemas}>{original_title}</h2>

          <p className={css.text}>Will start showing:</p>
          <span className={css.text}>{release_date}</span>
          <p className={css.text}>Rating: {vote_average}</p>
        </div>
      </Link>
    </li>
  );
};

export default InCinemasList;
