import FilmsByGenre from 'components/FilmsByGenre/FilmsByGenre';
import GenersListBtn from 'components/GenersListBtn/GenersListCheckbox';
import React, { useState } from 'react';
import css from './Geners.module.css';

const Geners = () => {
  const [geners, setGeners] = useState('28');

  const handleDataFromChild = data => {
    setGeners(data);
  };

  return (
    <section>
      <div className={css.container}>
        <GenersListBtn idFromChild={handleDataFromChild} />
        <FilmsByGenre idSearch={geners} />
      </div>
    </section>
  );
};

export default Geners;
