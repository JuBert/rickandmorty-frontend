import {
  SET_CHARACTERS,
  SET_FAVORITECHARACTERS,
  SET_ERRORS,
  CLEAR_ERRORS,
  LOADING_UI,
  SET_UNAUTHENTICATED,
  // UPDATE_FAVORITE,
} from '../types';
import axios from 'axios';

export const signupUser = (newUserData, history) => (dispatch) => {
  // dispatch({ type: LOADING_UI });
  axios
    .post('/signup', newUserData)
    .then((res) => {
      const FBIdToken = `Bearer ${res.data.token}`;
      localStorage.setItem('FBIdToken', FBIdToken);
      axios.defaults.headers.common['Authorization'] = FBIdToken;
      dispatch(getCharacters());
      dispatch({ type: CLEAR_ERRORS });
      history.push('/');
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const loginUser = (userData, history) => (dispatch) => {
  //   dispatch({ type: LOADING_UI });
  axios
    .post('/login', userData)
    .then((res) => {
      const FBIdToken = `Bearer ${res.data.token}`;
      localStorage.setItem('FBIdToken', FBIdToken);
      axios.defaults.headers.common['Authorization'] = FBIdToken;
      dispatch(getCharacters());
      dispatch({ type: CLEAR_ERRORS });
      history.push('/');
    })
    .catch((err) => {
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data,
      });
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem('FBIdToken');
  delete axios.defaults.headers.common['Authorization'];
  dispatch({ type: SET_UNAUTHENTICATED });
};

export const getCharacters = () => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get('/characters')
    .then((res) => {
      dispatch({
        type: SET_CHARACTERS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const getFavorites = () => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .get('/favorites')
    .then((res) => {
      dispatch({
        type: SET_FAVORITECHARACTERS,
        payload: res.data,
      });
    })
    .catch((err) => console.log(err));
};

export const updateFavorite = (characterId) => (dispatch) => {
  // dispatch({ type: LOADING_UI });
  axios
    .get(`/characters/${characterId}`)
    .then(() => {
      dispatch({
        type: SET_FAVORITECHARACTERS,
      });
    })
    .catch((err) => console.log(err));
};
