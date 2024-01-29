import axios from 'axios';

export const fetchMovies = async (
  setisLoadin,
  setMovie,
  setIsErro,
  searchString
) => {
  try {
    setisLoadin(true);
    const response = await axios.get(searchString);
    setMovie(response.data.results);
    setIsErro(false);
  } catch (error) {
    setIsErro(true);
  } finally {
    setisLoadin(false);
  }
};
