import React from 'react'
import css from "./ScrollBtnUp.module.css"

const scrollUpHandler = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

const ScrollBtnUp = () => {
  return (
    <button type="button" className={css.scrollBtn} onClick={scrollUpHandler}>Up </button>
  )
}

export default ScrollBtnUp