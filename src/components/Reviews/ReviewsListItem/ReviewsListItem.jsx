import React from 'react';
import { defaultImgHome } from 'services/defaultImg';
import css from './ReviewsListItem.module.css';

const ReviewsListItem = ({ reviews }) => {
  return (
    <>
      {' '}
      {reviews !== null &&
        reviews.results.map(
          ({ author, content, author_details: { avatar_path } }) => {
            const numberId = Math.floor(Math.random() * 1000000000);
            return (
              <li className={css.wrapperCard} key={numberId}>
                <div className={css.wrapperUser}>
                  <img
                    className={css.imgRewievs}
                    src={
                      avatar_path
                        ? `https://image.tmdb.org/t/p/w500/${avatar_path}`
                        : defaultImgHome
                    }
                    alt="img posters for movies"
                  />
                  <p className={css.titleName}> {author}:</p>
                </div>
                <p className={css.content}>{content} </p>
              </li>
            );
          }
        )}
    </>
  );
};

export default ReviewsListItem;
