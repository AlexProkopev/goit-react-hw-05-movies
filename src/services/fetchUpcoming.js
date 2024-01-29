import axios from 'axios';

export const fetchUpcoming = async (
  setisLoading,
  setMovies,
  setIsError,
  searchString
) => {
  try {
    setisLoading(true);
    const {data} = await axios.get(searchString);
    setMovies(data.results);
    setIsError(false);
  } catch (error) {
    setIsError(true);
  } finally {
    setisLoading(false);
  }
};
