import React from 'react'
import css from "./MovieDetailsComponent.module.css"

const MovieDetalsComponent = ({movie,defaultImg}) => {
  return (
    <div>
         <img
          className={css.imgPoster}
          src={
            movie.poster_path
              ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
              : defaultImg
          }
          alt=""
        />
        <h2 className={css.title}>{movie.original_title}</h2>
        <h2>Description:</h2>
        <p className={css.description}>{movie.overview}</p>
        <h2>Rating:</h2>
        <p className={css.description}>{movie.vote_average}</p>
        <h2>Genre:</h2>
        <p className={css.description}>
          {movie.length !== 0 &&
            movie.genres.map((el, index) => (
              <span key={index} className={css.spanMap}>
                {el.name}.
              </span>
            ))}
        </p>
    </div>
  )
}

export default MovieDetalsComponent