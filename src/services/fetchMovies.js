const { default: axios } = require('axios');

export const fetchMovies = async (
  setLoading,
  setMovies,
  setIsError,
  fetchString
) => {
  // const fetchString = `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=en-US&api_key=e9b50bda4ce56f3b360f447ed6508c77`
  try {
    setLoading(true);
    const response = await axios.get(fetchString);
    setMovies(response.data.results);
    setIsError(false);
  } catch (error) {
    setIsError(true);
  } finally {
    setLoading(false);
  }
};
