import React from 'react'
import css from "./ScrollBtn.module.css"

const ScrollBtn = () => {
    const scronHendler = () => {
        window.scrollBy({
          top: window.innerHeight,
          behavior: 'smooth',
        });
      };
  
  return (
    <button onClick={scronHendler} type="button" className={css.scrollBtn}>
          Down one Block
        </button>
  )
}

export default ScrollBtn