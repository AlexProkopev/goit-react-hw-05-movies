import axios from 'axios';

export const fetchDetails = async (
  setisLoadin,
  setMovieDetails,
  setIsErro,
  currentMovie
) => {
  try {
    setisLoadin(true);

    const response = await axios.get(currentMovie);

    setMovieDetails(response.data);
  } catch (error) {
    setIsErro(error.mesage);
  } finally {
    setisLoadin(false);
  }
};
