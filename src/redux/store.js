import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import userReducer from './reducers/userReducer';
import uiReducer from './reducers/uiReducer';

const initalState = {};

const middelware = [thunk];

const reducers = combineReducers({
  user: userReducer,
  UI: uiReducer,
});

// const store = createStore(
//   reducers,
//   initalState,
//   compose(
//     applyMiddleware(...middelware),
//     window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
//   )
// );

const store = createStore(
  reducers,
  initalState,
  compose(applyMiddleware(...middelware))
);

export default store;
