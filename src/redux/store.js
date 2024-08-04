
import { createStore } from 'redux';

import rootReducer from './combine';
const store = createStore( rootReducer);

export default store;