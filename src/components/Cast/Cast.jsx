import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import css from "./Cast.module.css"
import Loader from 'components/Loader/Loader';

const Cast = () => {
  const { movieId } = useParams();
  


  const [movie, setMovie] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const currentMovies = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=e9b50bda4ce56f3b360f447ed6508c77`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setisLoading(true);

        const response = await axios.get(currentMovies);

        setMovie([...response.data.cast]);
        
      } catch (error) {
        setIsError(error.mesage);
      } finally {
        setisLoading(false);
      }
    };
    fetchMovies();
  }, [currentMovies]);

  

const defaultImg =
    'https://rgo.ru/upload/content_block/images/9ca8302358b777e143cd6e314058266b/7065323d0aa2e3fa6e8764c4f57f1655.jpg?itok=sawvdjq3';

  
  return (
    
    <>
    {isLoading && <Loader/>}
    {isError && <h4>Ошибка на сервере</h4>}
    <h2 className={css.titleCast} >Cast</h2>
    <div className={css.wrapperCast} >

      
    
      
      {
        movie.map(cast => {
          return (
            <div key={cast.cast_id} className={css.wrapperCardCast}>
                <img
                className={css.imgCast}
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/w500/${cast.profile_path}`
                  : defaultImg
              }
              alt={cast.title}
            />
              <h2 className={css.titleCast}>{cast.name}</h2>
              <p className={css.titleCast}>Character: {cast.character}</p>
            </div>
          )
        })
      }
    </div>
    </>
    
  )
}

export default Cast