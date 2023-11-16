import React from 'react'
import { NavLink } from 'react-router-dom'
import css from "./Layout.module.css"

const Layout = ({children}) => {
  return (
    <div>

<header className={css.wrapHeader}>
     <NavLink className={css.linkPage} to="/">Главная</NavLink>
     <NavLink to="/movies" className={css.linkPage} >Поиск фильмов</NavLink>

</header>
<main>
    {children}
</main>
     
    </div>
  )
}

export default Layout