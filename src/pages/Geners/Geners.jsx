import FilmsByGenre from 'components/FilmsByGenre/FilmsByGenre';
import GenersListBtn from 'components/GenersListBtn/GenersListCheckbox'
import React, { useEffect, useState } from 'react'
import css from "./Geners.module.css"

const Geners = () => {

    const [geners, setGeners] = useState("")

  const handleDataFromChild = (data) => {
    setGeners(data)
  };

  console.log(geners);

  
    
  return (
    <section>
       <div className={css.container}>
       <GenersListBtn idFromChild={handleDataFromChild}/>
        <FilmsByGenre idSearch={geners}/>
       </div>
    </section>
  )
}

export default Geners