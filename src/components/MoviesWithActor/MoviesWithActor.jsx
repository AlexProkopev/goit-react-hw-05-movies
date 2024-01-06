import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import "./MoviesWithActor.css"
import { defaultImgHome } from 'services/defaultImg';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MoviesWithActor = ({ movies }) => {
  const location = useLocation();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnHover: false, 
  };

  return (
    <Slider {...settings} >
      {movies !== null &&
        movies.cast.map(movie => (
          <div key={movie.id} className="itemWrapper">
            <Link
            key={movie.id}
              to={`/movies/${movie.id}`}
              state={{ from: location }}
              className="linkPopulary"
            >
              <img
                className="imgCast"
                src={
                  movie.poster_path
                    ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
                    : defaultImgHome
                }
                alt={movie.title}
              />
              <p className="title">{movie.title}</p>
            </Link>
          </div>
        ))}
         </Slider>
    
    
  );
};

export default MoviesWithActor;
