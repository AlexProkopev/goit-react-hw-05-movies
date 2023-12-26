import React from 'react';
import { NavLink } from 'react-router-dom';
import css from './Layout.module.css';
import Footer from 'components/Footer/Footer';

const Layout = ({ children }) => {
  return (
    <div className={css.wrapper}>
      <header className={css.wrapHeader}>
        <NavLink className={css.linkPage} to="/">
          Home
        </NavLink>
        <NavLink to="/upcoming-movies" className={css.linkPage}>
        Upcoming 
        </NavLink>
        <NavLink to="/movies" className={css.linkPage}>
          Search movies
        </NavLink>
      </header>
      <main className={css.mainContent}>{children}</main>

      <footer id='footer' className={css.footerContainer}>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
