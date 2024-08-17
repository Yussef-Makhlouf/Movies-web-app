

import {  createStore } from 'redux';
import { favoritesReducer } from '../redux/FavouriteReducer';
const store = createStore(favoritesReducer);

export default store;

// import { createStore, applyMiddleware } from 'redux';
// import thunk from 'redux-thunk';
// import rootReducer from './reducers';

// const store = createStore(rootReducer, applyMiddleware(thunk));

// export default store;



