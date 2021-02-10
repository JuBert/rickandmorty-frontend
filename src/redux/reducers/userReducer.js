import {
  SET_CHARACTERS,
  SET_FAVORITECHARACTERS,
  SET_AUTHENTICATED,
  SET_UNAUTHENTICATED,
  UPDATEFAVORITE,
} from '../types';

const initialState = {
  authenticated: false,
  characters: [],
  favCharacters: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED:
      return {
        ...state,
        authenticated: true,
      };
    case SET_UNAUTHENTICATED:
      return initialState;
    case SET_CHARACTERS:
      return {
        authenticated: true,
        characters: action.payload,
      };
    case SET_FAVORITECHARACTERS:
      return {
        ...state,
        favCharacters: action.payload,
      };
    case UPDATEFAVORITE:
      return {
        ...state,
      };
    default:
      return state;
  }
}
