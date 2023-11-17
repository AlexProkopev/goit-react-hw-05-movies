import React from 'react'
import css from "./FormSearchComponent.module.css"

const FormSearchComponent = ({submit}) => {
  return (
    <form className={css.wraperSearch} onSubmit={submit}>
        <input
          className={css.inputSearch}
          type="text"
          placeholder="Начните поиск"
          name="search"
          required
        />
        <button type="submit" className={css.btnSubmit}>
          Поиск
        </button>
      </form>
  )
}

export default FormSearchComponent