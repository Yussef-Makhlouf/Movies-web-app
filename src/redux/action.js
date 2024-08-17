


export const ADD_FAVORITE = 'ADD_FAVORITE';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const handleFavorite = (movie) => ({
  type: ADD_FAVORITE,
  payload: movie
});

export const removeFavorite = (movieId) => ({
  type: REMOVE_FAVORITE,
  payload: movieId
});



// export const   FavoriteMovies = (payload) => {
//     return {
//         type: "FAVORITE_MOVIES",
//         payload

//     }

// }

