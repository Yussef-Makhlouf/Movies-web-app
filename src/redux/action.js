
export const FAVORITE_ICON = 'TOGGLE_FAVORITE';

export const handleFavorite = (payload) => ({
  type: FAVORITE_ICON,
  payload
});
export const removeFavorite = (payload)=> ({
  
  type: FAVORITE_ICON,
  payload 

})

export default handleFavorite;









// export const   FavoriteMovies = (payload) => {
//     return {
//         type: "FAVORITE_MOVIES",
//         payload

//     }

// }
// export default FavoriteMovies;

// export const FAVORITE_ICON = 'TOGGLE_FAVORITE';

// export const handleFavorite = (movieId) => ({
//   type: FAVORITE_ICON,
//   payload: movieId,
// });