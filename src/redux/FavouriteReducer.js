



import { ADD_FAVORITE, REMOVE_FAVORITE } from './action';

export const INITIAL_STATE = {
  favoriteMovies: []
};

export const favoritesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favoriteMovies: [...state.favoriteMovies, action.payload]
      };
    case REMOVE_FAVORITE:
      return {
        ...state,
        favoriteMovies: state.favoriteMovies.filter(movie => movie.id !== action.payload)
      };
    default:
      return state;
  }
};
;













