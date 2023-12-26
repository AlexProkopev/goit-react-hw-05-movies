import React from 'react'
import css from "./FormSearchComponent.module.css"

const FormSearchComponent = ({submit}) => {
  return (
    <form className={css.wraperSearch} onSubmit={submit}>
        <input
          className={css.inputSearch}
          type="text"
          placeholder="Start your search"
          name="search"
          required
        />
        <button type="submit" className={css.btnSubmit}>
        Search
        </button>
      </form>
  )
}

export default FormSearchComponent