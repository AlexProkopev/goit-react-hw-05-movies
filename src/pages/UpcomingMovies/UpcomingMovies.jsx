import React, { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom';
import { fetchUpcoming } from 'services/fetchUpcoming'

const UpcomingMovies = () => {

    // setisLoading,
    // setMovies,
    // setIsError,
    // searchString

    const [movie, setMovie] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const location = useLocation();
  const locationBack = useRef(location.state?.from ?? '/');
  const currentMovies = `https://api.themoviedb.org/3/movie/upcoming?api_key=e9b50bda4ce56f3b360f447ed6508c77`;
  console.log(isLoading,isError,locationBack);

    useEffect(()=> {
        fetchUpcoming(setisLoading,setMovie,setIsError,currentMovies)
    },[currentMovies])

    console.log(movie);
  return (
    <section>
        <h2>СЕКЦИЯ НА ДОРАБОТКЕ</h2>
        <ul>
            {movie.map(({ id, poster_path, original_title, overview, release_date, vote_average }) => {
                return (
                    <li key={id}>
                        {/* <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt={original_title} /> */}
                        <div>
                            <h3>{original_title}</h3>
                            <p>{overview}</p>
                            <span>{release_date}</span>
                            <span>{vote_average}</span>
                        </div>
                    </li>
                )
            })}
        </ul>
    </section>
  )
}

export default UpcomingMovies