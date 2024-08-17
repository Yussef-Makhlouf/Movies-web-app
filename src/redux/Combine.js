


import { combineReducers } from "redux";
import { favoritesReducer } from "../redux/FavouriteReducer";
import movieReducer from "./MovieReducer";


export default combineReducers({
  favoriteMovies: favoritesReducer,
  movies: movieReducer


});