import React from 'react';
import css from './ScrollBtnDown.module.css';

const ScrollBtnDown = () => {
  const scrollHandler = () => {
    window.scrollBy({
      top: document.documentElement.scrollHeight - window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <button type="button" className={css.scrollBtn} onClick={scrollHandler}>
      Down{' '}
    </button>
  );
};

export default ScrollBtnDown;
