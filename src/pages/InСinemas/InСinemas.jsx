import React, { useEffect, useState } from 'react'
import { fetchMovies } from 'services/fetchMovie'
import css from "./InСinemas.module.css"
import InCinemasList from 'components/InCinemasList/InCinemasList';

import Loader from 'components/Loader/Loader';

export const InСinemas = () => {

    const [movies, setMovie] = useState([]);
    const [isLoading, setisLoading] = useState(false);
    const [isError, setIsError] = useState(false);
   
    const currentMovies = `https://api.themoviedb.org/3/movie/now_playing?api_key=e9b50bda4ce56f3b360f447ed6508c77`;

    useEffect(()=>{
        fetchMovies(setisLoading,setMovie,setIsError,currentMovies)
    },[currentMovies])

  
  return (
    <section className={css.sectionCinemas}>
        {isLoading && <Loader />}
        {isError && <h4>Server Error</h4>}
        <h2 className={css.sectionTitleCinemas}>Now In Cinemas</h2>
    <ul className={css.listCinemas}>
      {movies.map(
        ({
          id,
          poster_path,
          original_title,
          overview,
          release_date,
          vote_average,
        }) => (
          <InCinemasList
            key={id}
            id={id}
            poster_path={poster_path}
            original_title={original_title}
            overview={overview}
            release_date={release_date}
            vote_average={vote_average}
          />
        )
      )}
    </ul>
  </section>
  )
}

