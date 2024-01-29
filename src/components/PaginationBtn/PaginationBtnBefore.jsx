import React from 'react'
import css from "./PaginationBtnBefore.module.css"

const PaginationBtnBefore = ({handleChangePageBefore}) => {
  return (
    <button type="button"onClick={()=>{handleChangePageBefore()
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
          })}} className={css.beforePageBtn}>
          Before page
        </button>
  )
}

export default PaginationBtnBefore