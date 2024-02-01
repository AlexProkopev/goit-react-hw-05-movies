import React, { useEffect, useState } from 'react'
import { fetchDetails } from 'services/fetchDetails';
import "./GenersListCheckbox.css"
import { RadioGroup, Radio, FormControlLabel } from '@mui/material';
import Loader from 'components/Loader/Loader';



const GenersListBtn = ({idFromChild}) => {
    const [geners, setGeners] = useState(null)
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [selectedGenre, setSelectedGenre] = useState("28");

    
    const currentStringURI = "https://api.themoviedb.org/3/genre/movie/list?api_key=e9b50bda4ce56f3b360f447ed6508c77&language=en-US"

    useEffect(()=> {
    fetchDetails(setIsLoading,setGeners,setIsError,currentStringURI)
    },[currentStringURI])
    

    const handleChangeGeners = (e) => {
       setSelectedGenre(e.target.value)
       idFromChild(e.target.value) 
      
       
    }
  return (
    <>
    {isError && <p>Error</p>}
    {isLoading && <Loader/>}
    <RadioGroup value={selectedGenre} onChange={handleChangeGeners} style={{ flexDirection: 'row' , alignItems: "center", justifyContent:"center"}}>
       {geners!== null && geners.genres.map(({id,name}) => {
        return (
          <FormControlLabel
          key={id}
            value={id}
            control={<Radio />}
            label={name}
            sx={{ color: 'white', '& .MuiSvgIcon-root': { fontSize: 16 }  }}
          />
        );
       })}
    </RadioGroup></>
  )
}

export default GenersListBtn