import MovieDetails from 'pages/MovieDetails/MovieDetails'
import React from 'react'
import { Link, Route, Routes, useLocation, useParams } from 'react-router-dom'
import css from "./PopularyMoviesList.module.css"

const PopularyMoviesList = ({data}) => {

  const location = useLocation();
    
    
  return (
    <>
    {data.map(movie=>{
        return (
            <li key={movie.id}>
                <Link to={`/movies/${movie.id}`} state={{from : location}} className={css.linkPopulary}>{movie.original_title}</Link>
            </li>
        )
    })}
    <Routes>
        <Route path="movieDetails" element={<MovieDetails />}/>

        
    </Routes>
    </>
  )
}

export default PopularyMoviesList