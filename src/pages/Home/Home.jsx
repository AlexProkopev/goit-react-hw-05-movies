import axios from 'axios'
import PopularyMoviesList from 'components/PopularyMoviesList/PopularyMoviesList'
import React, { useEffect, useState } from 'react'
import css from "./Home.module.css"
import Loader from 'components/Loader/Loader'


const Home = () => {

    const [isLoading, setisLoading] = useState(false)
    const [isError, setIsError] = useState(false)
    const [movies, setMovies] = useState([])

           
      const searchString = "https://api.themoviedb.org/3/movie/popular?api_key=e9b50bda4ce56f3b360f447ed6508c77"

   
  
    


    const fetchMovies = async () => {
        try {
            setisLoading(true)

            const response = await axios.get(searchString)

            setMovies(response.data.results)
            setIsError(false)

           
        } catch (error) {
            setIsError(true)
            
        } finally{
            setisLoading(false)
        }
    }



   useEffect(() => {
        fetchMovies()
    }, [])



  return (
    <>
    
    <h1 className={css.title}>Популярное на сегодня</h1>
    {isLoading && <Loader/>}
    {isError && <h4>Errore</h4>}
    <ul className={css.listPopulary}>
        <PopularyMoviesList data={movies} /> 
    </ul>
    </>
  )
}

export default Home