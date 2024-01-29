import React from 'react'
import css from "./PaginationBtnNext.module.css"

const PaginationBtnNext = ({handleChangePageNext}) => {
  return (
    <button type="button" onClick={()=>{handleChangePageNext()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })}} className={css.nextPageBtn}>
    Next page
  </button>
  )
}

export default PaginationBtnNext