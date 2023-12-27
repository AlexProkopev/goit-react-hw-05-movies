import Loader from 'components/Loader/Loader';
import React, { useEffect, useState } from 'react';
import { fetchMovies } from 'services/fetchMovie';
import css from "./VideoPlayer.module.css"

const VideoPlayer = ({ movieId }) => {
  const [videos, setVideos] = useState([]);
  const [isLoading, setisLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const currentMovies = `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=e9b50bda4ce56f3b360f447ed6508c77`;

  useEffect(() => {
    fetchMovies(setisLoading, setVideos, setIsError, currentMovies);
  }, [currentMovies]);

  const officialTrailer = videos.find(({ name }) => name === "Official Trailer");
  const hasTrailer = officialTrailer !== undefined;

  return (
    <>
    {isLoading && <Loader />}
    {isError && <h4>Server Error</h4>}
      {hasTrailer && (
       <div className={css.wrapperVideoPlayer}>
        
         <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${officialTrailer.key}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className={css.videoPlayer}
        ></iframe>
       </div>
      )}
      {!hasTrailer && <p className={css.textNotTrailer}>No official trailer available.</p>}
    </>
  );
};

export default VideoPlayer;