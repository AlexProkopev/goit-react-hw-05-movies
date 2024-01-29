import axios from 'axios';

export const fetchDetails = async (
  setisLoading,
  setUseState,
  setIsError,
  currentStringURI,
) => {
  try {
    setisLoading(true);
    const response = await axios.get(currentStringURI);
    setUseState(response.data);
  } catch (error) {
    setIsError(error.mesage);
  } finally {
    setisLoading(false);
  }
};
