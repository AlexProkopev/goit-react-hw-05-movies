import React from 'react'
import css from "./MovieDetailsComponent.module.css"
import { defaultImgHome } from 'services/defaultImg'
import VideoPlayer from 'components/VideoPlayer/VideoPlayer'

const MovieDetalsComponent = ({movie}) => {
  return (
    <>
         <img
          className={css.imgPoster}
          src={
            movie.poster_path
              ? 'https://image.tmdb.org/t/p/w500' + movie.poster_path
              : defaultImgHome
          }
          alt="Poster for Movie"
        />
        <h2 className={css.title}>{movie.original_title}</h2>
        <h2 className={css.descripTitle}>Description:</h2>
        <p className={css.description}>{movie.overview}</p>
        <h2 className={css.descripTitle}>Rating:</h2>
        <p className={css.description}>{movie.vote_average}</p>
        <h2 className={css.descripTitle}>Date: </h2>
        <p className={css.description}>{movie.release_date}</p>
        { movie.genres !== undefined && movie.genres.length > 0 && 
          <>
          <h2 className={css.descripTitle}>Genre:</h2>
          <p className={css.description}>
            {movie.length !== 0 &&
              movie.genres.map((el, index) => (
                <span key={index} className={css.spanMap}> {el.name}. 
                </span>
              ))}
          </p>
          <h2 className={css.titleVideo} >Trailer</h2>
          <VideoPlayer movieId={movie.id}/>
          </>
        }
    </>
  )
}

export default MovieDetalsComponent