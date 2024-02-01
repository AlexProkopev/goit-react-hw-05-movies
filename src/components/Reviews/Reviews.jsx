import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import css from './Reviews.module.css';
import Loader from 'components/Loader/Loader';
import ReviewsListItem from './ReviewsListItem/ReviewsListItem';
import { fetchDetails } from 'services/fetchDetails';
import ScrollBtnDown from 'components/ScrollBtnDown/ScrollBtnDown';
import ScrollBtnUp from 'components/ScrollBtnUp/ScrollBtnUp';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setRevievs] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const currentMovies = `https://api.themoviedb.org/3/movie/${movieId}/reviews?language=en-US&api_key=e9b50bda4ce56f3b360f447ed6508c77`;

  useEffect(() => {
    fetchDetails(setisLoading, setRevievs, setIsError, currentMovies);
    return () => setRevievs(null);
  }, [currentMovies]);

  return (
    <>
      {isLoading && <Loader />}
      {isError && <h4>Server error</h4>}
      <ScrollBtnDown/>
      {reviews !== null ? (
        <h2 className={css.title}>Rewievs</h2>
      ) : (
        <h2 className={css.title}>There are no reviews yet</h2>
      )}
      <ul className={css.wrapperRewievs}>
        <ReviewsListItem reviews={reviews} />
      </ul>
      <ScrollBtnUp/>
    </>
  );
};

export default Reviews;
