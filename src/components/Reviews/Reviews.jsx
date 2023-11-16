import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import css from "./Reviews.module.css"
import Notiflix from 'notiflix';
import Loader from 'components/Loader/Loader';
const Reviews = () => {

  const { movieId } = useParams();


  const [rewievs, setRewievs] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const currentMovies = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&api_key=e9b50bda4ce56f3b360f447ed6508c77`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setisLoading(true);

        const response = await axios.get(currentMovies);
        console.log(response.data.results);

        setRewievs(response.data.results);
        
      } catch (error) {
        setIsError(error.mesage);
        Notiflix.Notify.Failure('Не удалось выполнить операцию');
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
   
    {isLoading && <Loader />}
    {isError && <h4>Ошибка сервера</h4>}
    {rewievs.length > 0 ? <h2 className={css.title}>Rewievs</h2> : <h2 className={css.title}>Пока что отзывов нет</h2>}
    <div className={css.wrapperRewievs}>
      
      {rewievs.map(rewiev => {
        return (
         <div className={css.wrapperCard}>
        <img
                className={css.imgRewievs}
              src={
                rewiev.author_details.avatar_path
                  ? `https://image.tmdb.org/t/p/w500/${rewiev.author_details.avatar_path}`
                  : defaultImg
              }
              alt=""
            />
           <p className={css.titleName}><span className={css.spanName}>Name:</span> {rewiev.author}</p>
          <p className={css.content}><span className={css.spanRewiev}>Rewiev:</span> {rewiev.content}</p>
         </div>
        )
      })}
    </div>
    </>
  )
}

export default Reviews