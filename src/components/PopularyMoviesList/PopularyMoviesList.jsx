import MovieDetails from 'pages/MovieDetails/MovieDetails'
import React from 'react'
import { Link, Route, Routes, useLocation } from 'react-router-dom'
import css from "./PopularyMoviesList.module.css"

const PopularyMoviesList = ({data}) => {

  const location = useLocation();
    
    
  return (
    <>
    { data !== null && data.map(({id,original_title})=>{
        return (
            <li key={id}>
                <Link to={`/movies/${id}`} state={{from : location}} className={css.linkPopulary}>{original_title}</Link>
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