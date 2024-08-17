import axios from "axios";

const API_KEY = "aa6fc65fcedb7431af3ac2fbe6484cd0";
const BASE_URL = "https://api.themoviedb.org/3";




export const FETCH_MOVIES = 'FETCH_MOVIES';

const fetchMovies = (language) => {
  return (dispatch) => {
    axios.get(`${BASE_URL}?api_key=${API_KEY}&language=${language}`)
      .then(response => {
        dispatch({ type: FETCH_MOVIES, payload: response.data.results });
      })
      .catch(error => {
        console.error('Error fetching movies:', error);
      });
  };
};

export default fetchMovies;
