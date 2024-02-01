import React from 'react'
import { Link } from 'react-router-dom';
import css from "./CastListItem.module.css"
import { defaultImgHome } from 'services/defaultImg';

const CastListItem = ({movie}) => {
  return (
    <>{movie !== null && movie.cast.map(cast => {
        return (
          <li key={cast.cast_id} className={css.linkContainer}>
            <Link to="/cast-details" state={cast.id} className={css.linkCast}>
              <img
                className={css.imgCast}
                src={
                  cast.profile_path
                    ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                    : defaultImgHome
                }
                alt={cast.title}
              />
              <h2 className={css.titleCastName}>{cast.name}</h2>
              <p className={css.titleCastCharacter}>{cast.character}</p>
            </Link>
          </li>
        );
      })}</>
  )
}

export default CastListItem