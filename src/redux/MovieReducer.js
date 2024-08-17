import { FETCH_MOVIES } from '../actions/movieActions';

const initialState = {
  movies: []
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES:
      return {
        ...state,
        movies: action.payload
      };
    default:
      return state;
  }
};

export default movieReducer;
