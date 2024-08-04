



import { FAVORITE_ICON } from "./action";
const FAVORITE_MOVIES = [];

const favoriteMoviesReducer = (state = FAVORITE_MOVIES, action) => {

  switch (action.type) {
    
    case FAVORITE_ICON:
      const movieId = action.payload;
      const index = state.findIndex(id => id === movieId);
      if (index >= 0) {
        return state.filter(id => id !== movieId);  // Remove from favorites
      } else {
        return [...state, movieId];  // Add to favorites
      }

    default:
      return state;
  }
};
export default favoriteMoviesReducer;

















// const INITIAL_VALUE = "FAVORITE_MOVIES";
// export default function favoriteMovies(state=INITIAL_VALUE, action) {
//     switch (action.type) {
//         case "FAVORITE_MOVIES":
//             return {
//                 ...state,
//                 favoriteMovies: action.payload
//             }
//         default:
//             return state;
//     }
// }
// import { TOGGLE_FAVORITE } from "./action";
// const initialState = [];

// const favoriteMoviesReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case TOGGLE_FAVORITE:
//       const movieId = action.payload;
//       const index = state.indexOf(movieId);
//       if (index >= 0) {
//         return state.filter(id => id !== movieId);  // Remove from favorites
//       } else {
//         return [...state, movieId];  // Add to favorites
//       }
//     default:
//       return state;
//   }
// };

// export default favoriteMoviesReducer;
