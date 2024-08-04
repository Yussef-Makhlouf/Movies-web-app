

import favoriteMoviesReducer from "./reducer";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
    favoriteMovies: favoriteMoviesReducer,
  });
  export default rootReducer