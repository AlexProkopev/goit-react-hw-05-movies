import { Route, Routes } from 'react-router-dom';
import css from './App.module.css';
import { Suspense, lazy } from 'react';
import Layout from './Layout/Layout';
import Loader from './Loader/Loader';
import UpcomingMovies from 'pages/UpcomingMovies/UpcomingMovies';
import {InСinemas} from 'pages/InСinemas/InСinemas';

const Home = lazy(() => import('pages/Home/Home'));
const Movies = lazy(() => import('pages/Movies/Movies'));
const MovieDetails = lazy(() => import('pages/MovieDetails/MovieDetails'));

export const App = () => {
  
  return (
    <div className={css.container}>
      
      <Layout>
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/*" element={<Home />} />
            <Route path="/movies" element={<Movies />} />
            <Route path="/movies/:movieId/*" element={<MovieDetails />} />
            <Route path="/upcoming-movies" element={<UpcomingMovies />} />
            <Route path="/upcoming-movies/:movieId/*" element={<MovieDetails />} />
            <Route path="/in-cinemas" element={<InСinemas/>} />
            <Route path="/in-cinemas/:movieId/*" element={<MovieDetails />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
      </Layout>
    </div>
  );
};
