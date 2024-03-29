import PopularyMoviesList from 'components/PopularyMoviesList/PopularyMoviesList';
import React, { useEffect, useState } from 'react';
import css from './Home.module.css';
import Loader from 'components/Loader/Loader';
// import { fetchMovies } from 'services/fetchMovie';
import ScrollBtnDown from 'components/ScrollBtnDown/ScrollBtnDown';
import ScrollBtnUp from 'components/ScrollBtnUp/ScrollBtnUp';
import { fetchDetails } from 'services/fetchDetails';


const Home = () => {
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [movies, setMovies] = useState(null);
  const currentStringURI =
    'https://api.themoviedb.org/3/movie/popular?api_key=e9b50bda4ce56f3b360f447ed6508c77';

  useEffect(() => {
    fetchDetails(setisLoading, setMovies, setIsError, currentStringURI);
  }, []);

  return (
    <section>
     <div className={css.container}>
     <h1 className={css.title}>Popular today</h1>
      {isLoading && <Loader />}
      {isError && <h4>Errore</h4>}
      <ScrollBtnDown/>
      <ul className={css.listPopulary}>
        <PopularyMoviesList data={movies} />
      </ul>
      <ScrollBtnUp/>
     </div>
    </section>
  );
};

export default Home;
