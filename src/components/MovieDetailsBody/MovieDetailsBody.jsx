import React from 'react'
import css from "./MovieDetailsBody.module.css"

const MovieDetailsBody = ({movie}) => {
  return (
    <div>  
        <img
    className={css.imgPoster}
      src={'https://image.tmdb.org/t/p/original/' + movie.poster_path}
      alt=""
    />
    <h2 className={css.title}>{movie.original_title}</h2>
    <p className={css.description}>{movie.overview}</p></div>
  )
}

export default MovieDetailsBody